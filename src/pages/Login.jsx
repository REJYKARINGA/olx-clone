import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import behind from '../assets/login,sign.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [rememberLogin, setRememberLogin] = useState(false);
  
  const { logIn } = UserAuth();
  const navigate = useNavigate();

  const validation = (fieldName, value) => {
    switch (fieldName) {
      case 'email':
        return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      case 'password':
        return value.length >= 6;
      default:
        return false;
    }
  };

  const handleForSubmit = async (e) => {
    e.preventDefault();

    const isEmailValid = validation('email', email);
    const isPasswordValid = validation('password', password);

    setEmailValid(isEmailValid);
    setPasswordValid(isPasswordValid);

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    try {
      await logIn(email, password);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="w-full h-screen object-cover ">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src={behind}
          alt="///"
        />

        <div className="flex bg-white/70 fixed top-0 left-0 w-full h-screen  " />

        <div className="fixed w-full mt-[11%] ">
          <div className="max-w-[30%] mt-4 mx-auto border-2 border-gray-300 bg-white/100 rounded-lg">
            <div className="max-w-[320px] mx-auto py-12">
              <h1 className="text-3xl font-nsans-bold">Login</h1>

              <form
                onSubmit={handleForSubmit}
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
                {!emailValid && (
                  <p className="text-red-600"> Email is invalid/blank</p>
                )}

                <input
                  className="p-3 my-2 bg-gray-100 rounded"
                  type="password"
                  placeholder="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {!passwordValid && (
                  <p className="text-red-600"> Password is invalid/blank</p>
                )}

                <button className="bg-orange-600 text-white py-3 my-6 rounded font-nsans-bold">
                  Login
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
                  <p> Need Help?</p>
                </div>
                <p className="my-4">
                  <span className="text-gray-600 mr-2">New to OLX?</span>
                  <Link to="/signup">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
