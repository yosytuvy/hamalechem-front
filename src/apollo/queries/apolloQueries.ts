import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS = gql`
  query AllProducts {
    allProducts {
      donations {
        _id
        name
        image
        details
      }
      requests {
        _id
        name
        image
        details
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($input: LoginInput!) {
    loginUser(input: $input) {
      message
      token
      id
      fullName
      email
      userType
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation SignupUser($input: SignupInput!) {
    signupUser(input: $input) {
      id
      fullName
      email
      password
      userType
    }
  }
`;
