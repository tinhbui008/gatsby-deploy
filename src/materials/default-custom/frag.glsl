uniform sampler2D visibility;
uniform float shift;
uniform sampler2D shape;

varying vec2 vUv;
varying vec3 vColor;

//random
float rand(vec2 co){
    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

// Simplex 2D noise
//
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {

    vec2 uv = vUv;
    uv.x += shift;
    vec4 v = texture2D(visibility, uv);
    if (length(v.rgb) > 1.0) discard;

    vec3 col =  vec3(64.0,176.0,197.0)/255.0;
    vec3 colDark =  vec3(27.0,68.0,112.0)/255.0;
    //col -= abs(snoise(uv*2.0))*0.2;
    col -= rand(vUv)*0.3;

    

    gl_FragColor = vec4(col, 1.0 );
    vec4 shapeData = texture2D( shape, gl_PointCoord );
    if (shapeData.a < 0.5) discard;
    //gl_FragColor = gl_FragColor * shapeData;

    //gl_FragColor = vec4(vec3(snoise(uv*20.0)), 1.0 );

        
}