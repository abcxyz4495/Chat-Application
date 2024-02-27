import { ImSpinner9 } from "react-icons/im";

export default function Fallback() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <ImSpinner9 className="w-10 h-10 rounded-full animate-spin" />
    </div>
  );
}
