import React, { useLayoutEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

const UseCustomHook = (ids: string[], offset: number ) => {

  const {t} = useTranslation()

// Restrict value to be between the range [0, value]
const clamp = (value: number) => Math.max(0, value);

// Check if number is between two values
const isBetween = (value: number, floor: number, ceil: number) =>
  value >= floor && value <= ceil;
    const problemDetails = {
            problems: [
                {
                    title: t("problemSlovingTitle1"),
                    text: t('problemSlovingContent1')
                },
                {
                  title: t("problemSlovingTitle1"),
                  text: t('problemSlovingContent2')
                },
                {
                  title: t("problemSlovingTitle1"),
                  text: t('problemSlovingContent3')
                },
                {
                  title: t("problemSlovingTitle1"),
                  text: t('problemSlovingContent4')
                },
                {
                  title: t("problemSlovingTitle1"),
                  text: t('problemSlovingContent5')
                },
                {
                  title: t("problemSlovingTitle1"),
                  text: t('problemSlovingContent6')
                },
                {
                  title: t("problemSlovingTitle1"),
                  text: t('problemSlovingContent7')
                },
                {
                  title: t("problemSlovingTitle1"),
                  text: t('problemSlovingContent8')
                },
                {
                  title: t("problemSlovingTitle1"),
                  text: t('problemSlovingContent9')
                },

            ],
            solution: [
                {
                    title: t('solutionProvidingTitle1'),
                    text: t('solutionProvidingContent1')
                }
            ]
    }

    const buyBlowDetails = [
      {
        header: t('buyWithCrypto'),
        title: t('buyWithCryptoTitle'),
        content: [
          t('buyWithCryptoContent1'),
          t('buyWithCryptoContent2')
        ],
        readMore: "https://medium.com/@BlowX_Official/the-definitive-guide-how-to-safely-purchase-blow-tokens-with-crypto-3387e28e798"
      },
      {
        header: t('buyWithCard'),
        title: t('buyWithCardTitle'),
        content: [
          t('buyWithCardContent1'),
          t('buyWithCardContent2'),
          t('buyWithCardContent3')
        ],
        readMore: "https://medium.com/@BlowX_Official/how-to-easily-buy-blow-tokens-with-your-card-189c90b5c996"
      }
    ]

    const [activeId, setActiveId] = useState("");
      
        useLayoutEffect(() => {
          const listener = () => {
            const scroll = window.pageYOffset;
      
            const position = ids
              .map((id) => {
                const element = document.getElementById(id);
      
                if (!element) return { id, top: -1, bottom: -1 };
      
                const rect = element.getBoundingClientRect();
                const top = clamp(rect.top + scroll - offset);
                const bottom = clamp(rect.bottom + scroll - offset);
      
                return { id, top, bottom };
              })
              .find(({ top, bottom }) => isBetween(scroll, top, bottom));
      
            setActiveId(position?.id || "");
          };
      
          listener();
      
          window.addEventListener("resize", listener);
          window.addEventListener("scroll", listener);
      
          return () => {
            window.removeEventListener("resize", listener);
            window.removeEventListener("scroll", listener);
          };
        }, [ids, offset]);

  return  {
    problemDetails,
    activeId,
    buyBlowDetails
  }
}

export default UseCustomHook
