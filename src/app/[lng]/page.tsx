/* The Default UI */
 
import React from 'react';
import { useTranslation } from '../i18n';
import Link from 'next/link';
import { Footer } from './component/footer';


/* Since the current component will be renderd as child under the layout.tsx (RootLayout), it will take all params from its parent*/
export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng)
  return (
    <>
      <h1>{t('title')}</h1>
      <Link href={`/${lng}/second-page`}>
        {t('to-second-page')}
      </Link>
      <Footer lng={lng}></Footer>
    </>
  )
}
