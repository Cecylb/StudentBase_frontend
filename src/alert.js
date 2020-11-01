import React from "react";

export default function displayAlert(error) {
    return (
        <div className="alert alert-danger" role="alert">
            <p>{error}</p>
        </div>
    )
}