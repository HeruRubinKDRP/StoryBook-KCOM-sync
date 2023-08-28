import React, {useEffect, useLayoutEffect, useRef} from 'react';
import {Canvas, useFrame, useLoader, useThree} from 'react-three-fiber';
import {
    AccumulativeShadows,
    Box,
    ContactShadows,
    Environment,
    Lightformer, OrbitControls,
    PerspectiveCamera, RandomizedLight,
    useGLTF,
    useTexture,
} from '@react-three/drei';

import {
    ACESFilmicToneMapping,
    Camera, CineonToneMapping,
    Mesh,
    MeshPhysicalMaterial,
    MeshStandardMaterial,
    Object3D,
    PMREMGenerator, Texture,
    TextureLoader,
    UnsignedByteType, Vector3, WebGLRenderer
} from "three";
import {coffeeSurface, matGlass} from "./materials/materials";
import {FilmShader, RGBELoader} from "three-stdlib";
import {EnvironmentSystem, EnvironmentMapContext} from "../../../public/three/EnvironmentSystem";
import {Bloom, EffectComposer, N8AO, Noise, TiltShift2} from "@react-three/postprocessing";
import Mug from "./Models/Mug";
import AnimatedDashedLine from "./AnimatedDashLine/DashLine";
import {RotatingBox} from "./debug/debug_cube";
import {MugPlanes} from "./Models/MugPlanes";
import MugCeramic from "./Models/CeramicMug";





export interface iThreeSceneProps {
    cameraPositionX?: number;
    cameraPositionY?: number;
    cameraPositionZ?: number;
    FOV?: number;
    cameraMode?: 'static' | 'orbit';
}


const CameraController: React.FC = () => {
    const { camera } = useThree();

    React.useEffect(() => {
        if (camera) {
            camera.lookAt(new Vector3(0, 0, 0));
        }
    }, [camera]);

    return null; // This component doesn't render anything
};


const ThreeScene = (props: iThreeSceneProps) => {
    const [envMap, setEnvMap] = React.useState(null);

    useEffect(() => {
        //matGlass.envMap = envMap;
    }, [envMap]);

    const renderer = new WebGLRenderer({ antialias: true, alpha: true });

    renderer.toneMapping = CineonToneMapping;
    renderer.outputColorSpace = "srgb";
    renderer.toneMappingExposure = 0.5;

    return (
        <div style={{ height: "100vh" }}>
            <img
                src="./three/textures/coffee-texture_NRM.jpg"
                style={{
                    position: "fixed",
                    height : "20vh",
                    width: "20vw",
                    top: "0",
                    left: "0",
                }}
            />

            <EnvironmentMapContext.Provider value={envMap}>
            <Canvas>
                <EnvironmentSystem path={'./three/hdr/MR_INT-006_LoftIndustrialWindow_1024.hdr'} mode="hdr">
                    {/*<Lightformer intensity={8} position={[10, 5, 0]} scale={[10, 40, 1]} onUpdate={(self) => self.lookAt(0, 0, 0)} />*/}
                </EnvironmentSystem>

                <EffectComposer>
                    {/*<TiltShift2 blur={0.4} />*/}
                    <Bloom
                        luminanceThreshold={0.99}
                        luminanceSmoothing={0.99}
                        intensity={0.1}
                        height={400}
                    />

                   <Noise opacity={0.06} />
                </EffectComposer>
                <PerspectiveCamera
                    makeDefault
                    position={[
                        props.cameraPositionX ?? 0,
                        props.cameraPositionY ?? 4,
                        props.cameraPositionZ ?? 19
                    ]}
                    fov={props.FOV ?? 55}
                />
                {props.cameraMode === 'orbit' && <OrbitControls />}
                <CameraController />

                {/*<spotLight intensity={.1} position={[20, 20, 10]} penumbra={1} castShadow={true} angle={0.2} />*/}
                {/*<ambientLight position={[11,42,22]} intensity={.1} />*/}
                {/*<pointLight position={[13, 13, 13]} />*/}

                {/*<Mug />*/}
                {/*<AnimatedDashedLine*/}
                {/*    startX={0}*/}
                {/*    startY={0}*/}
                {/*    endX={11}*/}
                {/*    endY={11}*/}
                {/*    numDots={3}*/}
                {/*    distanceBetween={1}*/}
                {/*/>*/}
                <AccumulativeShadows temporal color={"transparent"} frames={100} scale={10}>
                    <RandomizedLight amount={8} position={[2, 2, -5]} />
                </AccumulativeShadows>
                <MugCeramic />
                {/*<ContactShadows scale={50} position={[0, 0, 0]} blur={0.25} far={100} opacity={0.25} />*/}
            </Canvas>
            </EnvironmentMapContext.Provider>
        </div>
    );
};

export default ThreeScene;
