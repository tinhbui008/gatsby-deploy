import { extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import vertextShader from "./vert.glsl";
import fragmentShader from "./frag.glsl";
import * as THREE from "three";

const DefaultCustomMaterial = shaderMaterial(
  {
    scale: 1,
    size: 1,
    shift: 0,
    visibility: new THREE.Texture(),
    shape: new THREE.Texture()
  },
  vertextShader,
  fragmentShader
);

extend({ DefaultCustomMaterial });

export default DefaultCustomMaterial;
