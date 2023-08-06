import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="m-10 text-center sm:my-16">
      <h1 className="mb-8 text-center text-xl font-semibold tracking-widest  md:text-3xl ">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue prdering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
