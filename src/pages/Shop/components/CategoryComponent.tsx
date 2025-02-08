import { useProducts } from "../../../shared/hooks/useProducts";

const categoryOptions = [
  { label: "All", value: "all" },
  { label: "Mens", value: "men's clothing" },
  { label: "Womens", value: "women's clothing" },
  { label: "Electronics", value: "electronics" },
  { label: "Jewelery", value: "jewelery" },
];

const CategoryComponent = () => {
  const { category, setCategory } = useProducts();

  return (
    <select
      onChange={(e) => setCategory(e.target.value)}
      value={category}
      className="focus:outline-none border border-gray-200 p-1 tracking-wide text-sm text-gray-700 font-semibold"
    >
      {categoryOptions.map(({ label, value }) => {
        return (
          <option value={value} key={label} className="">
            {label}
          </option>
        );
      })}
    </select>
  );
};

export default CategoryComponent;
