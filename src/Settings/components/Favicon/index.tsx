import React from 'react'

interface FaviconProps {
  faviconUrl?: string
}

const DynamicFavicon: React.FC<FaviconProps> = ({ faviconUrl }) => {
  if (!faviconUrl) {
    return (
      <>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </>
    )
  }

  return (
    <>
      <link href={faviconUrl} rel="icon" type="image/svg+xml" />
      <link href={faviconUrl} rel="apple-touch-icon" />
    </>
  )
}

export { DynamicFavicon }
