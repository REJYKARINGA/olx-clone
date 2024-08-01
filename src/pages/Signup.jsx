import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import behind from '../assets/login,sign.png';

const Signup = () => {
  const [rememberLogin, setRememberLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(email,password)


    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src={behind}
          alt="///"
        />

        <div className="bg-white/70 fixed top-0 left-0 w-full h-screen" />

        <div className="fixed w-full px-4 py-20  z-20 ">
          <div className="max-w-[450px] h-[450px] mx-auto bg-white rounded-lg border-2 border-gray-300 mt-14">
            <div className="max-w-[320px] mx-auto pt-16 ">
              <h1 className="text-3xl  font-nsans-bold">Sign Up</h1>

              <form
                onSubmit={handleFormSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  className="p-3 my-2 bg-gray-100 rounded"
                  type="email"
                  placeholder="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="p-3 my-2 bg-gray-100 rounded"
                  type="password"
                  placeholder="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button className="bg-orange-600 text-white py-3 my-6 rounded font-nsans-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-gray-600">
                  <p>
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={rememberLogin}
                      onChange={(e) => setRememberLogin(!rememberLogin)}
                    />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="my-4">
                  <span className="text-gray-600 mr-2">
                    Already subscribed to OLX?
                  </span>
                  <Link to="/login">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;