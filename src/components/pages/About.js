import React from 'react';
import coverImage from "../../assets/cover/cover-img.jpg"
import { Card, Image } from 'react-bootstrap';


function About() {
    return (
        <section>
        <Image src={coverImage} height ="500px" width = "100%"/>

        <div>
            <Card>
                <Card.Header as="h3">About Me</Card.Header>
                <Card.Body>
                    <Card.Text>
                    A financial Data Analyst interested in the field of Webdevelopment.
                    Currently persuing Full stack web development at UC-Berkeley extension.
                    

A 24 week rigorous and fast paced program which gives you the knowledge and skills to build dynamic end-to-end web applications and become a full stack web developer.

Applicable Courses: HTML5, CSS, JavaScript, jQuery, MERN Stack, SEO online marketing, Node.js, Express.js, Bootstrap, Materialize, Server-Side APIs, Web APIs, Object-Oriented Programming, web app deployment etc.
Testing Framework: JEST and Insomnia

                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

        </section>

        
    );
}

export default About;