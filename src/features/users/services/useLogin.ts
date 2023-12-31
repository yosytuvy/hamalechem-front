import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../../apollo/queries/apolloQueries";
import { LoginInterface } from "../interfaces/LoginInterface";

const useLogin = () => {
  const [login] = useMutation(LOGIN_USER);
  
  const loginReq = async (user: LoginInterface) => {
    try {      
      const response = await login({
        variables: {
          input: {
            email: user.email,
            password: user.password,
          },
        },
      });      
      const TOKEN = response.data.loginUser.token;

      const {fullName, id, userType} = response.data.loginUser;
      localStorage.setItem("HAMALECHEM_TOKEN", TOKEN);
      localStorage.setItem("User_Details", JSON.stringify({id, fullName, userType}));
      return response.data;
    } catch (error) {
      console.error(error);

      return Promise.reject(error);
    }
  };
  return loginReq;
};

export default useLogin;
