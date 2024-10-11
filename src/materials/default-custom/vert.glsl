uniform float scale;
uniform float size;

varying vec2 vUv;
varying vec3 vColor;

void main() {
    vUv = uv;
    vColor = color;
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    gl_PointSize = size * ( scale / length( mvPosition.xyz ) );
    gl_Position = projectionMatrix * mvPosition;
 
}
