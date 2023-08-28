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
import {ExtendedGLTF} from "./Mug";

export const MugPlanes: React.FC = () => {

const mugMesh = useGLTF("/three/mug/mug-planes.glb") as ExtendedGLTF; // Type assertion here

return(
    <group>
        <mesh geometry={mugMesh.nodes['Plane'].geometry} material={mugMesh.nodes['Plane'].material} />
    </group>
)
};