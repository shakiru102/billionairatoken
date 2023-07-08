import React, { FC } from 'react'
import FaqExpansion, { FAQProps } from './utils/FaqExpansion';
import ContainerLayout from '../Layout/ContainerLayout';
import { Paper } from '@mui/material';

const FAQ: FC = () => {

    const faqs: FAQProps[] = [
        { 
            title: "Why $TBT and the Ecosystem?",
            texts: [
                `According to Elon Musk: "People get confused. They sometimes think an economy is money. Money is a database for exchange of goods & services. Money is a database. Money doesn't have power in & of itself. The actual economy is goods & services. And that’s what we are building.`,

                `You're trapped on a remote island, shipwrecked on an island. And you have a trillion dollars in a Swiss bank account - It's worthless. You'd rather have some kind of soup. All the Bitcoin in the world, and you're still gonna starve.`,
                
                "As we value the worth of a specific good, products and services, at #TheBillionairesToken with  the TBT token will always be connected to every products launched within the ecosystem. That’s when you have real value."
            ]
         },
         {
            title: "How to buy The Billionaires Token",
            texts: ["TBT token is a utility token deeply embedded into the Sportrex ecosystem, designed to provide a series of perks and benefits to holders as well as to enhance the user experience across the Sportrex platform. SPT is an ERC-20 and BSC blockchain token fully audited by two (2) reputable audit firms."]
         },
         {
            title: "Where to buy The Billionaires Token",
            texts: ["Join our waitlist and we'll notify you when the public sale starts on May 15, 2023. We expect a lot of interest, which is why you will receive a KYC link ahead of time so you can get set up for the sale early."]
         },
         {
            title: "What is the total supply of tokens?",
            texts: ["Join our waitlist and we'll notify you when the public sale starts on May 15, 2023. We expect a lot of interest, which is why you will receive a KYC link ahead of time so you can get set up for the sale early."]
         },
         {
            title: "What are the transaction taxes?",
            texts: ["Join our waitlist and we'll notify you when the public sale starts on May 15, 2023. We expect a lot of interest, which is why you will receive a KYC link ahead of time so you can get set up for the sale early."]
         } 
    ]

  return (
    <ContainerLayout>
        <Paper className='bg-[#1A1A1A] md:mt-28 px-8 py-16 rounded-[20px]'>
             <div className="text-center font-detacher text-[32px] text-[#FECF81] py-4">
                Frequently Asked Questions
             </div>
            {
                faqs.map((faq:FAQProps, i: number) => (
                    <FaqExpansion {...faq}/>
                ))
            }
        </Paper>
    </ContainerLayout>
  )
}

export default FAQ
