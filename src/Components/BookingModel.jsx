const BookingModal = ({ room, close }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-80">
        <h2 className="text-xl font-bold mb-4">Book {room.name}</h2>

        <input className="border w-full p-2 mb-3" placeholder="Name" />
        <input type="date" className="border w-full p-2 mb-3" />

        <button
          onClick={() => {
            alert("Booking Confirmed ✅");
            close();
          }}
          className="bg-yellow-400 w-full py-2 rounded"
        >
          Confirm
        </button>

        <button onClick={close} className="mt-2 text-red-500 w-full">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BookingModal;