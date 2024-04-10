import {
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import swimImg from "../assets/qZone1.png";
import classImg from "../assets/qZone2.png";
import playGroundImg from "../assets/qZone3.png";

const RightContent = () => {
  return (
    <div className="space-y-8 p-4">
      <div className="space-y-2">
        <h1 className="text-xl font-bold">Login With</h1>
        <div className="flex flex-col gap-4">
          <button className="btn bg-transparent border-2 border-blue-400 text-blue-400">
            <FaGoogle />
            Login with Google
          </button>
          <button className="btn bg-transparent border-2 border-black">
            <FaGithub />
            Login with Github
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <h1 className="text-xl font-bold">Find us on</h1>
        <div className="flex flex-col gap-0">
          <button className="btn bg-transparent  justify-start">
            <span className="bg-slate-100 p-2 rounded-full text-blue-600">
              <FaFacebookF />
            </span>
            Facebook
          </button>
          <button className="btn bg-transparent justify-start">
            <span className="bg-slate-100 p-2 rounded-full text-blue-300">
              <FaTwitter />
            </span>
            Twitter
          </button>
          <button className="btn bg-transparent justify-start">
            <span className="bg-slate-100 p-2 rounded-full text-pink-600">
              <FaInstagram />
            </span>
            Instagram
          </button>
        </div>
      </div>

      {/* q zone */}
      <div className="bg-slate-100 p-4 rounded-lg space-y-2">
        <h1 className="text-xl font-bold">Q-Zone</h1>
        <div>
          <img src={swimImg} alt="" />
        </div>
        <div>
          <img src={classImg} alt="" />
        </div>
        <div>
          <img src={playGroundImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightContent;
