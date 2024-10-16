import React from 'react';
import logo from './social.png';
import google from './google.png';
import apple from './apple.png';
import twitter from './twitter.png';
import ButtonLoginAlt from './components/ButtonLoginAlt';

function App() {
  return (
    <div className="flex justify-center items-center p-16 w-full min-w-fit h-fit font-mono text-nowrap text-slate-900">
      <div className="flex flex-col items-center min-w-fit h-auto px-16 py-8 rounded-xl border-double border-4 border-white bg-[radial-gradient(circle_at_top,_rgba(243,101,39,0.2)_5%,_rgba(255,255,255,1)_50%)] shadow-md">
        <a
          href="https://www.flaticon.com/free-icons/evernote"
          title="evernote icons"
        >
          <img src={logo} alt="logo" className="w-16 h-auto mt-4" />
        </a>
        <h1 className="text-3xl font-bold pt-6">Welcome Back!</h1>
        <p className="pt-2">Please enter your details to log in.</p>
        <div className="flex mt-6 gap-x-4 w-auto">
          <a
            href="https://www.flaticon.com/free-icons/google"
            title="google icons"
          >
            <ButtonLoginAlt imgLogo={google} />
          </a>

          <a
            href="https://www.flaticon.com/free-icons/logos"
            title="logos icons"
          >
            <ButtonLoginAlt imgLogo={apple} />
          </a>
          <a
            href="https://www.flaticon.com/free-icons/twitter"
            title="twitter icons"
          >
            <ButtonLoginAlt imgLogo={twitter} />
          </a>
        </div>
        <div className="flex justify-center items-center pt-6 w-full">
          <hr className="border-t-1 border-slate-900 w-1/3" />
          <p className="px-4">OR</p>
          <hr className="border-t-1 border-slate-900 w-1/3" />
        </div>
        <div className="flex flex-col w-full pt-4">
          <p>E-Mail Address</p>
          <input
            type="email"
            placeholder="Enter your email..."
            className="rounded-md border border-orange-400 focus:outline-none focus:border-blue-500 px-2 py-1"
          />
        </div>
        <div className="flex flex-col w-full pt-4">
          <p>Password</p>
          <input
            type="password"
            placeholder="Enter your password..."
            className="rounded-md border border-orange-400 focus:outline-none focus:border-blue-500 px-2 py-1"
          />
        </div>
        <div className="flex pt-4 w-full justify-between">
          <div className="flex items-center">
            <input type="checkbox" id="#" name="#" value={'#'} />
            <label htmlFor="#" className="pl-1">
              Remember me
            </label>
          </div>
          <b className="hover:cursor-pointer hover:underline">
            Forgot Password?
          </b>
        </div>
        <button className="bg-orange-400 text-white p-2 hover:bg-orange-600 duration-300 rounded-md w-full mt-4">
          Sign In
        </button>
        <p className="m-4">
          Don't have an account yet?{' '}
          <b className="hover:cursor-pointer hover:underline">Sign Up</b>
        </p>
      </div>
    </div>
  );
}

export default App;
