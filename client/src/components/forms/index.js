import React from "react";

//this is for the Input area

export function Input(props){
    return (
        <div className = "form-group">
            <input className = "form-control" {...props} />
        </div>
    );
}
