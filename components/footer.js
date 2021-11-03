import React from "react";

function Footer() {
  return (
    <footer className="text-center py-5 text-gray-500 mt-5">
      <div className="text-xs">
        <p>&copy; {new Date().getFullYear()} Alfie Loakes</p>
      </div>
    </footer>
  );
}

export default Footer;
