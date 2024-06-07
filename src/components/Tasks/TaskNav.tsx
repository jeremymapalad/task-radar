import { useAuth } from "../../contexts/authContext";
import SignOut from "../Auth/SignOut";

const TaskNav = () => {
  const { currentUser } = useAuth();

  return (
    <div className="fixed top-0 left-0 right-0 bg-white py-2 px-4 shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between">
        <p>Hi, {currentUser?.email?.split("@")[0]}!</p>
        <SignOut />
      </div>
    </div>
  );
};

export default TaskNav;
