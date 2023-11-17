import { Link, Outlet } from "react-router-dom";
import { RootState } from "../../redux/store/store";
import { useSelector } from "react-redux";
import { Button } from "@material-tailwind/react";
import GetStarted from "../common/getStarted";

function Dashboard() {
  const user = useSelector((state: RootState) => state.user.userData);
  console.log(user);

  return (
    <div>
      <div className=" flex items-center justify-center gap-4 p-4">
        <Link to={"/dashboard"}>
          <Button className=" bg-pinkColor">Quiz List</Button>
        </Link>
        <Link to={"/dashboard/create"}>
          <Button className=" bg-pinkColor">Create Quiz</Button>
        </Link>
        <Link to={"/dashboard/settings"}>
          <Button className=" bg-pinkColor">Settings</Button>
        </Link>
      </div>
      {"userId" in user ? 
      <Outlet /> : 
        <div className=" p-4 flex items-center justify-center gap-4 flex-col">
          <p className=" font-bold text-2xl text-pinkColor">you must register first</p>
          <GetStarted />
        </div>
        }
    </div>
  );
}

export default Dashboard;
