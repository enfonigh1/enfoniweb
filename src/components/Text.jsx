import React from "react";

const Text = ({ className, text, ...props }) => {
  return (
    <div className={className + ""} {...props}>
      {text}
    </div>
  );
};

export default Text;
