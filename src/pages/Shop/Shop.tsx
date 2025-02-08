import { ProductList, SearchComponent } from "../../shared/components";
import CategoryComponent from "./components/CategoryComponent";

const Shop = () => {
  return (
    <main>
      <SearchComponent />
      <div className="w-10/12 mx-auto my-10">
        <h1 className="text-4xl font-bold">Products</h1>
        <h3 className="text-sm font-semibold text-gray-500">/ Shop</h3>
      </div>
      <section className="w-10/12 mx-auto grid grid-cols-1">
        <div className="flex justify-between items-center mb-5">
          <div>
            <CategoryComponent />
          </div>
          <div>
            <div>filter</div>
            <div>sort</div>
          </div>
        </div>
        <div>
          <ProductList />
        </div>
      </section>
    </main>
  );
};

export default Shop;
