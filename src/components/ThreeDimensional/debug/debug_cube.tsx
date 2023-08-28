import React, {useRef} from "react";
import {useFrame} from "react-three-fiber";
import {Box} from "@react-three/drei";

export const RotatingBox: React.FC = () => {
    const boxRef = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (boxRef.current) {
            boxRef.current.rotation.x += 0.01;
            boxRef.current.rotation.y += 0.01;
        }
    });

    return (
        <Box ref={boxRef} args={[1, 1, 1]}>
            <meshStandardMaterial color="hotpink" />
        </Box>
    );
};