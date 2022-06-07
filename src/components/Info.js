import React from "react";
import photo from "../assets/Profile_Picture.jpg"

export default function Info() {
    return(
        <div className="info">
            <img src={photo} className="info--profile"/>
            <h1 className="info--name">Ipek Aydin</h1>
            <h3 className="info--occupation">Frontend Developer</h3>
            <p className="info--site">ipekaydin.website</p>
            <a href="https://www.google.com"><button className="btn btn-lt"><i className="fa-solid fa-envelope"></i> Email</button></a>
        </div>
    )
}
