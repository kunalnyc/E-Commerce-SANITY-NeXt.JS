import React from 'react'
import Link from 'next/link'

const FooterBanner = ({ footerBanner }) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{footerBanner.discount}</p>
          <h3>{footerBanner.largeText2}</h3>
          <h3>{footerBanner.saleTime}</h3>
        </div>
        <div className='right'>
          <p>{footerBanner.product}</p>
          <h3>{footerBanner.midText}</h3>
          <p>{footerBanner.desc}</p>
          <Link href={`/product/${footerBanner?.product}`}>
            <button type="button">{footerBanner.buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FooterBanner
