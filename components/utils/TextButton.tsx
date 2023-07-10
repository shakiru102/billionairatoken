import { ThemeProvider, Button, createTheme } from '@mui/material'
import React, { FC } from 'react'
import { SolidButtonProps } from '../../types';

const TextButton: FC<SolidButtonProps> = ({
  text,
  handleClick,
  appendIcon  
}) => {
  const { palette } = createTheme();
  const { augmentColor } = palette;
  const createColor = (mainColor: any) => augmentColor({ color: { main: mainColor } });
  const theme = createTheme({
    palette: {
       solid: createColor('#FECF81'),
       transparent: createColor('#FECF810F')
    } as any,
  });
  return (
    <ThemeProvider theme={theme}>
    <Button 
    onClick={handleClick}
    disableElevation 
    variant={'text'}
    className={"bg-gradient-to-r cursor-fancy from-[#FDCE7B] to-[#CD8D03] bg-clip-text font-biomeW04Regular text-transparent md:text-[16px]" }
    >
        <span>{ text }</span>
        { appendIcon }
    </Button>
</ThemeProvider>
  )
}

export default TextButton
