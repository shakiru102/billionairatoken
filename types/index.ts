import { ReactNode } from "react";

export interface NavlinksProps {
   text: string;
   to: string;
   contained?: boolean;
}

export interface SolidButtonProps {
    text: string | ReactNode;
    handleClick?: () => void;
    variant?: 'solid' | 'transparent' | 'textinput';
    prependIcon?: ReactNode;
    appendIcon?: ReactNode;
    classnames?: string
}

export interface TextinputProps {
    label: string;
    placeholder?: string;
    inputAdorments?: SolidButtonProps[];
    value: string;
    handleChange?: (e: any) => void;
    name?: string;
    menuItems?: {
        label: string;
        value: string;
    }[]
        
    
}

export interface CoinModalProps {
    open: boolean;
    onClose?: (e: any) => void;
    dialogTitle?: string;
    dialogText?: string;
    dialogChildren: ReactNode;
}