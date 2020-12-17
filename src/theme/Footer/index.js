import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

function Footer() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {themeConfig = {}} = siteConfig;
  const {footer} = themeConfig;
  if (!footer) {
    return null;
  }

  return (
    <footer>
      <div className={styles.footerWrapper}>
        <div className={styles.footerBox}>
          <img src="../../static/img/Artboard.png" alt="Footer pic" className={styles.footerImage1}/>
        </div>
        <div className={styles.footerWrapper3}>
          <div className={styles.footerBox2}>
            <img src="../../static/img/Flag_of_Europe.png" alt="european flag" className={styles.footerImage2}/>
          </div>
          <p className={styles.footerText}>This project has received funding from the European Union’s Horizon 2020 research and innovation programme under the NGI_TRUST grant agreement no 82561</p>
        </div>
      </div>
      <div className={styles.footerWrapper2}>
        <div className={styles.footerBox}>
          <p>powered by <a href="https://acert-web.vercel.app/fr">Acert</a></p>
        </div>
        <div className={styles.footerBox}>
          <p>Copyright 2019 ITTI sp. z o.o. All rights reserved. Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
