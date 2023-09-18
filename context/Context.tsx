import React, { FC, ReactNode, createContext } from 'react'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { translationEnglish } from '../lang/en'
import { translationFrance } from '../lang/fr'
import { useTranslation } from 'react-i18next'
import { $SpecialObject } from 'i18next/typescript/helpers'
import { translationArabic } from '../lang/ar'
import { translationChinese } from '../lang/ch'
import { translationSpanish } from '../lang/sp'
import { translationPortuguese } from '../lang/po'
import { translationGerman } from '../lang/ge'
import { translationDutch } from '../lang/du'




i18n
.use(initReactI18next)
.init({
    resources: {
        en: { translation: translationEnglish },
        fr: { translation: translationFrance },
        ar: { translation: translationArabic },
        ch: { translation: translationChinese },
        sp: { translation: translationSpanish },
        po: { translation: translationPortuguese },
        ge: { translation: translationGerman },
        du: { translation: translationDutch }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
})


export interface ContextProps {
   
}

export const UserContext = createContext<ContextProps>({} as any)

const Context: FC<{ children: ReactNode }> = ({ 
    children
}) => {


  return (
    <UserContext.Provider value={{}}>
        { children }
    </UserContext.Provider>
  )
}

export default Context
