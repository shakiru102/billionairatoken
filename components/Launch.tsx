import React, { useState } from 'react'
import Airdrop1 from '../assets/airdrop1.png'
import Airdrop2 from '../assets/airdrop2.png'
import Presale1 from '../assets/presale1.png'
import Presale2 from '../assets/presale2.png'
import Presale3 from '../assets/presale3.png'
import Presale4 from '../assets/presale4.png'
import Presale5 from '../assets/presale5.png'
import Presale6 from '../assets/presale6.png'
import Listing1 from '../assets/listing1.png'
import Listing2 from '../assets/listing2.png'
import Listing3 from '../assets/listing3.png'
import Listing4 from '../assets/listing4.png'
import Listing5 from '../assets/listing5.png'
import Listing6 from '../assets/listing6.png'
import Listing7 from '../assets/listing7.png'
import Listing8 from '../assets/listing8.png'
import Listing9 from '../assets/listing9.png'
import RenderComponent from './RenderComponent'
import LaunchCard, { LaunchCardProps } from './utils/LaunchCard'
import CoinModal from './utils/CoinModal'
import SolidButton from './utils/SolidButton'
import { Formik } from 'formik'
import TextInput from './utils/TextInput'
import UtilModal from './utils/UtilModal'
import SocialCapsule from './utils/SocialCapsule'
import { useTranslation } from 'react-i18next'
import SelectInput from './utils/SelectInput'


const Launch = () => {

    const {t} = useTranslation()
    const [text, setText] = useState('CEX listing')
    const launch: LaunchCardProps[] = [
      {
        buttons: [
          {
            text: t("joinCommunityBtn"),
            variant: "transparent",
            handleClick: () => setCommunity(true),
            classnames: "",
          },
          {
            text: t("joinAirdropBtnText"),
            variant: "solid",
            classnames: "",
            handleClick: () => setAirdrop(true),
          },
        ],
        imageCols: "2",
        images: [
          {
            image: Airdrop1,
            name: "TrustPad",
          },
          {
            image: Airdrop2,
            name: "AirLyft",
          },
        ],
        text: t("launchProcessText"),
        title: t("launchProcessAirdrop"),
      },
      {
        buttons: [
          {
            text: t("joinCommunityBtn"),
            variant: "transparent",
            handleClick: () => setCommunity(true),
            classnames: "",
          },
          { text: t("blowPreSaleBtn"), variant: "solid", classnames: "", handleClick: () => {
            setCexlisting(true)
            setText('Presale')
          }, },
        ],
        imageCols: "3",
        images: [
          {
            image: Presale1,
            name: "PinkSale",
          },
          {
            image: Presale2,
            name: "GemPad",
          },
          {
            image: Presale3,
            name: "Camelot",
          },
          {
            image: Presale4,
            name: "Uniswap",
          },
          {
            image: Presale5,
            name: "PancakeSwap",
          },
          {
            image: Presale6,
            name: "SyncSwap",
          },
        ],
        text: t("launchProcessText"),
        title: t("launchProcessPresale"),
      },
      {
        buttons: [
          {
            text: t("publicSaleBtn"),
            variant: "solid",
            handleClick: () => {
              setCexlisting(true)
              setText('Cex Listing')
            },
          },
        ],
        imageCols: "3",
        images: [
          {
            image: Listing1,
            name: "MEXC Global",
          },
          {
            image: Listing2,
            name: "Gate.io",
          },
          {
            image: Listing3,
            name: "Houbi",
          },
          {
            image: Listing4,
            name: "kuCoin",
          },
          {
            image: Listing5,
            name: "OKX",
          },
          {
            image: Listing6,
            name: "BitGet",
          },
          {
            image: Listing7,
            name: "BitMart",
          },
          {
            image: Listing8,
            name: "CoinStore",
          },
          {
            image: Listing9,
            name: "ByBit",
          },
        ],
        text: t("launchProcessText"),
        title: t("launchProcessCexListing"),
      },
    ];
    const [cexlisting, setCexlisting] = useState<boolean>(false)
    const [community, setCommunity] = useState<boolean>(false)
     const [airdrop, setAirdrop] = useState<boolean>(false);

  return (
    <>
      <div className="my-16 md:flex justify-center items-center">
        <RenderComponent title={`${t("launchProcessTitle")}`}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {launch.map((item: LaunchCardProps, i: number) => (
              <LaunchCard key={i} {...item} />
            ))}
          </div>
        </RenderComponent>
      </div>
      <CoinModal
        open={cexlisting}
        onClose={() => setCexlisting(false)}
        dialogText={`Subscribe to get latest updates about Blow ${text}.`}
        dialogTitle="Coming Soon..."
        dialogChildren={
          <Formik
            initialValues={{ email: "" }}
            onSubmit={({ email }) => {
              console.log(email);
            }}
          >
            {({ values, handleChange, handleSubmit }) => (
              <form className="flex flex-col gap-5">
                <TextInput
                  name="email"
                  label="Enter your email"
                  value={values.email}
                  handleChange={handleChange("email")}
                  placeholder="sample@email.com"
                />
                <SolidButton
                  handleClick={handleSubmit}
                  variant="solid"
                  text="Submit"
                  classnames="rounded-[8px] mb-3"
                />
              </form>
            )}
          </Formik>
        }
      />

      <UtilModal
        open={community}
        onClose={() => setCommunity((prev) => !prev)}
        title="Join Our Community"
        subtitle="Connect with us to get latest update"
        content={<SocialCapsule />}
      />
      <CoinModal
        open={airdrop}
        onClose={() => setAirdrop(false)}
        dialogTitle="Join Waitlist & Airdrop"
        dialogText="Kindly fill in the form and join our community to follow the development progress. You will be notified when Blow launch."
        dialogChildren={
          <Formik
            initialValues={{
              wallet: "",
              walletAddress: "",
              email: "",
              twitter: "",
              telegram: "",
            }}
            onSubmit={() => {}}
          >
            {({ values, handleChange, handleSubmit }) => (
              <form className="flex flex-col gap-6">
                <SelectInput
                  label={`${t("chooseWallet")}`}
                  value={values.wallet}
                  placeholder="example; Jones & Harii Int."
                  handleChange={handleChange("wallet")}
                  menuItems={[
                    { label: "ENS", value: "ENS" },
                    { label: "ETH Address", value: "ETH Address" },
                    { label: "BSC Address", value: "BSC Address" },
                    { label: "ARB Address", value: "ARB Address" },
                  ]}
                />
                <TextInput
                  label={`${t("walletAddressLabel")}`}
                  value={values.walletAddress}
                  placeholder="Wallet Address"
                  handleChange={handleChange("walletAddress")}
                />
                <TextInput
                  label="Email *"
                  value={values.email}
                  handleChange={handleChange("email")}
                  placeholder="Email Address"
                />
                <TextInput
                  label="Twitter Handle *"
                  value={values.twitter}
                  handleChange={handleChange("twitter")}
                  placeholder="Twitter username"
                />
                <TextInput
                  label="Telegram Handle *"
                  value={values.telegram}
                  handleChange={handleChange("telegram")}
                  placeholder="Telegram"
                />
                <SolidButton
                  text={`${t("submit")}`}
                  handleClick={handleSubmit}
                  variant="solid"
                />
              </form>
            )}
          </Formik>
        }
      />
    </>
  );
}

export default Launch
