import * as React from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: React.ReactNode;
}

export const StickyItem: React.FC<PortalProps> = ({ children }) => {

    const portalRoot  = document.getElementById('root');

    return createPortal(
            <>{children}</>,
        portalRoot as HTMLElement
    );


}
