/* UI for Showing the Footer so that the end-user can select language */

import Link from "next/link"
import { languages } from "@/src/app/i18n/settings";
import { useTranslation } from "@/src/app/i18n";
import { Trans } from "react-i18next/TransWithoutContext";

export const Footer=async({lng})=>{
    /* this will use footer.json from the locales folder */
    const {t} = await useTranslation(lng,'footer');
    return (
        <footer style={{marginTop: 50}}>
            <Trans i18nKey="languageSwitcher" t={t} >
                Switch from <strong>{{lng}}</strong> to : {' '}
            </Trans>
            {/* Iterate over languages array so that it will generate UI abd end-user will select language from it*/}
            {
                languages.filter((ln)=> lng !== ln).map((l,index)=>{
                    return (
                        <span key={index}>
                           {index > 0 && (' or ')}
                                <Link href={`/${l}`}>
                                {l}
                                </Link>
                        </span>
                    )
                })
            }
        </footer>
    )
}