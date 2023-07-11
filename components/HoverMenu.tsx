import React, { useState } from 'react';
import { Menu } from "@material-tailwind/react";

interface HoverMenuProps {
    children: React.ReactNode;
    
}

const HoverMenu: React.FC<HoverMenuProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <Menu open={isOpen}>
                {children}
            </Menu>
        </div>
    );
};

export default HoverMenu;
