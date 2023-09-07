import React, { useLayoutEffect, useState } from 'react'

const UseCustomHook = (ids: string[], offset: number ) => {
// Restrict value to be between the range [0, value]
const clamp = (value: number) => Math.max(0, value);

// Check if number is between two values
const isBetween = (value: number, floor: number, ceil: number) =>
  value >= floor && value <= ceil;
    const problemDetails = {
            problems: [
                {
                    title: "Finance is moving on-chain",
                    text: "With the continued failure of centralized exchanges, crypto is seeing a return to first principles: new and seasoned investors alike are embracing the trustless, non-custodial, decentralized nature of on-chain finance."
                },
                {
                    title: "Finance is moving on-chain",
                    text: "With the continued failure of centralized exchanges, crypto is seeing a return to first principles: new and seasoned investors alike are embracing the trustless, non-custodial, decentralized nature of on-chain finance."
                },
                {
                    title: "Finance is moving on-chain",
                    text: "With the continued failure of centralized exchanges, crypto is seeing a return to first principles: new and seasoned investors alike are embracing the trustless, non-custodial, decentralized nature of on-chain finance."
                }
            ],
            solution: [
                {
                    title: "Finance is moving on-chain",
                    text: "With the continued failure of centralized exchanges, crypto is seeing a return to first principles: new and seasoned investors alike are embracing the trustless, non-custodial, decentralized nature of on-chain finance."
                },
                {
                    title: "Finance is moving on-chain",
                    text: "With the continued failure of centralized exchanges, crypto is seeing a return to first principles: new and seasoned investors alike are embracing the trustless, non-custodial, decentralized nature of on-chain finance."
                },
                {
                    title: "Finance is moving on-chain",
                    text: "With the continued failure of centralized exchanges, crypto is seeing a return to first principles: new and seasoned investors alike are embracing the trustless, non-custodial, decentralized nature of on-chain finance."
                }
            ]
    }

    const buyBlowDetails = [
      {
        header: "Buy With Crypto",
        title: "How to buy $BLOW token with card?",
        content: [
          "To buy either ETH/BNB/ARB/USDT using your card, bank transfer, or other methods, such as Apple Pay, you will be directed to our partner, Pyypl. Once there, you can complete your purchase directly in the widget.",
          "Select your preferred currency, enter the amount you wish to pay, and choose your payment method. The widget will display the estimated ETH/BNB/ARB/USDT you will receive, the rate, and the total fees to carry out the transaction. After selecting your payment method and amount, click the 'Buy Now' button."
        ],
        readMore: "https://medium.com/@BlowX_Official/the-definitive-guide-how-to-safely-purchase-blow-tokens-with-crypto-3387e28e798"
      },
      {
        header: "Buy With Card",
        title: "How to buy $BLOW token with crypto?",
        content: [
          "1. Firstly, make sure you have one of the supported wallets ready either TrustWallet, or Metamask.",
          `2. Click on the "Buy $BLOW" button to enable BlowX chosen network extension to connect with your wallet. Once connected, you can buy $BLOW tokens using a selection of currencies from the listed network chain such as ETH, BNB, ARB or USDT.`,
          `3. Choose the amount of $BLOW tokens you wish to buy or the amount of your assets you wish to spend and click "Buy now". We recommend having at least $10 equivalent of the network currency to cover gas fees.`
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
