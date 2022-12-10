import React from 'react';
import DH from "../assets/DH.png";
import DHwhite from "../assets/dh-white.svg";
import { useContextGlobal } from './utils/global.context';

const Footer = () => {
  const {state} = useContextGlobal();

  return (
    <footer className={state.theme}>
        <p>Powered by</p>
        {state.theme === "" ? 
          <img src={DH} alt='DH-logo' /> : 
          <img src={DHwhite} style={{paddingLeft:"20px"}} alt='DH-logo' />
        }
    </footer>
  )
}

export default Footer
