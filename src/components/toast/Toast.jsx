import React from "react";
import "./Toast.css";
function Toast() {
  function launch_toast() {
    var x = document.getElementById("toast");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 5000);
  }
  return (
    <div>
      <button onclick={() => launch_toast()}>Show Toast</button>
      <div id="toast">
        <div id="img"></div>
        <div id="desc">order has been placed</div>
      </div>
    </div>
  );
}

export default Toast;
