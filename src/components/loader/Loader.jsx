import React from "react";
import "./Loader.css";
function Loader() {
  return (
    <div>
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
