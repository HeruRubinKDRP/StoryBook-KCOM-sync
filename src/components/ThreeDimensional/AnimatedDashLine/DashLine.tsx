import React, { useEffect, useMemo } from 'react';
import { Texture, MeshBasicMaterial } from 'three';
import {RotatingBox} from "../debug/debug_cube";

export interface iAnimatedDashedLineProps {
    numDots: number;
    distanceBetween: number;
    startX: number;
    startY: number;
    endX: number;
    endY: number;
}

const AnimatedDashedLine: React.FC<iAnimatedDashedLineProps> = (props: iAnimatedDashedLineProps) => {
    const material = useMemo(() => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 1024;
        canvas.height = 1024;

        // Set background color
        ctx!.fillStyle = 'rgba(255, 0, 0, 0.5)'; // Red background with 50% opacity
        ctx!.fillRect(0, 0, canvas.width, canvas.height);

        // Draw line (this would be inside your animation loop)
        ctx!.beginPath();
        ctx!.moveTo(props.startX, props.startY);
        ctx!.lineTo(props.endX, props.endY);
        ctx!.stroke();

        const texture = new Texture(canvas);
        texture.needsUpdate = true;

        return new MeshBasicMaterial({ map: texture });
    }, [props.startX, props.startY, props.endX, props.endY]);

    return (
      <group   >
          <RotatingBox />
          <mesh scale={[12,1,1]} position={[0, 0, 0]} material={material}>
              <bufferGeometry attach="geometry">
                  <meshBasicMaterial attach="material" color="red" />
              </bufferGeometry>
          </mesh>
      </group>

    );
};

export default AnimatedDashedLine;
