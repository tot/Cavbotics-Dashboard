const WebcamFeed = () => {
  return (
    <div className="w-screen h-screen bg-neutral-900 flex flex-col p-4">
      <div className="flex-1 w-auto h-auto relative flex items-center justify-center">
        <p className="absolute inset-0 text-white">Webcam camera feed</p>
        <img
          src="http://roborio-8590-frc.local:1181/stream.mjpg"
          // src="http://10.85.90.2:1181/stream.mjpg"
          className="w-auto h-3/4 relative z-10"
          alt="Webcam camera feed"
        />
      </div>
    </div>
  );
};

export default WebcamFeed;
