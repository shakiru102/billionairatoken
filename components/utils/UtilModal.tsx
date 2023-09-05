import { Dialog } from '@mui/material';
import React, { FC } from 'react'

interface UtilModalProps {
    title: string;
    subtitle: string;
    content: React.ReactNode;
    open: boolean;
    onClose: () => void;
}


const UtilModal: FC<UtilModalProps> = ({
    content,
    subtitle,
    title,
    onClose,
    open
}) => {
  return (
    <Dialog
    open={open}
    onClose={onClose}
    scroll='body'
    PaperProps={{
      className: "md:w-[556px] text-left bg-[#000] mx-auto my-16 rounded-[20px] p-8"
    }}
    >
        <div className="font-biomeW04Regular font-bold text-[24px] md:text-[32px] inline-block uppercase text-transparent bg-gradient-to-b from-[#FAFAFA] to-[#aaa5a503] bg-clip-text">
            { title }
        </div>
        <div className="font-sora text-white text-[18px] mb-8">
            { subtitle }
        </div>
        { content }
      </Dialog>
  )
}

export default UtilModal
