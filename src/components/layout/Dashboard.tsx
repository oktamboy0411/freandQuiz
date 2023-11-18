import { Link, Outlet } from "react-router-dom";
import { RootState } from "../../redux/store/store";
import { useSelector } from "react-redux";
import { Avatar, Button, Navbar, Typography } from "@material-tailwind/react";
import GetStarted from "../common/getStarted";
import AvatarLogo from "../../assets/AvatarLogo";

function Dashboard() {
  const user = useSelector((state: RootState) => state.user.userData);
  console.log(user);

  return (
    <div>
      <Navbar className="mx-auto my-4 max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 flex items-center justify-between ">
        <div className="flex items-center justify-start gap-3">
          { user.userLogo ? <Avatar  withBorder src={user.userLogo  } alt="logo" /> : <AvatarLogo />}
          <Typography variant="h5" className="text-black">{user.userName}</Typography>
        </div>
        <div className=" flex items-center justify-center p-4">
          <Link to={"/dashboard"}>
            <Typography variant="h6" className="p-4 text-blue-gray-900">Dashboard</Typography>
          </Link>
          <Link to={"/dashboard/create"}>
            <Typography variant="h6" className="p-4 text-blue-gray-900">Create Quiz</Typography>
          </Link>
          <Link to={"/dashboard/settings"}>
            <Typography variant="h6" className="p-4 text-blue-gray-900">Settings</Typography>
          </Link>
          <Button className="ml-4 bg-pinkColor">Log Out</Button>
        </div>
      </Navbar>
      {"userId" in user ? (
        <Outlet />
      ) : (
        <div className=" p-4 flex items-center justify-center gap-4 flex-col">
          <p className=" font-bold text-2xl text-pinkColor">
            you must register first
          </p>
          <GetStarted />
        </div>
      )}
    </div>
  );
}

export default Dashboard;
