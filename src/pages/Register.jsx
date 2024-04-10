import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Register = () => {

  const navigate = useNavigate()

  const {registerUser} = useContext(AuthContext)
  
    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photoUrl, email, password);

        registerUser(email, password) 
        .then(r => console.log(r.user))
        .catch(e => e.message);

        navigate('/')
    }
    

  return (
    <div>
      <Nav />
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 shadow-lg mx-auto">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-2xl font-bold">Register your account</h1>
          <hr />
        </div>
        <form  className="space-y-12 " onSubmit={handleRegister}>
          <div className="space-y-4 ">
            <div>
              <label htmlFor="text" className="block mb-2 text-sm">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="w-full px-3 py-3 bg-gray-100 rounded-md "
              />
            </div>
            <div>
              <label htmlFor="text" className="block mb-2 text-sm">
                Photo URL
              </label>
              <input
                type="text"
                name="photoUrl"
                id="photoUrl"
                placeholder="Enter your photo url"
                className="w-full px-3 py-3 bg-gray-100 rounded-md "
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                className="w-full px-3 py-3 bg-gray-100 rounded-md "
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-3 py-3 bg-gray-100 rounded-md"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button className=" w-full px-8 py-3 font-semibold  bg-black text-white">
                Register
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-400">
              Already have an account?
              <Link to="/login" className="hover:underline text-violet-400">
                Login
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
