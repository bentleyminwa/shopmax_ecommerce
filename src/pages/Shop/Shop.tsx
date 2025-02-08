import { ProductList, SearchComponent } from "../../shared/components";

const Shop = () => {
  return (
    <main>
      <SearchComponent />
      <section className="w-10/12 mx-auto grid grid-cols-1">
        <div>Categories</div>
        <div>
          <ProductList />
        </div>
      </section>
    </main>
  );
};

export default Shop;
