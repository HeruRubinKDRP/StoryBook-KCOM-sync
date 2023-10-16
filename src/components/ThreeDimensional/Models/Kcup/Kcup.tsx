import React from 'react';
import {useGLTF, useTexture} from "@react-three/drei";

const Pods = () => {
    const KcupMesh = useGLTF("/three/kcups/pods.glb");

    return(
        <group dispose={null}>
            <primitive object={KcupMesh.scene} />
        </group>
    )
};

export default Pods;