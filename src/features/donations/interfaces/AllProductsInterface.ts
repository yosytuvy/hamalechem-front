import { ProductInterface } from "./ProductInterface";

export interface AllProductsInterface {
  allProducts: {
    donations: ProductInterface[];
    requests: ProductInterface[];
  };
}
