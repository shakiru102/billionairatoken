import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface NavlinksProps {
   text: string;
   to?: string;
   contained?: boolean;
   handleClick?: () => void;
}

export interface SolidButtonProps {
    text: string | ReactNode;
    handleClick?: () => void;
    variant?: 'solid' | 'transparent' | 'textinput';
    prependIcon?: ReactNode;
    appendIcon?: ReactNode;
    classnames?: string;
    disabled?: boolean;
}

export interface TextinputProps {
    label: string;
    placeholder?: string;
    inputAdorments?: SolidButtonProps[];
    value: string;
    handleChange?: (e: any) => void;
    name?: string;
    menuItems?: {
        label: string;
        value: string;
        icon?: StaticImageData
    }[]
    textInputType?: 'presale' | 'other'   
    
}

export interface CoinModalProps {
    open: boolean;
    onClose?: (e: any) => void;
    dialogTitle?: string;
    dialogText?: string;
    dialogChildren: ReactNode;
}

export interface EcosystemProps {
    title: string;
    header?: string;
    content: string | ReactNode;
    button?: SolidButtonProps;
    image?: StaticImageData;
    video?: ReactNode;
    
}

export interface TranslationProps {
    onBoardTitle: string;
    onBoardContent: string;
    privateSaleBtnText: string;
    joinAirdropBtnText: string;
    navBtnAboutUs: string;
    navBtnEcosystem: string;
    navBtnWhitePaper: string;
    aboutTitle: string;
    aboutContent: string;
    featuredOn: string;
    problemSloving: string;
    problemSlovingTitle1: string;
    problemSlovingContent1: string;
    problemSlovingContent2: string;
    problemSlovingContent3: string;
    problemSlovingContent4: string;
    problemSlovingContent5: string;
    problemSlovingContent6: string;
    problemSlovingContent7: string;
    problemSlovingContent8: string;
    problemSlovingContent9: string;
    solutionProviding: string;
    solutionProvidingHeader: string;
    solutionProvidingSubHeader: string;
    solutionProvidingTitle1: string;
    solutionProvidingContent1: string;
    whatAboutTokenizedAsset: string;
    whatAboutTokenizedAssetContent: string;
    TokenomicsTitle: string;
    TokenomicsSubTitle: string;
    TokenomicsSubText: string;
    launchProcessTitle: string;
    launchProcessAirdrop: string;
    launchProcessPresale: string;
    launchProcessCexListing: string;
    launchProcessText: string;
    joinCommunityBtn: string;
    publicSaleBtn: string;
    blowPreSaleBtn: string;
    ecosysemTitle: string;
    ecosysemSubTitle: string;
    blowaiWeb3Mobile: string;
    blowaiWeb3Content: string;
    blowaiWeb3ContentBtn: string;
    blowVerseMarketplace: string;
    blowVerseMarketplaceContent: string;
    blowVerseMarketplaceContentBtn: string;
    blowPayCard: string;
    blowPayCardHeader: string;
    blowPayCardContent: string;
    blowPayCardContentBtn: string;
    blowEarnStake: string;
    blowEarnStakeHeader: string;
    blowEarnStakeContent: string;
    blowEarnStakeContentBtn: string;
    blowNftContent: string;
    blowNftContentBtn: string;
    blowIslands: string;
    blowIslandsContent: string;
    blowIslandsContentLink: string;
    blowAviaHeader: string;
    blowAviaContent: string;
    blowAviaContentLink: string;
    blowaiContent: string;
    blowaiContentBtn: string;
    blowBotContent: string;
    blowBotContentLink: string;
    blowCaliforniumHeader: string;
    blowCaliforniumContent: string;
    blowCaliforniumContentLink: string;
    blowLithContent: string;
    blowLithContentLink: string;
    blowEvc: string;
    blowEvcHeader: string;
    blowEvcContent: string;
    blowEvcContentBtn: string;
    blowDao: string;
    blowDaoHeader: string;
    blowDaoContent: string;
    blowDaoContentBtn: string;
    blowFoundation: string;
    blowFoundationContent: string;
    blowFoundationContentBtn: string;
    comingSoon: string;
    roadMap: string;
    q42022List1: string;
    q42022List2: string;
    q12023List1: string;
    q12023List2: string;
    q22023List1: string;
    q22023List2: string;
    q22023List3: string;
    q22023List4: string;
    q32023List1: string;
    q32023List2: string;
    q32023List3: string;
    q32023List4: string;
    q32023List5: string;
    q42023List1: string;
    q42023List2: string;
    q42023List3: string;
    q42023List4: string;
    q12024List1: string;
    q12024List2: string;
    q12024List3: string;
    q22024List1: string;
    q22024List2: string;
    q22024List3: string;
    q22024List4: string;
    q22024List5: string;
    q32024List1: string;
    q32024List2: string;
    q32024List3: string;
    q32024List4: string;
    q42024List1: string;
    q42024List2: string;
    theTeam: string;
    theTeamContent: string;
    faqTitle1: string;
    faqTitle2: string;
    faqTitle3: string;
    faqTitle4: string;
    faqTitle5: string;
    faqTitle1Content1: string;
    faqTitle1Content2: string;
    faqTitle1Content3: string;
    faqTitle2Content1: string;
    faqTitle3Content1: string;
    faqTitle4Content1: string;
    faqTitle5Content1: string;
    joinOurCommunityTitle: string;
    joinOurCommunityText: string;
    partnerWithUs: string;
    partnerWithUsText: string;
    partnerWithUsTextBtn: string;
    disclaimer: string
    disclaimerContent: string
    tokenInfo: string;
    tokenInfoName: string;
    tokenInfoContractAdd: string;
    tokenInfoDecimal: string;
    joinPrivateSale: string
    listingPrice: string;
    selectPaymentTokenAsset: string;
    amountYouPayIn: string;
    enterEmailAddress: string;
    buy: string;
    connect: string;
    verifyIdentity: string;
    howToBuy: string;
    refferalLink: string;
    howToBuyBlowToken: string;
    connectWithUs: string;
    readMore: string;
    buyWithCrypto: string;
    buyWithCryptoTitle: string;
    buyWithCryptoContent1: string;
    buyWithCryptoContent2: string;
    buyWithCard: string;
    buyWithCardContent1: string;
    buyWithCardContent2: string;
    buyWithCardContent3: string;
    chooseWallet: string;
    walletAddressLabel: string;
    submit: string;
    buyWithCardTitle: string;
}