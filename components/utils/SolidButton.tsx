import { ThemeProvider, Button, createTheme } from '@mui/material'
import React, { FC } from 'react'
import { SolidButtonProps } from '../../types';

const SolidButton: FC<SolidButtonProps> = ({
  text,
  handleClick,
  variant,
  classnames
}) => {
  const { palette } = createTheme();
  const { augmentColor } = palette;
  const createColor = (mainColor: any) => augmentColor({ color: { main: mainColor } });
  const theme = createTheme({
    palette: {
       solid: createColor('#FFFFFF'),
       textinput: createColor('#FFFFFF'),
       transparent: createColor('#FECF810F')
    } as any,
  });
  return (
    <ThemeProvider theme={theme}>
    <Button 
    onClick={handleClick}
    disableElevation 
    variant={'contained'}
    // @ts-ignore
    color={variant}
    className={
      variant === 'transparent' ? 
      "text-[#FFFFFF] cursor-fancy font-sora font-semibold bg-[#ffffff0b] capitalize md:text-[16px] " + classnames :
      variant === 'textinput' ?  
      'text-black cursor-fancy font-inter  bg-[#FFFFFF] capitalize md:text-[16px]' :
      "text-black cursor-fancy font-sora rounded-[8px] font-semibold bg-[#FFFFFF] capitalize md:text-[16px] " + classnames
    }
    >
        { text }
    </Button>
</ThemeProvider>
  )
}

export default SolidButton
