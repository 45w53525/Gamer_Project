import React from 'react'
import classes from './Footer.module.css';
import {FaFacebook , FaTwitter , FaInstagram} from 'react-icons/fa';
export const Footer = () => {
    return (
        <div>
            <footer className={classes.footer}>
                <div className={classes.container}>
                    <div className={classes.row}>
                        <div className="footer-col">
                            <h4>company</h4>
                            <ul>
                                <li>
                                    <a href="#">about us</a>
                                </li>
                                <li>
                                    <a href="#">our services</a>
                                </li>
                                <li>
                                    <a href="#">privacy policy</a>
                                </li>
                                <li>
                                    <a href="#">affiliate program</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>get help</h4>
                            <ul>
                                <li>
                                    <a href="#">FAQ</a>
                                </li>
                                <li>
                                    <a href="#">shipping</a>
                                </li>
                                <li>
                                    <a href="#">returns</a>
                                </li>
                                <li>
                                    <a href="#">order status</a>
                                </li>
                                <li>
                                    <a href="#">payment options</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>online shop</h4>
                            <ul>
                                <li>
                                    <a href="#">watch</a>
                                </li>
                                <li>
                                    <a href="#">bag</a>
                                </li>
                                <li>
                                    <a href="#">shoes</a>
                                </li>
                                <li>
                                    <a href="#">dress</a>
                                </li>
                            </ul>
                        </div>
                     
                    </div>
                </div>
            </footer>


        </div>
    )
}
export default Footer;