import { ReactNode } from "react";

export interface NavlinksProps {
   text: string;
   to: string;
   contained?: boolean;
}

export interface SolidButtonProps {
    text: string | ReactNode;
    handleClick?: () => void;
    variant?: 'solid' | 'transparent';
    prependIcon?: ReactNode;
    appendIcon?: ReactNode;
    classnames?: string
}