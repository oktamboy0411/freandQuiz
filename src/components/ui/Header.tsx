import { RootState } from "../../redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Navbar, Typography } from "@material-tailwind/react";
import AvatarLogo from "../../assets/AvatarLogo";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../../redux/reducers/userReducer";

function Header() {
  const user = useSelector((state: RootState) => state.user.userData);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logOut = () => {
    dispatch(removeUser())
    navigate("/")
  }

  return (
    <Navbar className="mx-auto my-4 max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 flex items-center justify-between ">
      <div className="flex items-center justify-start gap-3">
        {user.userLogo ? (
          <Avatar withBorder src={user.userLogo} alt="logo" />
        ) : (
          <AvatarLogo />
        )}
        <Typography variant="h5" className="text-black">
          {user.userName}
        </Typography>
      </div>
      <div className=" flex items-center justify-center p-4">
        <Link to={"/dashboard"}>
          <Typography variant="h6" className="p-4 text-blue-gray-900">
            Dashboard
          </Typography>
        </Link>
        <Link to={"/dashboard/create"}>
          <Typography variant="h6" className="p-4 text-blue-gray-900">
            Create Quiz
          </Typography>
        </Link>
        <Link to={"/dashboard/settings"}>
          <Typography variant="h6" className="p-4 text-blue-gray-900">
            Settings
          </Typography>
        </Link>
        <Button onClick={logOut} className="ml-4 bg-pinkColor">Log Out</Button>
      </div>
    </Navbar>
  );
}

export default Header;
