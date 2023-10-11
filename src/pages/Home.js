import Navbar from "../features/navbar/navbar";
import ProductList from "../features/product/components/ProductList";
function Home() {
  return (
    <>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
    </>
  );
}
export default Home;
