/* HOC for loading all Components  */

import { dir } from "i18next";
import { languages } from "../i18n/settings";

/* Lets create a Increamental Static Regenation on the server for the languagdes based on the language parameters */

/* generateStaticParams(), this method will combien the dynamic-routes from the src/app folder [FOLDER-NAE] and the staic generation of HTML ar butid time so that the HTML will be already available on the server and will be responded to the browser */

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }))
  }
/* Deploy */
export default function RootLayout({
  children,
  params: {
    lng
  }
}) {
  
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}