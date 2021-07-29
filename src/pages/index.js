import * as React from "react"
import SocialLinks from "../components/social_links"
import '../styles/main.css'
import { Helmet } from "react-helmet"
import ImageGallery from "../components/image_gallery"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Monsieur's Space</title>
        <link rel="canonical" href="https://monsieur.space" />
      </Helmet>

      <h1 className="workTitle">WORK IN PROGRESS</h1>
      <h2 style={{textAlign: 'center', fontSize: '0.8em', padding:0}}>YOU CAN FIND ME HERE</h2>
      <h3 style={{textAlign: 'center', fontSize: '0.6em', padding:0}}>TU PEUX ME TROUVER ICI</h3>
      <SocialLinks />
      <div style={{ marginBottom: `1.45rem` }}>

      <h3>ART GALLERY</h3>
      <ImageGallery />
    </div>
    </main>
  )
}

export default IndexPage
