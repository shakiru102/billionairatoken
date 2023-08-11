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
    activeId
  }
}

export default UseCustomHook
