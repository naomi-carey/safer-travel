import React from 'react';
import SocialMediaButtons from 'react-social-media-buttons';
 
const MyComponent = () => {
  const links = ['https://github.com/jaumefapa', 'https://www.linkedin.com/in/jaume-fabrega/'];
 
  const buttonStyle = {
    backgroundColor: '#000000',
    borderRadius: '50%',
  };
 
  const iconStyle = { color: '#ffffff' };
 
  return (
    <div>
      <SocialMediaButtons buttonStyle={buttonStyle} iconStyle={iconStyle} />
    </div>
  );
};



//https://react-social-media-buttons.vercel.app/