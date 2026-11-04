"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function LiquidCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const mouse = new THREE.Vector2(0.5, 0.5);
    const targetMouse = new THREE.Vector2(0.5, 0.5);

    // Minimalist monochromatic liquid dispersion fragment shader
    const material = new THREE.ShaderMaterial({
      uniforms: {
        u_time: { value: 0 },
        u_mouse: { value: mouse },
        u_resolution: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float u_time;
        uniform vec2 u_mouse;
        uniform vec2 u_resolution;
        varying vec2 vUv;

        void main() {
          vec2 st = gl_FragCoord.xy / u_resolution.xy;
          float dist = distance(st, u_mouse);
          
          // Subtle wave ripples based on cursor distance & time
          float wave = sin(dist * 20.0 - u_time * 1.5) * 0.03;
          float attenuation = smoothstep(0.45, 0.0, dist);
          
          // Monochromatic obsidian ambient illumination (max 0.05 opacity)
          float brightness = attenuation * (0.02 + wave * 0.03);
          
          gl_FragColor = vec4(vec3(0.95), brightness);
        }
      `,
      transparent: true,
      depthTest: false,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const onMouseMove = (e: MouseEvent) => {
      targetMouse.x = e.clientX / window.innerWidth;
      targetMouse.y = 1.0 - e.clientY / window.innerHeight;
    };

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      material.uniforms.u_resolution.value.set(
        window.innerWidth,
        window.innerHeight
      );
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("resize", onResize);

    let rafId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      material.uniforms.u_time.value = clock.getElapsedTime();
      mouse.lerp(targetMouse, 0.08);
      material.uniforms.u_mouse.value = mouse;

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40 overflow-hidden"
    />
  );
}
