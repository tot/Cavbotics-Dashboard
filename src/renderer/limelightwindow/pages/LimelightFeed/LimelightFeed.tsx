const LimelightFeed = () => {
  return (
    <div className="w-screen h-screen bg-neutral-900 flex flex-col p-4">
      <div className="w-full h-full bg-teal-500 relative flex items-center justify-center">
        <p className="absolute inset-0 text-white">Limelight camera feed</p>
        <img
          // src="http://10.85.90.39:5800/stream.mjpg"
          src="http://10.85.90.11:5800/stream.mjpg"
          className="w-autp h-full relative z-10"
          alt="Limelight camera feed"
        />
      </div>
    </div>
  );
};

export default LimelightFeed;
