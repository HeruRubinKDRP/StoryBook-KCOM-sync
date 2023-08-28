import React from 'react';
import {useGLTF, MeshTransmissionMaterial, useTexture} from '@react-three/drei';
import {
    Color, Material,
    Mesh,
    MeshBasicMaterial,
    MeshPhongMaterial,
    MeshPhysicalMaterial,
    MeshStandardMaterial,
    Object3D
} from 'three';
import {GLTF} from "three-stdlib";
import {coffeeSurface, matGlass} from "../materials/materials";

const transMissionShaderConfig = {
    meshPhysicalMaterial: true,
    transmissionSampler: true,
    backside: false,
    samples: 10,
    resolution: 2048,
    transmission: 1,
    roughness: 0.1,
    thickness: 0.75,
    ior: 1.5,
    chromaticAberration: 0.1,
    anisotropy: 0.1,
    distortion: 0.0,
    distortionScale: 0.3,
    temporalDistortion: 0.5,
    clearcoat: 1,
    fog: true,
    fogDensity: 0.5,
    attenuationDistance: 0.5,
    attenuationColor: new Color('#ffffff'),
    color: new Color('#ffffff'),
    bg: new Color('rgba(255,255,255,0)')
}
// Extend the GLTF type
export interface ExtendedGLTF extends GLTF {
    nodes: {
        [name: string]: any;
    };
}

const CoffeeMug: React.FC = () => {
    const mugMesh = useGLTF("/three/mug/coffee-cup.glb") as ExtendedGLTF; // Type assertion here
    const liquidMesh = useGLTF("/three/mug/just-mug-liquid.glb") as ExtendedGLTF; // Type assertion here

    const mugMaterial = new MeshPhysicalMaterial(matGlass);
    const beverageTexture = useTexture("./three/textures/beverage-surface.jpg");
    const coffeeSide = useTexture("./three/textures/coffee-side.jpg");
    const bevNRM = useTexture("./three/textures/coffee-texture_NRM.jpg");
    const bevSPEC = useTexture("./three/textures/coffee_SPEC.jpg");

    const coffeeMaterial = new MeshPhysicalMaterial({
        ...coffeeSurface,
        map: beverageTexture,
        normalMap: bevNRM,
        specularIntensityMap: bevSPEC,
        specularIntensity: 0.5,
    });
    const coffeeSideMaterial = new MeshPhysicalMaterial({
        ...coffeeSurface,
        map: coffeeSide,
    })



    return (
        <group dispose={null}>
            <mesh geometry={mugMesh.nodes.mug.geometry}>
                <MeshTransmissionMaterial background={new Color(transMissionShaderConfig.bg)} {...transMissionShaderConfig} />
            </mesh>

            <group dispose={null}  position={[0, 4, 0]}>
                <mesh geometry={liquidMesh.nodes.liquidTop.geometry}>
                    <meshPhysicalMaterial {...coffeeMaterial} />
                </mesh>
                <mesh geometry={liquidMesh.nodes.liquidSide.geometry}>
                    <meshPhysicalMaterial {...coffeeSideMaterial} />
                </mesh>
            </group>

            {/* Other meshes from the GLTF model can be added here if needed */}
        </group>
    );
};

export default CoffeeMug;
