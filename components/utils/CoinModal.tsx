import { Dialog, Paper } from '@mui/material'
import Image from 'next/image'
import React, { FC } from 'react'
import Logo from '../../assets/blowlogo.png'
import MediaIcons from './ MediaIcons'
import SolidButton from './SolidButton'
import { CoinModalProps } from '../../types'

const CoinModal: FC<CoinModalProps> = ({
  dialogChildren,
  open,
  dialogText,
  dialogTitle,
  onClose
}) => {
  return (
    <Dialog
    open={open}
    onClose={onClose}
    scroll='body'
    PaperComponent={props => (
        <Paper {...props} className='md:w-[482px] text-left bg-[#1A1A1A] mx-auto my-16 rounded-[20px] p-8' />
    )}
    >
      <div className="text-center mb-4">
            <Image alt='logo' src={Logo} width={120} height={100} />
        </div>
        <div className="font-detacher text-white text-[24px] text-center">
            { dialogTitle }
        </div>
        <div className="font-sora text-center text-[#A8A8A8] my-4">
            { dialogText }
        </div>
        { dialogChildren }
        <MediaIcons position='center'/>
      </Dialog>
  )
}

export default CoinModal
