import React, { useState } from 'react';
import VideoPlayer from './components/VideoPlayer';
import OverlayManager from './components/OverlayManager';

const App = () => {
    const [rtspUrl, setRtspUrl] = useState('');  

    return (
        <div>
            <h1>Livestream App</h1>
            <input
                type="text"
                placeholder="Enter RTSP URL"
                value={rtspUrl}
                onChange={(e) => setRtspUrl(e.target.value)}  e
            />
            <VideoPlayer rtspUrl={rtspUrl} /> 
            <OverlayManager />  
        </div>
    );
};

export default App;
