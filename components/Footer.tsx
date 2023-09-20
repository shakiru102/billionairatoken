import React, { FC } from 'react'
import ContainerLayout from '../Layout/ContainerLayout'
import FooterInputCard, { FooterInputCardProps } from './utils/FooterInputCard'
import MediaIcons from './utils/ MediaIcons'
import { useTranslation } from 'react-i18next'

const Footer: FC = () => {

    const {t} = useTranslation()

    const footerInputDetails: FooterInputCardProps[] = [
        { 
            title: t('joinOurCommunityTitle'),
            content: t('joinOurCommunityText'),
            footerChildren: <div className='flex justify-center md:justify-start'><MediaIcons /></div>
        },
        { 
            title: t('partnerWithUs'),
            content:t('partnerWithUsText'),
            position: "right",
            buttoText: t('partnerWithUsTextBtn')
        }
    ]

  return (
    <div>
        <div className="md:h-[477px] py-16">
           <ContainerLayout>
           <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-20 md:gap-36">

            {
                footerInputDetails.map((item: FooterInputCardProps, i: number) => (
                    <FooterInputCard {...item} key={i}/>
                ))
            }
           </div>
           <div className="mt-16 pb-16  border-b border-b-[#4B4B4B]" />
           </ContainerLayout>
        </div>
        <div className='  md:px-16'>
        <ContainerLayout>
            <div className="text-[12px] text-[#DDD] font-sora font-100">
                <div className='text-[12px] md:text-[14px]'>
                <span className=' text-[16px] md:text-[18px] text-transparent bg-gradient-to-b from-[#FAFAFA] to-[#aaa5a503] bg-clip-text inline-block'>{t('disclaimer')}:</span> <br/> 
                {t('disclaimerContent')}
                </div>
                <div className="text-center py-8">© 2023 BlowX. All rights reserved</div>
            </div>
        </ContainerLayout>
    </div>
    </div>
  )
}

export default Footer
