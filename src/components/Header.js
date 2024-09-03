import React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";

 const Search = ({ setPopUp }) => {
  console.log(setPopUp);
  return (
    <div className="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white p-6 rounded-lg shadow-2xl w-6/12">
            <h1 className="text-2xl font-semibold text-gray-600 mb-4 text-center">Search News</h1>
            <form>
               <div className="m-4">
                    <h1 className="ml-1">Enter Category <span className="text-red-600 text-xl">*</span></h1>
                    <input required placeholder="Eg. Sports,Entertainment,Political,etc." className="p-2 border-b-2 border-gray-400  w-full"></input>
               </div>
               <div className="m-4">
                    <h1 className="ml-1">Enter Sub-Category</h1>
                    <input placeholder="Eg. Sports,Entertainment,Political,etc." className="p-2 border-b-2 border-gray-400  w-full"></input>
               </div>
                <div className="flex justify-between px-32">
                    <button 
                    className="bg-gray-300 py-2 px-4 border-l-2 rounded-lg border-gray-600 text-gray-600 flex items-center gap-1 mt-4">
                        Search
                    </button>
                    <button
                        className="bg-[#ffe9d9] py-2 px-4 border-l-2 border-[#fa703f] rounded-lg text-[#bc4c2e] flex items-center gap-1 mt-4"
                        onClick={() => setPopUp(false)}>
                        Cancel
                    </button>
                </div>
            </form>
            
      </div>
    </div>
  );
};

const Header = () => {
  const [popUp, setPopUp] = useState(false);

  const handleClick = () => {
    window.location.reload(true);
  };

  const menuItems = [
    "Sport",
    "Health",
    "Political",
    "Business",
    "Finance",
    "Life",
    "Entertainment",
  ];

  return (
    <div className="px-4  py-5 flex justify-between bg-gray-700 shadow-xl">
      <div className="text-3xl text-white font-bold" onClick={handleClick}>
        <Link to="/">NewsHub</Link>
      </div>
      <div className="flex mt-3">
        <ul className="flex justify-between">
          {menuItems.map((item, index) => (
            <li key={index} className="mx-2 text-white font-bold">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex">
        <div className="ml-8  mt-5 scale-150 cursor-pointer" onClick={() => setPopUp(true)}>
          🔍
        </div>
        <div className="bg-white w-0.5 h-15 mx-5 mt-1"></div>
        <ul>
          <Link to="/login">
            <li className="text-white mb-2">Login</li>
          </Link>
          <Link to="/register">
            <li className="text-white">Register</li>
          </Link>
        </ul>
      </div>
      {popUp && <Search setPopUp={setPopUp} />}
    </div>
  );
};

export default Header;
