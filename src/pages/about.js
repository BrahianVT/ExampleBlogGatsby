import * as React from 'react';
import { Link } from 'gatsby';
import  Layout  from "../components/layout"
import { graphql } from 'gatsby';
const AboutPage = ({data, location}) => {
    const siteTitle = data.site.siteMetadata.title
    return (
        <Layout location={location} title={siteTitle}>
            <h1> Aboute Me</h1>
            <p>Hi there! I'm a computer engineer working with Java technologies just 
                interesting in learning more about performance, low-latency, concurrency
                and so on and so forth.
            </p>

            <Link to="/">Back to Home</Link>
        </Layout>
    )
}


export default AboutPage

export const pageQuery = graphql`
    query { 
        site {
            siteMetadata {
                title 
            }
        }
    }
`