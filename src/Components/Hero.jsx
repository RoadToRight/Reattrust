import React from 'react'
import styled from 'styled-components'

const Hero = () => {
    return (
        <HeroSec className="Hero_Section">
            <div className="container">
                <header>
                    <h4>welcome to real trust</h4>
                    <h2>Consultation,</h2>
                    <h2>Design, & Marketing</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and
                        scrambled it to make a type specimen book.
                    </p>
                </header>

                <div className="input_Box">
                    <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M24.5264 6.19141C24.7168 6.04004 25 6.18164 25 6.4209V16.4062C25 17.7002 23.9502 18.75 22.6562 18.75H2.34375C1.0498 18.75 0 17.7002 0 16.4062V6.42578C0 6.18164 0.27832 6.04492 0.473633 6.19629C1.56738 7.0459 3.01758 8.125 7.99805 11.7432C9.02832 12.4951 10.7666 14.0771 12.5 14.0674C14.2432 14.082 16.0156 12.4658 17.0068 11.7432C21.9873 8.125 23.4326 7.04102 24.5264 6.19141ZM12.5 12.5C13.6328 12.5195 15.2637 11.0742 16.084 10.4785C22.5635 5.77637 23.0566 5.36621 24.5508 4.19434C24.834 3.97461 25 3.63281 25 3.27148V2.34375C25 1.0498 23.9502 0 22.6562 0H2.34375C1.0498 0 0 1.0498 0 2.34375V3.27148C0 3.63281 0.166016 3.96973 0.449219 4.19434C1.94336 5.36133 2.43652 5.77637 8.91602 10.4785C9.73633 11.0742 11.3672 12.5195 12.5 12.5Z"
                            fill="#BAA360" />
                    </svg>

                    <input type="text" name="" id="" placeholder="Email Address" />
                    <button>Contact Us</button>
                </div>

            </div>
        </HeroSec>
    )
}

export default Hero


const HeroSec = styled.section`

    background-image: url("Hero.png");
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 100% calc(100vh - 110px);
    min-height: calc(100vh - 110px);
    display: flex;
    justify-content: center;
    align-items: center;


header{
    display: flex;
    gap:14px;
    flex-direction: column;
}


 header h2 {
    color: white;
    font-size: 60px;
    font-weight: 700;
}

 header h4 {
    color: white;
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
}

 header p {
    color: white;
    line-height: 30px;
    max-width: 770px;
}

 .input_Box {
    max-width: 700px;
    display: flex;
    position: relative;
}

 .input_Box input {
    background: white;
    padding: 28px 76px;
    width: 550px;
}

 .input_Box input:focus {
    outline: none;
}

 .input_Box button {
    background-color: #BAA360;
    padding: 17px 0px;
    font-weight: 600;
    font-size: 18px;
    color: white;
    width: 190px;
    height: calc(100% - 20px);
    margin: auto 0;
    position: relative;
    z-index: 2;
    margin-left: -95px;
}

 .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

 .input_Box svg {
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%);b  
    left: 31px;
}

`