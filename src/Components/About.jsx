import React from 'react'
import styled from 'styled-components'

export const About = () => {
  return (
    <AboutSec >
        <section class="main-sec">
            <div className="col-1">
                <img src="Group 13484580926.png" />

                
            </div>
            <div class="col-2">
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

            <div className="col-3">
                <div className="about-counter">
                <h4 class="counter-heading" > 10k </h4>
                <p class="counter-paragraph"> Total Clients</p>
                </div>

                <div className="about-counter">
                <h4 class="counter-heading" > 1800+</h4>
                <p class="counter-paragraph"> Total Clients</p>
                </div>
    

                <div className="about-counter">
                <h4 class="counter-heading" > 3,420,90+</h4>
                <p class="counter-paragraph"> Total Clients</p>
                </div>


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
  flex-wrap:wrap;
  flex-direction:row;
  gap:40px;
  justify-content:end;
  

}
.col-1 , .col-2 {
  width:48%;

}
.col-3 {
width:780px;
height:200px;
background-color:#181C21;
padding:55px 80px;
display: flex;
justify-content: center;
align-items: center;
gap: 100px;
position:relative;
margin-top: -135px;

}  

.col-3::before {
content: "";
position: absolute;
background: url(/memphics_003.png) no-repeat center center / contain !important;
z-index: -1;
width: 138px;
min-height: 138px;
bottom: -30px;
right: -55px;

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
    font-size: 18px;
    font-weight: 400 !important;
    font-family: "Poppins", sans-serif !important;
    line-height: 30px;
    max-width: 560px;
}


// column 3 inner section  
.about-counter {
display: flex;
gap: 20px;
flex-direction: column;
justify-content: center;
align-items: center;
}
.counter-heading {
font-size: 32px;
color: #BAA360;
font-family: "Poppins", sans-serif !important;
line-height: 130%;
}
.counter-paragraph {
color: #BAA360;
font-size: 18px;
font-family: "Poppins", sans-serif !important;
font-weight: 600;
}
`