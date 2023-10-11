import Navbar from "../features/navbar/navbar";
import { ProductDetail } from "../features/product/components/ProductDetail";
function ProductDetailPage() {
  return (
    <>
      <Navbar>
        <ProductDetail></ProductDetail>
      </Navbar>
    </>
  );
}
export default ProductDetailPage;
