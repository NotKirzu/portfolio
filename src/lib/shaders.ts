export const vertex = `
attribute vec4 random;
varying vec4 vRandom;
uniform float uTime;

void main() {
  vRandom = random;
  vec3 pos = position * 2.0 - 1.0;
  pos.z *= 10.0;

  vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);

  float t = uTime * 0.6;
  mvPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x);

  gl_PointSize = 300.0 / length(mvPos.xyz) * (random.x + 0.1);
  gl_Position = projectionMatrix * mvPos;
}
`;

export const fragment = `
precision highp float;

uniform float uTime;
uniform vec3 uColor;

varying vec4 vRandom;

void main() {
	vec2 uv = gl_PointCoord.xy;
	
	float circle = smoothstep(0.5, 0.4, length(uv - 0.5)) * 0.8;
	
	gl_FragColor.rgb = uColor;
	gl_FragColor.a = circle;
}
`;
