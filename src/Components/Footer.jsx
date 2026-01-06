import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RxCaretRight } from "react-icons/rx";

import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterSec >
            <div className="container">
                <div className="left">
                    <div className="img"><img src="/logofooter.png" alt="" /></div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                </div>
                <div className="middle">
                    <h4>Quick Links</h4>
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About Projects</li>
                        <li>Testimonial</li>
                    </ul>
                </div>
                <div className="right">
                    <h4>Newsletter</h4>
                    <div className="inputBox">
                        <HiOutlineMail />

                        <input type="text" placeholder='Email Address' />
                        <RxCaretRight />

                    </div>
                    <div className="social_icons">
                        <FaFacebookF className="icon" color='white'/>
                        <BsTwitterX className="icon" color='white'/>
                        <FaLinkedinIn className="icon" color='white'/>
                    </div>
                </div>
            </div>
        </FooterSec>
    )
}

export default Footer

const FooterSec = styled.footer`
    display: flex;
    flex-direction:row;
    background:rgba(24, 28, 33, 1);
    h4{
    color:rgba(24, 28, 33, 1);
    }
    .container{
        display: flex;
    }
    .social_icons .icon {
    background:rgba(186, 163, 96, 1);
    }
    .middle ul{
        list-style: none;
    }
`