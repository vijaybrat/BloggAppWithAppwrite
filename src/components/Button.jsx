import { attributesToProps } from "html-react-parser";
import React from "react";

function Button({
  children,
  type = "button", // Set default value for type separately
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props // Spread operator moved to the end
}) {
  return (
    <button
      type={type} // Set type attribute separately
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props} // Spread operator placed at the end
    >
      {children}
    </button>
  );
}

export default Button;
