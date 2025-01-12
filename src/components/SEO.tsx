import React from "react"
import PropTypes from "prop-types"
import Head from "next/head"
import icon from "../../public/favicon.ico"

function SEO({ description, children, image: metaImage, title, pathname }) {
  const site = {
    siteMetadata: {
      title: `IDE innit`,
      description: `We promote cross platform collaborative development and open source software.`,
      author: `@lajat`,
      siteUrl: "https://ideinnit.tech",
    },
  }
  const metaDescription = description || site.siteMetadata.description
  const image = metaImage ? `${site.siteMetadata.siteUrl}${metaImage}` : null
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null
  return (
    <Head>
      <title>
        {title
          ? `${title} | ${site.siteMetadata.title}`
          : site.siteMetadata.title}
      </title>
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="description" content={metaDescription} />
      <meta name="og:title" content={title || site.siteMetadata.title} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title || site.siteMetadata.title} />
      <meta name="twitter:description" content={metaDescription} />
      {metaImage ? (
        <>
          <meta name="og:image" content={image} />
          <meta name="twitter:card" content="summary_large_image" />
        </>
      ) : (
        <meta name="twitter:card" content="summary" />
      )}
      {children}
    </Head>
  )
}
SEO.defaultProps = {
  children: null,
  description: ``,
}
SEO.propTypes = {
  description: PropTypes.string,
  children: PropTypes.element,
  title: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
}
export default SEO
