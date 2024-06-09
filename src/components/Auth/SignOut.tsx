import { logout } from "@services/firebase/auth";

const SignOut = () => {
  return (
    <button onClick={() => logout()}>
      <span className="underline">Sign Out</span>
    </button>
  );
};

export default SignOut;
