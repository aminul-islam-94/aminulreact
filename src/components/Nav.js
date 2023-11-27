import "../styles/tailwind.css";
export default function Nav() {
  return (
    <header className="bg-yellow-500 p-2 text-white">
      <div className="mx-auto flex flex-col sm:flex-row justify-between items-center">
        <form className="flex flex-col sm:flex-row sm:gap-2">
          <input
            type="text"
            className=" sm:mt-0 rounded-lg  border text-gray-800 border-gray-200 bg-white"
            placeholder="Arrive on"
          />
          <input
            type="text"
            className="sm:mt-0 rounded-lg border text-gray-800 border-gray-200 bg-white"
            placeholder="Stay..."
          />
          <input
            type="text"
            className=" sm:mt-0 rounded-lg  border text-gray-800 border-gray-200 bg-white"
            placeholder="Bedrooms"
          />
          <button
            type="submit"
            className=" sm:mt-0 px-12 bg-black rounded-lg text-white"
          >
            Search
          </button>
        </form>
      </div>
    </header>
  );
}
