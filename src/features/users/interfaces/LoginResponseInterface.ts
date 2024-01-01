import { ProductInterface } from "../../general/interfaces/ProductInterface";

export interface LoginResponse {
  loginUser: {
    message: string;
    token: string;
    id: string;
    fullName: string;
    email: string;
    password: string;
    userType: string;
    userProducts: ProductInterface[];
  };
}
