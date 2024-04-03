import React from "react";

function Navigation() {
  return (
    <>
      <div className="navigation text-xs font-semibold flex justify-between items-center pb-16">
        <div className="text-3xl text-green-500">Biccas</div>
        <nav className="">
          <ul className="flex space-x-3 pl-48">
            <li>Home</li>
            <li>Product</li>
            <li>FAQ</li>
            <li>Blog</li>
            <li>About Us</li>
          </ul>
        </nav>
        <ul className="flex items-center space-x-3">
          <button>Login</button>
          <button className="bg-green-500 text-white p-2 px-4 rounded">Sign Up</button>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
