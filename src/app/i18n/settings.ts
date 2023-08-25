/* settings for translation that will be used for rendering */

/* the default language aka fallback language */
export const fallbackLng = 'en';
/* Array of Languages */
export const languages = [fallbackLng,'de','fr'];

/* the transaction settings constant that will be used to manage the 
  transaltion
*/

export const defaultNS = 'translation';

/* a function that will be returning default language as well as settongs for transalation constant */

export  function getOptions(lng = fallbackLng, ns = defaultNS){
 return {
    supportedLngs:languages, /* suppored languages for UI */
    fallbackLng, /* default fallbask */
    lng, /* the selected language  */
    fallbackNS:defaultNS, /* support for transaltion so that the JSON will be loaded */
    defaultNS, /* use the default transaction */
    ns /* current value of evaluation of transaction as defaultNS */
 }
}