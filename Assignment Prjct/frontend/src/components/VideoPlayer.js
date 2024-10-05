import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoPlayer = ({ rtspUrl }) => {
    const videoRef = useRef(null);
    const playerRef = useRef(null);

    useEffect(() => {
        if (playerRef.current) {
            playerRef.current.dispose();
        }

        const player = videojs(videoRef.current, {
            controls: true,
            autoplay: false,
            sources: [{ src: rtspUrl, type: 'application/x-rtsp' }]
        });

        playerRef.current = player;

        return () => {
            player.dispose();
        };
    }, [rtspUrl]);

    return (
        <div data-vjs-player>
            <video ref={videoRef} className="video-js"></video>
        </div>
    );
};

export default VideoPlayer;
