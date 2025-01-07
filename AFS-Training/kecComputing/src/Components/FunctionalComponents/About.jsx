import React from "react";

const About = (props) => {
    const styling = {
        textAlign: "center", 
        color: "red", 
    };

    return (
        <section>
            <h1>This is About Page</h1>
            <h2 style={styling}>Learning Props Concept</h2>
            <h2>I am Studying in {props.College} College</h2>
            <h3>Other Colleges: {props.clg1}, {props.clg2}</h3>
        </section>
    );
};

export default About;
