import React, { useMemo } from "react"
import { BackSide, Color, ShaderMaterial, SphereGeometry } from "three"

const haloShader = {
  v: `
  varying vec3 vVertexWorldPosition;
  varying vec3 vVertexNormal;
  
  void main() {
  
    vVertexNormal = normalize(normalMatrix * normal);
  
    vVertexWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  
    // set gl_Position
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
    `,
  f: `
  uniform vec3 glowColor;
  uniform float coeficient;
  uniform float power;
  uniform float alpha;

  varying vec3 vVertexNormal;
  varying vec3 vVertexWorldPosition;

  void main() {
    vec3 worldCameraToVertex = vVertexWorldPosition - cameraPosition;
    vec3 viewCameraToVertex = (viewMatrix * vec4(worldCameraToVertex, 0.0)).xyz;
    viewCameraToVertex = normalize(viewCameraToVertex);
    float intensity =
        pow(coeficient + dot(vVertexNormal, viewCameraToVertex), power);

    gl_FragColor = vec4(glowColor, intensity  * alpha  );
  }
    `,
}

function Outer({ color, geometry, opacity = 1 }) {
  const mat = useMemo(
    () =>
      new ShaderMaterial({
        vertexShader: haloShader.v,
        fragmentShader: haloShader.f,
        uniforms: {
          coeficient: { value: 0.25 },
          power: { value: 5 },
          glowColor: { value: new Color(color || "#6b7fff") },
          alpha: { value: opacity },
        },
        side: BackSide,
        transparent: true,
        depthWrite: false,
      }),
    [opacity]
  )

  return (
    <group scale={[1.15, 1.15, 1.15]}>
      <mesh material={mat} geometry={geometry} />
    </group>
  )
}

function Inner({ color, geometry, opacity = 1 }) {
  const mat = useMemo(
    () =>
      new ShaderMaterial({
        vertexShader: haloShader.v,
        fragmentShader: haloShader.f,
        uniforms: {
          coeficient: { value: 1 },
          power: { value: 3.5 },
          glowColor: { value: new Color(color || "#4dc9dd") },
          alpha: { value: opacity },
        },
        transparent: true,
        depthWrite: true,
      }),
    [opacity]
  )

  return (
    <group scale={[1.0001, 1.0001, 1.0001]}>
      <mesh material={mat} geometry={geometry} />
    </group>
  )
}

function InnerTop({ color, geometry, opacity = 0.3 }) {
  const mat = useMemo(
    () =>
      new ShaderMaterial({
        vertexShader: haloShader.v,
        fragmentShader: haloShader.f,
        uniforms: {
          coeficient: { value: 1 },
          power: { value: 11.5 },
          glowColor: { value: new Color(color || "#99d4f1") },
          alpha: { value: opacity },
        },
        transparent: true,
        depthWrite: true,
      }),
    [opacity]
  )

  return (
    <group scale={[1.0001, 1.0001, 1.0001]}>
      <mesh material={mat} geometry={geometry} />
    </group>
  )
}

export default function GlobeGlow(props) {
  const geometry = useMemo(
    () => new SphereGeometry(props.radius || 4.99, 100, 50),
    []
  )

  return (
    <group position={props.position}>
      <Inner geometry={geometry} {...props} />
      <InnerTop geometry={geometry} {...props} />
      {/* <Outer geometry={geometry} {...props} /> */}
    </group>
  )
}
