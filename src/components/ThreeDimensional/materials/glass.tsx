import { MeshPhysicalMaterial, Vector2 } from 'three';

const glassPhysicalMaterial = new MeshPhysicalMaterial({
    color: 0xFFFFFF,
    transmission: 0.9, // This is important for glass
    envMapIntensity: 1,
    roughness: 0, // Perfectly smooth
    metalness: 0, // Not metallic
    clearcoat: 1, // Add some clearcoat for extra shininess
    clearcoatRoughness: 0.1,
    reflectivity: 0.9,
    ior: 1.5, // Index of refraction for glass
});