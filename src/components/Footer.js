import React from "react";
import facebook from "../assets/Facebook-logo.png";
import linkedin from "../assets/Linkedin-logo.png";
import twitter from"../assets/Instagram-logo.png";
import instagram from"../assets/Twitter-logo.png";


export default function Footer() {
    return (
        <footer className="icon">
            <img src={facebook} />
            <img src={linkedin} />
            <img src={instagram} />
            <img src={twitter} />
        </footer>
    )
}
