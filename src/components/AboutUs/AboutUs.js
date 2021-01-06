import React from 'react'
import './AboutUs.css'
import Naomi from '../images/Naomi.png'
import Dean from '../images/Dean.png'
import Nadine from '../images/Nadine.png'
import Viet from '../images/Viet.png'
import Usa from '../images/Usa.jpg'
import Ire from '../images/Ire.jpg'
import Ger from '../images/Ger.jpg'
import Aus from '../images/Aus.jpg'
// import Airbus from '../images/airbus.png'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const AboutUs = () => {
    return (
        <div>
            {/* <div className='airbus'>
                <img src={Airbus} alt='airbus' />
            </div> */}
            <div className='card__container'>
            <div className='card__contact'>

                <div className='card__inner'>

                    <div className='card__face card__face--front'>
                    <img src={Usa} alt='usa' className='flag' />
                    </div>
                    
                    <div className='card__face card__face--back'>

                        <div className='card__content'>
                            
                            <div className='card__header'>
                                <img src={Naomi} alt='naomi' className='pp' />
                                <h2>Naomi Carey <a href='https://github.com/naomi-carey'>
                                    <FaGithub/></a> <a href='https://www.linkedin.com/in/naomi-c-2028b4/'>
                                    <FaLinkedin/></a></h2>
                            </div>

                            <div className='card__body'>
                                <h3>Chief Executive Officer (CEO)</h3>
                                <p>Cupcake ipsum dolor sit. Amet I love liquorice jujubes pudding croissant I love pudding.
                                     Apple pie macaroon toffee jujubes pie tart cookie applicake caramels. Halvah macaroon I
                                      love lollipop. Wypas I love pudding brownie cheesecake tart jelly-o. Bear claw cookie
                                       chocolate bar jujubes toffee. 
                                    </p>  
                                      
                            </div> 
                        </div>
                    </div>
                </div>
            </div>

            <div className='card__contact'>

                <div className='card__inner'>

                    <div className='card__face card__face--front'>
                    <img src={Ire} alt='ire' className='flag' />
                    </div>
                    
                    <div className='card__face card__face--back'>

                        <div className='card__content'>
                            
                            <div className='card__header'>
                                <img src={Dean} alt='dean' className='pp' />
                                <h2>Dean Leonard <a href='https://github.com/Deanleonard26'>
                                    <FaGithub/></a> <a href='https://www.linkedin.com/in/deanleonard1/'>
                                    <FaLinkedin/></a></h2>
                            </div>

                            <div className='card__body'>
                                <h3>Chief Product Officer (CPO)</h3>
                                <p>Cupcake ipsum dolor sit. Amet I love liquorice jujubes pudding croissant I love pudding.
                                     Apple pie macaroon toffee jujubes pie tart cookie applicake caramels. Halvah macaroon I
                                      love lollipop. Wypas I love pudding brownie cheesecake tart jelly-o. Bear claw cookie
                                       chocolate bar jujubes toffee. 
                                    </p>  
                                        
                            </div> 
                        </div>
                    </div>
                </div>
            </div>

            <div className='card__contact'>

                <div className='card__inner'>

                    <div className='card__face card__face--front'>
                    <img src={Ger} alt='ger' className='flag' />
                    </div>
                    
                    <div className='card__face card__face--back'>

                        <div className='card__content'>
                            
                            <div className='card__header'>
                                <img src={Nadine} alt='nadine' className='pp' />
                                <h2>Nadine Storbel <a href='https://github.com/Nadine1111'>
                                    <FaGithub/></a> <a href='https://www.linkedin.com/in/nadine-strobel-723a9561/'>
                                    <FaLinkedin/></a></h2>
                            </div>

                            <div className='card__body'>
                                <h3>Junior Developer</h3>
                                <p>Cupcake ipsum dolor sit. Amet I love liquorice jujubes pudding croissant I love pudding.
                                     Apple pie macaroon toffee jujubes pie tart cookie applicake caramels. Halvah macaroon I
                                      love lollipop. Wypas I love pudding brownie cheesecake tart jelly-o. Bear claw cookie
                                       chocolate bar jujubes toffee. 
                                    </p> 
                                       
                            </div> 
                        </div>
                    </div>
                </div>
            </div>

            <div className='card__contact'>

                <div className='card__inner'>

                    <div className='card__face card__face--front'>
                    <img src={Aus} alt='aus' className='flag' />
                    </div>
                    
                    <div className='card__face card__face--back'>

                        <div className='card__content'>
                            
                            <div className='card__header'>
                                <img src={Viet} alt='viet' className='pp' />
                                <h2>Viet Pham <a href='https://github.com/VietQuoc356'>
                                    <FaGithub/></a> <a href='https://www.linkedin.com/in/viet-quoc-pham-2850581ba/'>
                                    <FaLinkedin/></a></h2>
                                
                            </div>

                            <div className='card__body'>
                                <h3>Junior Developer</h3>
                                <p>Cupcake ipsum dolor sit. Amet I love liquorice jujubes pudding croissant I love pudding.
                                     Apple pie macaroon toffee jujubes pie tart cookie applicake caramels. Halvah macaroon I
                                      love lollipop. Wypas I love pudding brownie cheesecake tart jelly-o. Bear claw cookie
                                       chocolate bar jujubes toffee. 
                                    </p>   
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AboutUs;