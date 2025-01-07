import React from "react";

const ScrollDownButton = () => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight, // Scroll to the bottom of the page
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <button
      onClick={handleScrollDown}
      className="fixed bottom-4 right-4 bg-blue-500 text-white py-2 px-3.5 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      aria-label="Scroll Down"
    >
      ↓
    </button>
  );
};

export default ScrollDownButton;
