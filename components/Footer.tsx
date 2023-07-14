import React, { FC } from 'react'
import ContainerLayout from '../Layout/ContainerLayout'
import FooterInputCard, { FooterInputCardProps } from './utils/FooterInputCard'
import MediaIcons from './utils/ MediaIcons'

const Footer: FC = () => {

    const footerInputDetails: FooterInputCardProps[] = [
        { 
            title: "Join our community",
            content: "Subscribe to get latest updates about TBT Ecosystem",
            footerChildren: <div className='flex justify-center md:justify-start'><MediaIcons /></div>
        },
        { 
            title: "Partner with us",
            content: "Subscribe to get latest updates about TBT Ecosystem",
            position: "right",
            buttoText: "Submit"
        }
    ]

  return (
    <div>
        <div className="md:h-[477px] bg-[url('../assets/footerbg.png')] py-16">
           <ContainerLayout>
           <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-20 md:gap-36">

            {
                footerInputDetails.map((item: FooterInputCardProps, i: number) => (
                    <FooterInputCard {...item} key={i}/>
                ))
            }
           </div>
           <div className="mt-16 pb-16 border-b border-b-[#4B4B4B]" />
           </ContainerLayout>
        </div>
        <div className='  md:p-16'>
        <ContainerLayout>
            <div className="text-[12px] text-[#DDD] font-sora font-100">
                <div className='text-[12px] md:text-[14px]'>
                <span className=' text-[16px] md:text-[18px] text-transparent bg-gradient-to-r from-[#FDCE7B] to-[#CD8D03] bg-clip-text inline-block'>Disclaimer:</span> <br/> 
                Users from the U.S region or any other non-crypto friendly jurisdiction are not allowed to participant. The materials on the TBT webpage has been prepared by "the New Frontiers Empire" for information and illustration purposes only. It is not a statement of future intent. Where this webpage contains information that has been obtained from third party sources, the "New Frontiers Empire" has not independently verified the accuracy or completeness of such information. The webpage and roadmap may include estimates and forecasts of future financial and ecosystem performance. Those estimations involve known and unknown risks and uncertainties which may cause the estimated results to be materially different from any future outcomes. The "New Frontiers Empire" does not make or purport to make, and hereby disclaims, any representation, warranty or undertaking (expressly or impliedly) in any form whatsoever to any entity or person, including any representation, warranty or undertaking in relation to the accuracy and completeness of any of the information set out on this webpage. There is no liability if anything on the webpage does not materialise. This webpage is intended to be used by prospective users and investors who are familiar with the business and affairs of "The Billionaires Token" (TBT). This webpage is not intended to provide as the sole basis for evaluating the risk, and should not be considered as a recommendation with respect to, any transaction or any purchase decision. 
                Each prospective user or investor should evaluate all risks and uncertainties associated herein. This webpage is not intended and does not constitute a prospectus or offering document, and is not an offer to sell any securities or a solicitation to sell or purchase any securities in any jurisdiction. The "New Frontiers Empire" does not provide or arrange any financing for any transaction to purchase any security in connection with this webpage. This webpage is for information purposes only and may be subject to change without prior notice. There is no obligation for the "New Frontiers Empire" to amend, modify or update this webpage or to notify any investor if any information on this webpage changes or subsequently becomes inaccurate. Nothing on this webpage constitutes any legal, financial, or tax advice and each investor is advised to consult his own legal, financial, tax or other professional adviser regarding the impact of the transactions or matters described on this webpage. Any statements contained herein in relation to tax matters is not intended to be used by any taxpayer for the purpose of avoiding any tax penalties that may be imposed on any taxpayer. No part of this webpage and the $TBT project is to be copied, reproduced, distributed or disseminated in any way without the prior written consent of the "New Frontiers Empire". FORTUNE favors the BRAVE!!!
                </div>
                <div className="text-center py-8">© 2023 The Billionaires Token. All rights reserved</div>
            </div>
        </ContainerLayout>
    </div>
    </div>
  )
}

export default Footer
