import React from "react";

const Processing = ({ orderStatus }) => {
  function statusBar(colorCode) {
    return (
      <span
        className={`py-2 px-6 font-fira bg-[#${colorCode}]  inline-block rounded-lg`}
      >
        {orderStatus}
      </span>
    );
  }

  switch (orderStatus) {
    case "Not Processed":
      return statusBar("F9F1D6"); // light yellow
    case "Processing":
      return statusBar("E3F8EC");
    case "Dispatched":
      return statusBar("FCE4E4");
    case "Cancelled":
      return statusBar("FCE4E4"); // Light Red
    case "Completed":
      return statusBar("E3F8EC"); // Light Green
    default:
      return statusBar("F9F1D6"); // light yellow
  }
};

export default Processing;
