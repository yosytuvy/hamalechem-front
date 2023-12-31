import { useMutation } from "@apollo/client";
import { SignupInterface } from "../../interfaces/SignupInterface";
import { SIGNUP_USER } from "../../../../apollo/queries/apolloQueries";

const useSignUp = () => {
  const [addUser] = useMutation(SIGNUP_USER);
  
  const signUpReq = async (user: SignupInterface) => {
    
    try {
      const userData = await addUser({ 
         variables: {
          input: {
            email: user.email,
            password: user.password,
            fullName: user.fullName,
            userType: user.userType,
          }
         }
      });      
      return userData;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return signUpReq
}

export default useSignUp;
