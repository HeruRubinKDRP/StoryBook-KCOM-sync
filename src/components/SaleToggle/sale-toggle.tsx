import React, { useState } from 'react';
import { ToggleContainer, ToggleButton } from './sale-toggle-styled';

interface SaleToggleProps {
    className?: string;
}

const SaleToggle: React.FC<SaleToggleProps> = ({ className }) => {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
    };

    return (
        <ToggleContainer onClick={toggleSwitch} className={className}>
            <ToggleButton style={{ left: isOn ? '20px' : '0' }} />
        </ToggleContainer>
    );
};

export default SaleToggle;
