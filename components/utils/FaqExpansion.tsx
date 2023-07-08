import React, { FC } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'

export interface FAQProps {
    title: string; 
    texts: string[] 
}

const FaqExpansion: FC<FAQProps> = ({
    texts,
    title
}) => {
  return (
    <Accordion className='bg-[#1A1A1A]'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-white' />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='text-[#FECF81] md:text-[18px] font-sora font-semibold'>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {
            texts.map((text: string, i: number) => (
                <Typography key={i} className='text-[#D9D9D9] mb-8  md:text-[15px]  font-biomeW04Regular'>
                    { text }
                </Typography>
            ))
          }
        </AccordionDetails>
      </Accordion>
  )
}

export default FaqExpansion
