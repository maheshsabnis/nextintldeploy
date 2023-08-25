/* an array of cultures */
/* mechanism of reading various JSONs and configuring them to i18next and i18next-resources-to-backend */

import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
/* Initiating the support for internationlization for react app */
import { initReactI18next } from "react-i18next/initReactI18next"; 
import { getOptions } from "./settings";

/* use the middlewares of i18next and react-i18next for the current application so that the next.js will use it on the server */

const initI18next = async(lng:string,ns:string)=>{
    const i18Instance = createInstance();

    await i18Instance
        .use(initReactI18next)
        .use(resourcesToBackend((language:string,namespace:string)=>import(`./locales/${language}/${namespace}.json`)))
        .init(getOptions(lng,ns));
        return i18Instance;
}


/* The logic for transation 
  by creating a custom Hook
*/
export async function useTranslation(lng, ns, options = {}) {
    const i18nextInstance = await initI18next(lng, ns)
    return {
      t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns, options.keyPrefix),
      i18n: i18nextInstance
    }
  }


