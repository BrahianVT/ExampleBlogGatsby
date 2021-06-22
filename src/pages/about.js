import * as React from 'react';
import { Link } from 'gatsby';
const AboutPage = () => {
    return (
        <main>
            <title>About Me</title>
            <h1> Aboute Me</h1>
            <p>Hi there! I'm a computer engineer working with Java technologies just 
                interesting in learning more about performance, low-latency, concurrency
                and so on and so forth.
            </p>

            <Link to="/">Back to Home</Link>
        </main>
    )
}


export default AboutPage