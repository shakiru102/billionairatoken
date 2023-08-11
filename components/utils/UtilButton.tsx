import { Button, ButtonProps } from '@mui/material'
import React, { FC } from 'react'



const UtilButton: FC<ButtonProps> = ({
    children,
    ...props
}) => {
  return (
    <Button {...props} className={'font-sora capitalize font-bold bg-[#2C2C2B] hover:bg-[#2c2c2bba] w-[363px] rounded-none ' + props.className}>{children}</Button>
  )
}

export default UtilButton
