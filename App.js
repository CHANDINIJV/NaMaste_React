import React from "react";
import ReactDOM from "react-dom/client";


const title = (
    <div className="container">
         <h1>hello namste</h1>
        <h2>hello namste</h2>
        <h3>hello namste</h3>
    </div>
);
const Title = () =>(
    <div className="title">
        {title}
        <h1>hello namste</h1>
        <h2>hello namste</h2>
        <h3>hello namste</h3>
    </div>
);
const HeaderComponent = () =>(
    <div className="container1">
         <h3>This is heading from JSX</h3>
       {<Title />}
    </div>
   
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);