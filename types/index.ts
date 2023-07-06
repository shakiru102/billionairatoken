export interface NavlinksProps {
   text: string;
   to: string;
   contained?: boolean;
}

export interface SolidButtonProps {
    text: string;
    handleClick?: () => void;
    variant?: 'solid' | 'transparent';
}