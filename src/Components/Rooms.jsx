import { useState } from "react";
import BookingModal from "./BookingModel";

const roomsData = [
  { name: "Deluxe Room", price: 2000, type: "deluxe" },
  { name: "Suite Room", price: 3500, type: "suite" },
  { name: "Luxury Room", price: 5000, type: "luxury" },
];

const Rooms = () => {
  const [filter, setFilter] = useState("all");
  const [selectedRoom, setSelectedRoom] = useState(null);

  const filteredRooms =
    filter === "all"
      ? roomsData
      : roomsData.filter((room) => room.type === filter);

  return (
    <div id="rooms" className="p-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Our Rooms</h2>

      <div className="flex justify-center gap-4 mb-6">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("deluxe")}>Deluxe</button>
        <button onClick={() => setFilter("suite")}>Suite</button>
        <button onClick={() => setFilter("luxury")}>Luxury</button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {filteredRooms.map((room, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-2xl shadow-amber-300">
            <h3 className="text-xl font-bold">{room.name}</h3>
            <p>₹{room.price}</p>

            <button
              onClick={() => setSelectedRoom(room)}
              className="mt-4 bg-yellow-400 px-4 py-2 rounded "
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {selectedRoom && (
        <BookingModal
          room={selectedRoom}
          close={() => setSelectedRoom(null)}
        />
      )}
    </div>
  );
};

export default Rooms;