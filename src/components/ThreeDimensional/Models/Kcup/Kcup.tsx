import React from 'react';
import {useGLTF, useTexture} from "@react-three/drei";

const MugCeramic = () => {
    const KcupMesh = useGLTF("/three/mug/mug-ceramic.glb");

    return(
        <group dispose={null}>
            <primitive object={KcupMesh.scene} />
        </group>
    )

};

export default MugCeramic;