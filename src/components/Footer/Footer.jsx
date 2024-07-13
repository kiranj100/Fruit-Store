import React from "react";

function Footer() {
  return (
    <>
      <footer
        className="text-center w-full
      flex flex-col items-center justify-center
      space-y-2 h-20 bg-gray-700 mt-auto"
      >
        <h1 className="text-lime-500 text-2xl">
          CopyRight&copy; {new Date().getFullYear()}
        </h1>
        <span className="text-lime-500">Fruit Store</span>
      </footer>
    </>
  );
}

export default Footer;
