import { Paper } from '@mui/material';
import React, { FC } from 'react'
import TextButton from './TextButton';
import EastSharpIcon from '@mui/icons-material/EastSharp';

export interface EcosystemProps {
    title?: string;
    content?: string;
    action?: () => void;
}

const EcosystemCard: FC<EcosystemProps> = ({
    title,
    action,
    content
}) => {
  return (
   <Paper className='rounded-[10px] relative mt-24 -left-1 bg-[#1A1613] w-[90%] px-4 py-8'>
      <div className="text-[20px] font-sora text-[#FECF81] font-semibold">
        { title ? title : 'Blow.ai Web3 Mobile '}
      </div>
      <div className="text-[18px] font-biomeW04Regular mt-6 mb-4 text-[#A8A8A8]">
        {
            content ? content : "Introducing Blow.ai Web3 Mobile, a blockchain-enabled mobile device that brings the power of blockchain and AI technology to your fingertips. Seamlessly integrate with decentralized applications (DApps), manage digital assets, and communicate securely with military-grade encryption."
        }
      </div>
      <TextButton 
      text='Learn more' 
      handleClick={action}
      appendIcon={
        <EastSharpIcon 
         className='text-[#CD8D03] text-[18px] relative left-2'
         
        />
      }
      />
   </Paper>
  )
}

export default EcosystemCard
