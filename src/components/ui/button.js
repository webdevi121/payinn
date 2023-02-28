import React from "react";

const Button = (props) => {
  const IconComponent = props.icon;
  return (
    <button
      className={`rounded-2xl px-7 py-2 text-base font-bold text-white ${props.classes}`}
      type={props.type}
    >
      <div className="flex justify-center">
        {props.icon ? (
          <div className="mr-3">
            <IconComponent className="h-6 w-6" aria-hidden="true" />
          </div>
        ) : null}
        <div>{props.name}</div>
      </div>
    </button>
  );
};

export default Button;
