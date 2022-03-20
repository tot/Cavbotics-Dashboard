const WebcamFeed = () => {
  return (
    <div className="w-screen h-screen bg-neutral-900 flex flex-col p-4">
      <div className="w-full h-auto relative flex items-center justify-center">
        <p className="absolute inset-0 text-white">Limelight camera feed</p>
        <img
          src="http://10.85.90.2:1181/stream.mjpg"
          className="w-full h-full relative z-10"
          alt="Webcam camera feed"
        />
      </div>
    </div>
  );
};

export default WebcamFeed;
