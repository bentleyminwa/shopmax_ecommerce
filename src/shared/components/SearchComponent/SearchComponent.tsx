import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchComponent = () => {
  return (
    <form className="w-full flex justify-center items-center">
      <input
        type="text"
        placeholder="search products"
        className="border border-gray-200 my-5 p-3 w-1/2 md:w-1/3 rounded-sm focus:outline-none text-gray-500 tracking-wider"
      />

      <FaMagnifyingGlass className="text-xl -ml-8 bg-white" />
    </form>
  );
};

export default SearchComponent;
