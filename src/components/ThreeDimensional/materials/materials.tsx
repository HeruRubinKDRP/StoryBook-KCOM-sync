import {MeshPhysicalMaterial, MeshPhysicalMaterialParameters, MeshStandardMaterialParameters, Texture} from "three";
import {useTexture} from "@react-three/drei";

interface iGlassMaterial {
    color: number;
    transmission: number;
    opacity: number;
    metalness: number;
    roughness: number;
    ior: number;
    thickness: number;
    specularIntensity: number;
    specularColor: number;
    envMapIntensity: number;
    lightIntensity: number;
    exposure: number;
    clearcoat: number;
    envMap: Texture | string;
}
export let matGlass : MeshPhysicalMaterialParameters  = {
    color: 0xcecece,
    transparent: true,
    reflectivity: 0.25,
    opacity: 1,
    metalness: 0.22,
    roughness: 0.1,
    ior: 1.5,
    thickness: 0.65,
    specularIntensity: 1,
    clearcoat: 1,
    envMapIntensity: 1,
    transmission: 1,
}

export let coffeeSurface : MeshPhysicalMaterialParameters  = {
    color: 0xcecece,
    transparent: false,
    reflectivity: 0.15,
    opacity: 1,
    metalness: 0.22,
    roughness: 0.1,
    ior: 1.5,
    thickness: 0.15,
    specularIntensity: 1,
    sheen: 0.5,
    clearcoat: 1,
    envMapIntensity: 1,
    transmission: 0,

}