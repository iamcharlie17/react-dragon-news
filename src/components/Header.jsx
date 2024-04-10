import moment from "moment/moment";
import logo from "../assets/logo.png";
import BreakingNews from "./BreakingNews";

const Header = () => {
  return (
    <>
    <div className="flex justify-center mt-4 ">
      <div className="space-y-2">
        <img src={logo} alt="" />
        <p className="text-center text-lg">Journalism Without Fear or Favour</p>
        {/* for dynamic time --> moment.js */}
        <p className="text-center text-sm">
          {moment().format("dddd, MMMM D, YYYY")}
        </p>
      </div>
    </div>
    <BreakingNews />
    </>
  );
};

export default Header;
