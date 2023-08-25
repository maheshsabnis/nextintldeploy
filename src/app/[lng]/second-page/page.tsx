/* COntain links for navigations across the Views */

import React from 'react'
import Link from 'next/link'
import { useTranslation } from '@/app/i18n'
import { Footer } from '../component/footer'
const Page = async({params:{lng}}) => {
    /* This will use the zsecond-page.json */
    const {t} = await useTranslation(lng, 'second-page')
  return (
    <div className='container'>
        {/* read keys from the various JSON files created for each language */}
        <h1>{t('title')}</h1>
        <Link href={`/${lng}/second-page`}>
          {t('back-to-home')}
        </Link>
        <Footer lng={lng}></Footer>
    </div>
  )
}

export default Page
