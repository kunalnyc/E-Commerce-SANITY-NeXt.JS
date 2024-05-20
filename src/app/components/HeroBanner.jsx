import React from 'react'
import Link from 'next/link'


const HeroBanner = ({ heroBanners }) => {
    return (
        <div className="hero-banner-container">
            <div>
                <p className="beats-solo">
                    {heroBanners.smallText}
                </p>
                <h3> {heroBanners.midText}</h3>
                <h1> {heroBanners.largeText1}</h1>
                {/* <img src={urlForImage(heroBanners.image)} alt="dressfurry" className="hero-banner-image" /> */}
                <div>
                    <Link href={`/product/${heroBanners?.product}`}>
                        <button type="button">{heroBanners.buttonText}</button>
                    </Link>
                    <div className='desc'>
                        <h5>Description</h5>
                        <p>{heroBanners.desc}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner
