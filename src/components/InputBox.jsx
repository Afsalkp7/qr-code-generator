import React, { useState } from "react";

const InputBox = () => {

    const [userId,setUserId] = useState("")

    const handleChange = (event) => {
        setUserId(event.target.userId)
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      
    };

  return (
    <div className="bg-black  lg:px-48 xl:px-56 px-10  rounded-lg mt-10">
      <form onSubmit={handleSubmit} className="flex flex-col items-center" onChange={handleChange}>
        <input
          type="text"
          className="w-full bg-black text-white border border-white outline-none px-4 py-2 rounded-md mb-4"
          placeholder="Enter your instagram id here..."
          name="userId"
          value={userId}
        />
        <button
          type="submit"
          className="bg-white text-black border border-white px-4 py-2 rounded-md hover:bg-black hover:text-white transition-colors duration-300"
        >
          create QR
        </button>
      </form>
    </div>
  );
};

export default InputBox;
