import React, { Component } from 'react'
import './ColabBanner.css'

export default class ColabBanner extends Component {
    render() {
        return (
            <div>
            <div>
                        <h2>IN COLLABORATION WITH</h2>
                    </div>
            <div className='colab-container'>
                    <div>
                        <img className='colab-img1' src='/images/colab1.svg' />
                        <img className='colab-img2' src='/images/colab2.png' />
                        <img className='colab-img3' src='/images/colab3.svg.png' />
                        <img className='colab-img4' src='/images/colab4.jpg' />
                        <img className='colab-img5' src='/images/colab6.png' />
                        <img className='colab-img6' src='/images/colab7.png' />
                        <img className='colab-img7' src='/images/logo-govtech.gif' />
                        <img className='colab-img8' src='/images/logo-htx.png' />
                        <img className='colab-img9' src='/images/logo-mot.jpg' />
                        <img className='colab-img10' src='/images/logo-sndgo.png' />
                    </div>
            </div>
            </div>
        )
    }
}
