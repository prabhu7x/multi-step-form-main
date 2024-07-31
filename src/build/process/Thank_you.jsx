import React from 'react'
import images from '../Components/Images'

function Thank_you() {
  return (
    <div className='card thank_you'>
        <div>
            <img src={images.thank_you} alt="thank you" />
            <h1>Thank you</h1>
            <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
    </div>
  )
}

export default Thank_you