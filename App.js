import React from "react";
import ReactDOM from "react-dom/client";

const Title = () =>(
    <h1>Hello from react</h1>
);
const Heading = ()=>(
    <div className="container">
        <Title />
         <h2>This is from conatiner</h2>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);