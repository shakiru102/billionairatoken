import { Dialog } from '@mui/material';
import React, { FC } from 'react'

interface UtilModalProps {
    title: string;
    subtitle: string | React.ReactNode;
    content: React.ReactNode;
    open: boolean;
    onClose: () => void;
    type?: 'presale' | 'others'
}


const UtilModal: FC<UtilModalProps> = ({
    content,
    subtitle,
    title,
    onClose,
    open,
    type
}) => {
  return (
    <Dialog
    open={open}
    onClose={onClose}
    scroll='body'
    PaperProps={{
      className: `w-full md:w-[556px] text-left bg-[#000] mx-auto my-16 p-4  rounded-[20px] ${ type !== 'presale' ? 'md:p-8' : 'md:p-16'}`
    }}
    >
        <div className="font-biomeW04Regular font-bold text-[24px] md:text-[32px] inline-block uppercase text-transparent  bg-gradient-to-b from-[#FAFAFA] to-[#aaa5a503] bg-clip-text">
            { title }
        </div>
        <div className="font-sora text-white font-bold text-[18px] mb-8">
            { subtitle }
        </div>
        { content }
      </Dialog>
  )
}

export default UtilModal
