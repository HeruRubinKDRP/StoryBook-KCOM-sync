import React from 'react';
import {useGLTF, useTexture} from "@react-three/drei";

const MugCeramic = () => {
    const MugMesh = useGLTF("/three/mug/mug-ceramic.glb");

    return(
        <group dispose={null}>
            <primitive object={MugMesh.scene} />
        </group>
    )

};

export default MugCeramic;