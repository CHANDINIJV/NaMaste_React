import React from "react";
import ReactDOM from "react-dom/client";

//Assignment
const HeaderComponent = () =>(
    <div className="conatiner">
       <div className="row">
        <div className="col-12">
            <div className="col-4">
            <img src={("desktop/download")} alt="image not found" />
            </div>
            <div className="col-4">
                <h1>search bar</h1>
            </div>
            <div className="col-4">
                <h3>user icon</h3>
            </div>
        </div>
       </div>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);