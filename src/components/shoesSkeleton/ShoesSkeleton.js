import React from "react"
import ContentLoader from "react-content-loader"

const ShoesSkeleton = (props) => (
  <ContentLoader 
    speed={5}
    width={356}
    height={489}
    viewBox="0 0 341 474"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="32" y="30" rx="0" ry="0" width="280" height="200" /> 
    <rect x="34" y="250" rx="0" ry="0" width="280" height="60" />
    <rect x="34" y="345" rx="0" ry="0" width="120" height="40" />
    <rect x="34" y="405" rx="0" ry="0" width="48" height="48" />
    <rect x="120" y="405" rx="0" ry="0" width="200" height="51" />
  </ContentLoader>
)

export default ShoesSkeleton;

