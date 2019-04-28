import React from "react";

//Exporting conatiner, row and col components using bootstrap

export function Container({fluid, childern}) {
    return <div className = {`container${fluid ? "-fluid" : ""}`}>
        {childern}
    </div>;
}

export function Row ({ fluid, childern}) {
    return <div className = {`row${fluid ? "-fluid" : ""}`}>
        {childern}
    </div>;
}

export function Col ({ size, childern}) {
    return (
        <div clasName = {size
                .split(" ")
                .map(size => "col-" + size)
                .join(" ")}>
            {childern}
        </div>
    );
}