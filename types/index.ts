import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface NavlinksProps {
   text: string;
   to?: string;
   contained?: boolean;
   handleClick?: () => void;
}

export interface SolidButtonProps {
    text: string | ReactNode;
    handleClick?: () => void;
    variant?: 'solid' | 'transparent' | 'textinput';
    prependIcon?: ReactNode;
    appendIcon?: ReactNode;
    classnames?: string;
    disabled?: boolean;
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
        icon?: StaticImageData
    }[]
    textInputType?: 'presale' | 'other'   
    
}

export interface CoinModalProps {
    open: boolean;
    onClose?: (e: any) => void;
    dialogTitle?: string;
    dialogText?: string;
    dialogChildren: ReactNode;
}

export interface EcosystemProps {
    title: string;
    header?: string;
    content: string | ReactNode;
    button?: SolidButtonProps;
    image?: StaticImageData;
    video?: ReactNode;
    
}

export interface TranslationProps {
    onBoardTitle: string;
    onBoardContent: string
    // aboutTitle: string;
    // aboutContent: string;

}