import React from 'react'

const Contact = () => {
  return (
    <div className='contact-container'>
    
         <div className="contact-address">
            <img  src="https://cdn-icons-png.freepik.com/256/12536/12536618.png?uid=R155538293&ga=GA1.1.2048437017.1720805491&semt=ais_hybrid" alt="" />
            <ul>
                <h2>Address:</h2>
                <li>Vijayawada</li>
                <li>Andhra Pradesh</li>
                <li>India</li>
            </ul>
         </div>
         <div className="contact-phone">
            <img src="https://cdn-icons-png.freepik.com/256/13/13936.png?semt=ais_hybrid" alt="" />
            <h2>Mobile:</h2>
            <ul>
                <li>+919182339500</li>
                <li>+917675037112</li>
            </ul>
         </div>
         <div className="contact-email">
            <img src="https://cdn-icons-png.freepik.com/256/3178/3178158.png?semt=ais_hybrid" alt="" />
                <h2>Email:</h2>
            <ul>
                <li>gayatrikotyada2@gmail.com</li>
            </ul>
         </div>
    </div>
   
  )
}

export default Contact