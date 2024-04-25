import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {Footer()}{" "}
      {/* another way to call a function in jsx; comments should also be enclosed insode braces*/}
    </div>
  );
};

const root1 = ReactDOM.createRoot(document.getElementById("react"));
console.log(root1);
root1.render(AppLayout());
/* here u can directly call the function like given or use <AppLayout /> inside render()  */
