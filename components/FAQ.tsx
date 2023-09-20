import React, { FC } from 'react'
import FaqExpansion, { FAQProps } from './utils/FaqExpansion';
import ContainerLayout from '../Layout/ContainerLayout';
import { Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';

const FAQ: FC = () => {

    const {t} = useTranslation()
    const faqs: FAQProps[] = [
        { 
            title: t('faqTitle1'),
            texts: [
                t('faqTitle1Content1'),
                t('faqTitle1Content2'),
                t('faqTitle1Content3') 
            ]
         },
         {
            title: t('faqTitle2'),
            texts: [
                t('faqTitle2Content1')
            ]
         },
         {
            title: t('faqTitle3'),
            texts: [
                t('faqTitle3Content1')
            ]
         },
         {
            title: t('faqTitle4'),
            texts: [
                t('faqTitle4Content1')
            ]
         },
         {
            title: t('faqTitle5'),
            texts: [
                t('faqTitle5Content1')
            ]
         } 
    ]
  return (
    <div className="">
        <ContainerLayout>
        <Paper className='bg-[#1A1A1A] md:mt-28 px-8 py-16 rounded-[20px]'>
             <div className="text-center font-detacher text-[20px] md:text-[32px] text-transparent bg-gradient-to-b from-[#FAFAFA] to-[#aaa5a503] bg-clip-text py-4">
                FAQ
             </div>
            {
                faqs.map((faq:FAQProps, i: number) => (
                    <FaqExpansion key={i} {...faq}/>
                ))
            }
        </Paper>
    </ContainerLayout>
    </div>
  )
}

export default FAQ
