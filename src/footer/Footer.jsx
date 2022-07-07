import React from 'react'
import './Footer.scss'

export default function Footer() {
    return (
        <div className='footer'>
            <div className="info">
                <div className="infoblock">
                    <div className="ofninfo">
                        <h1>OFNIINFO</h1>
                        <p>Ofninfo Solution scale your business
                            digitally through best software product
                            development, user experience, drives
                            traffic, and connect with the customer
                        </p>
                    </div>
                    <div className="services">
                        <h1>Services</h1>
                        <p>Web Development <br />
                            <p>App Development </p>
                            <p>UX/UI Design</p>
                            <p>Desktop App</p>
                        </p>
                    </div>
                    <div className="links">
                        <h1>Quick Links</h1>
                        <p>Web Development
                            <p>App Development</p>
                            <p>UX/UI Design</p>
                            <p>Desktop App</p>
                        </p>
                    </div>
                    <div className="contact">
                        <h1>Contact</h1>
                        <div className="first">
                            <div className="img">
                                <div className="image"></div>
                            </div>
                            <p>info@ofniinfo.com</p>
                        </div>
                        <div className="second">
                            <div className="img">
                                <div className="image"></div>
                            </div>
                            <p>+91 7600003893</p>
                        </div>
                        <div className="third">
                            <div className="img">
                                <div className="image"></div>
                            </div>
                            <p>216, Meriton Plaza Near
                                Savaliya Circle, opp Varachha
                                Co-Bank Surat-395010</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="social">
                <h1>Social</h1>
                <div className="links">
                    <div className="link">
                        <div className="link1">
                            <div className="pickture"></div>
                        </div>
                        <div className="link2">
                            <div className="pickture"></div>
                        </div>
                        <div className="link3">
                            <div className="pickture"></div>
                        </div>
                        <div className="link4">
                            <div className="pickture"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="copyrighttext">
                <p>Copyright@2021Ofniinfo Solution</p>
                <p>Privacy policy</p>
                </div>
            </div>
        </div>
    )
}
