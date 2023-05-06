import { loginPost } from "../apis/api/accountApi";
import { ILoginForm } from "../interfaces/accountForm";
import { useMutation, useQueryClient } from "react-query";

function useLogin() {
  const queryClient = useQueryClient();
 
  const { mutateAsync: loginPostMutate } = useMutation(
    (loginForm: ILoginForm) => loginPost(loginForm)
  );
  const handleLogin = async (loginForm: ILoginForm) => {
    try {
      await loginPostMutate(loginForm);
    
      return true;
    } catch (error) {
      return false;
    }
  };
  return { handleLogin };
}
export default useLogin;