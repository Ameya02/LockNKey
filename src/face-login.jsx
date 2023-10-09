import React, { useRef, useState, useEffect } from 'react';

function Facelogin() {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const initializeVideo = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                videoRef.current.srcObject = stream;
            } catch (error) {
                console.error('Error accessing webcam:', error);
                // If the camera access fails, set the canvas to black
                canvasRef.current.getContext('2d').fillStyle = 'black';
                canvasRef.current.getContext('2d').fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            }
        };

        initializeVideo();
    }, []);

    const authenticateFace = async () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    };

    return (
        <div className="flex flex-col bg-blue-50 h-screen">
            <div className="">
                <ul className="bg-blue-50 text-gray-950 p-4  h-16">
                    <li className="float-left">
                        <h3 className="font-bold text-gray-950 ">Lock & Key</h3>
                    </li>
                    <li className="float-right">
                        <a href="#home" className="text-blue-50 bg-blue-950 font-bold px-3 py-2">Home</a>
                        <a href="#about" className="text-gray-950  hover:bg-blue-950 hover:text-blue-50 px-3 py-2">About us</a>
                        <a href="#contact" className="text-gray-950  hover:bg-blue-950 hover:text-blue-50  px-3 py-2">Contact</a>
                        <a href="#signup" className="text-gray-950  hover:bg-blue-950 hover:text-blue-50  px-3 py-2">Sign up</a>
                    </li>
                </ul>
                <hr />
            </div>
            <div className="flex flex-col ">
                <div className="container mx-auto flex flex-col p-16 justify-center items-center">
                    <div className="relative w-96 h-72 flex flex-col justify-center items-center">
                        <video ref={videoRef} autoPlay playsInline className="absolute inset-0 w-full h-full" style={{ border: '2px solid #000' }}></video>
                    </div>
                    <canvas ref={canvasRef} className="hidden" ></canvas>
                    <button
                        onClick={authenticateFace}
                        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Authenticate Face
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Facelogin;
