import React from "react";

function Alert(props) {
  return (
    props.alert && (
      <>
        {/* Failure */}
        <div
          id="alert-2"
          className="text-center text-red-800 dark:text-red-400"
          role="alert"
        >
          <div className="text-sm font-medium ">{props.alert.msg}</div>
        </div>

        {/* Success */}
        <div
          id="alert-3"
          className=" text-center mt-5 text-green-800 dark:text-green-400"
          role="alert"
        >
          <div className="text-sm max-sm:text-xs font-medium ">
            {props.alert.msgTwo}
          </div>
        </div>
      </>
    )
  );
}

export default Alert;
