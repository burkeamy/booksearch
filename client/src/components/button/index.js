import React from "react";

function Button({ type ="default", className, childern, onClick}) {
    return (
        <button onClick = {onClick} className = {["btn btn-lg", `btn-${type}`, className].join(" ")}>
            {childern}
        </button>
    );
}

export default Button;