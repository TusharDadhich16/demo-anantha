const Hero = () => {
  return (
    <div className="h-screen bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945')] bg-cover bg-center flex items-center justify-center text-white">
      <div className="bg-black/60 p-8 rounded-xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to Anantha Hotel
        </h1>
        <p className="mt-4">Luxury Stay at Tonk Road, Laxmi Nagar</p>
        <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-xl">
          Explore Rooms
        </button>
      </div>
    </div>
  );
};

export default Hero;