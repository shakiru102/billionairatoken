import { ThemeProvider, Button, createTheme } from '@mui/material'
import React, { FC } from 'react'
import { SolidButtonProps } from '../../types';

const OutlineButton: FC<SolidButtonProps> = ({
  text,
  handleClick,
  variant
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
    variant={'outlined'}
    // @ts-ignore
    color={'solid'}
    className={ "text-[#FFF] cursor-fancy font-sora font-semibold bg-[#000000b6] normal-case border-[#FFF] rounded-[8px] md:text-[16px]" }
    >
        { text }
    </Button>
</ThemeProvider>
  )
}

export default OutlineButton
