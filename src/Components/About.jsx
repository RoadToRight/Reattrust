import React from 'react'
import styled from 'styled-components'

export const About = () => {
  return (
    <AboutSec >
        <section class="main-sec">
            <div className="col-1">
                <img src="Group 13484580926.png" />

                
            </div>
            <div className="col-2">
                <h1 class="about-heading">
                     Not Your Average Realtor
                </h1>
                <p class="about-paragraph">
                 Real Trust has an eye for seeing a property’s potential, coordinating design, and eectively marketing to get homeowners top dollar on their sale.
                </p>
                <button class="about-btn">
                Learn More
                </button>

            </div>
     
        </section>
        
    </AboutSec>
  )
}

const AboutSec = styled.section
`
.main-sec{
   max-width: 1260px;
   margin:0 auto;
  padding:80px 20px;
  display:flex;
  flex-direction:row;
  gap:40px;
  justify-content:center;
  align-item:center; 

}
.col-1 , .col-2 {
  width:50%;

}
.col-2 {

display:flex;
flex-direction:column;
justify-content:center;
align-item:center;
gap:20px;
}

.about-btn {
padding: 12px 24px;
max-width: max-content;
color: #ffff;
background: #BAA360;
border: none;
font-size: 18px;
font-family: "Poppins", sans-serif !important;
font-weight: 600;
}

.about-heading {
  font-size:40px;

}

.about-paragraph {
    font-size: 16px;
    font-weight: 400 !important;
    font-family: "Poppins", sans-serif !important;
    line-height: 30px;
    max-width: 481px;
}

`