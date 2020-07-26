import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"

const Footer = () => {
    return (
        <div className= "d-flex justify-content-center px-5">
                
            <a href ="https://github.com/ns8279" target = "_blank" rel = "noopener noreferrer"><FaGithub /> </a>
           
            <a href ="https://www.linkedin.com/in/nirupama-sundararaman/" target = "_blank" rel = "noopener noreferrer"><FaLinkedin /></a>
            <a href = "https://twitter.com/" target = "_blank" rel = "noopener noreferrer"><AiOutlineTwitter /></a>
        </div>
    );
}

export default Footer;