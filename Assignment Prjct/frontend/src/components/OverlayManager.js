import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OverlayManager = () => {
    const [overlays, setOverlays] = useState([]);
    const [newOverlay, setNewOverlay] = useState({ content: '', position: 'top-left', size: '100x100' });

    const fetchOverlays = async () => {
        const response = await axios.get('/api/overlays');
        setOverlays(response.data);
    };

    useEffect(() => {
        fetchOverlays();
    }, []);

    const handleCreate = async () => {
        await axios.post('/api/overlays', newOverlay);
        setNewOverlay({ content: '', position: 'top-left', size: '100x100' });
        fetchOverlays();
    };

    return (
        <div>
            <h2>Overlay Manager</h2>
            <input
                type="text"
                placeholder="Overlay Content"
                value={newOverlay.content}
                onChange={(e) => setNewOverlay({ ...newOverlay, content: e.target.value })}
            />
            <button onClick={handleCreate}>Add Overlay</button>
            <h3>Current Overlays</h3>
            <ul>
                {overlays.map((overlay) => (
                    <li key={overlay._id}>{overlay.content}</li>
                ))}
            </ul>
        </div>
    );
};

export default OverlayManager;
