import React, { useState } from "react";
import axios from "axios";
import Background from "./Background";

const InputBox = ({search,setSearch,userId,setUserId}) => {
    
    const handleChange = (event) => {
        setUserId(event.target.value)
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      setUserId(event.target.elements.userId.value)
       setSearch(1);    
    }; 

  return (
    <div>
        {search === 0 ? (
            <div className="bg-black  lg:px-48 xl:px-56 px-10  rounded-lg mt-10">
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
              <input
                type="text"
                className="w-full bg-black text-white border border-white outline-none px-4 py-2 rounded-md mb-4"
                placeholder="Enter your instagram id here..."
                name="userId"
                value={userId}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="bg-white text-black border border-white px-4 py-2 rounded-md hover:bg-black hover:text-white transition-colors duration-300"
              >
                create QR
              </button>
            </form>
          </div>
        ):(
            <Background search={search} setSearch={setSearch} userId={userId}/>
        )}
    </div>
  );
};

export default InputBox;
