import {useThree} from "react-three-fiber";
import React, {useEffect, useLayoutEffect, useRef} from 'react';
import {RGBELoader} from "three-stdlib";
import {CubeTextureLoader, PMREMGenerator, Texture} from "three";


type EnvironmentProps = {
    path: string;
    mode?: 'hdr' | 'regular';
    children?: React.ReactNode;
};



export const EnvironmentMapContext = React.createContext<Texture | null>(null);
export const EnvironmentSystem: React.FC<EnvironmentProps> = ({ path, mode = 'hdr', children  }) => {
    const { gl, scene } = useThree();
    const pmremGenerator = new PMREMGenerator(gl);
    const [envMap, setEnvMap] = React.useState<Texture | null>(null);
    useEffect(() => {
        if (mode === 'hdr') {
            new RGBELoader().load(path, (texture) => {
                const envMap = pmremGenerator.fromEquirectangular(texture).texture;
                scene.environment = envMap;
                texture.dispose();
                pmremGenerator.dispose();
            });
        } else if (mode === 'regular') {
            new CubeTextureLoader().load([path, path, path, path, path, path], (texture) => {
                scene.environment = texture;
            });
        }
    }, [gl, path, mode, scene, pmremGenerator]);

    return(
        <EnvironmentMapContext.Provider value={envMap}>
            {children}
        </EnvironmentMapContext.Provider>
    )
};