/* create a middleware that will accept ACCEPT-LANGUAGE header key and based upon it the culture for in18next and react-i18next will be loaded
IMP: Since we are using the dynamic routes and static HTML set the _next/static path for path matcher in config so that the corresponding HTML will be loaded 
*/

import { NextRequest, NextResponse } from "next/server";

import acceptLanguage from 'accept-language';
 import { fallbackLng,languages } from "./app/i18n/settings";


 /* set the acceptlanguage value for the request allowed from all languages defined in the languages array */

 acceptLanguage.languages(languages);

 export const config = {
    /* create a matcher for the request path */
    matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
 }

 /* set the cookie name this will be created in the browser defining the selected language by user and based on that the language values created in browser */

 const cookieName ='i18next';

 /* create a midleware */

 export function middleware(request:NextRequest){
    console.log('In Middleware');
    let lng;
    /* read language value from the cookie */
    if(request.cookies.has(cookieName))
        lng = acceptLanguage.get(request.cookies.get(cookieName).value);

    /* if the cookie is having the value as empty or else cookie itself is not present then read it from the Accept-Language header*/
    if(!lng)
        lng = acceptLanguage.get(request.headers.get('Acept-Language'));
    /* otherwise the fallbacklng wiil be the default */
    lng = fallbackLng;
    console.log('In Middleware value of lng = ' + lng);
    /* redirect if the lng path is not supported*/

    if (
        !languages.some(loc => request.nextUrl.pathname.startsWith(`/${loc}`)) &&
        !request.nextUrl.pathname.startsWith('/_next')
      ) {
        console.log('if statement ' + request.url)
        // redirect to the dynamic route and with path name
        return NextResponse.redirect(new URL(`/${lng}${request.nextUrl.pathname}`, request.url))
      }
    /* work with the headers for returning the response of the cookie by writing selected language in it */

    if (request.headers.has('referer')) {
        const refererUrl = new URL(request.headers.get('referer'))
        const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
        const response = NextResponse.next()
        if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
        return response
      }

    /* Just send the response */
    return NextResponse.next();
 }
 