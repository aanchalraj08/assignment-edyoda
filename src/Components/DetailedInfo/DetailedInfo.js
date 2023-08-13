import React from 'react'
import './DetailedInfo.css'
import icon_1 from '../../assets/icon-1.png'
import icon_2 from '../../assets/icon-2.png'
import icon_3 from '../../assets/icon-3.png'
import icon_4 from '../../assets/icon-4.png'
import icon_5 from '../../assets/icon-5.png'


export default function DetailedInfo() {
    return (
        <div className='DetailedInfo'>
            <h2 className='DetailedInfo_Title'>Access curated courses worth
                <span className='Roboto'> ₹ <span className='Strikethrough'>18,500</span></span> at just <span className=' themeText Roboto'>₹99</span> per year!
            </h2>

            <div className='DetailedInfo_FeatureList Roboto'>
                <div className='DetailedInfo_Feature'>
                    <img className='DetailedInfo_Feature_Icon' src={icon_1} alt=' 1 . ' />
                    <span>
                        <span className='themeText'>100+</span> Job relevant courses
                    </span>
                </div>
                <div className='DetailedInfo_Feature'>
                    <img className='DetailedInfo_Feature_Icon' src={icon_2} alt=' 2 . ' />
                    <span>
                        <span className='themeText'>100+</span> Job relevant courses
                    </span>
                </div>
                <div className='DetailedInfo_Feature'>
                    <img className='DetailedInfo_Feature_Icon' src={icon_3} alt=' 3 . ' />
                    <span>
                        <span className='themeText'>20,000+</span> Hours of content
                    </span>
                </div>
                <div className='DetailedInfo_Feature'>
                    <img className='DetailedInfo_Feature_Icon' src={icon_4} alt=' 4 . ' />
                    <span>
                        Scholarship worth <span className='themeText'>₹94,500</span>
                    </span>
                </div>
                <div className='DetailedInfo_Feature'>
                    <img className='DetailedInfo_Feature_Icon' src={icon_5} alt=' 5 . ' />
                    <span>
                        <span className='themeText'>Ad Free</span> learning experience
                    </span>
                </div>

            </div>
        </div>
    )
}
