import { useForm, SubmitHandler } from "react-hook-form";

import useLocalStorage from "../hooks/useLocalStorage";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [hasAccount, setHasAccount] = useLocalStorage("has_Account", true);
  const handleToggle = () => setHasAccount(!hasAccount);

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="w-96 p-6">
        {hasAccount ? (
          <form>
            <div>Login</div>
          </form>
        ) : (
          <form>Register</form>
        )}
        <button onClick={handleToggle}>Toggle</button>
      </div>
    </div>
  );
}
