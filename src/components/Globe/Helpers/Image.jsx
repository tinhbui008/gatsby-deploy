import { useTexture } from "@react-three/drei"
import React from "react"

export default function Image({ url, scale }) {
  const texture = useTexture(url)

  return (
    <sprite scale={scale}>
      <spriteMaterial sizeAttenuation={false} map={texture} />
    </sprite>
  )
}
