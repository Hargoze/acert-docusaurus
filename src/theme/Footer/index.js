import React from 'react';
import classnames from 'classnames';

import Link from '@docusaurus/Link';
import MailingList from '@site/src/components/MailingList';
import SVG from 'react-inlinesvg';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { Stack, Text } from "@chakra-ui/react"
function FooterLink({to, href, label, ...props}) {
  const toUrl = useBaseUrl(to);
  return (
    <Link
      className="footer__link-item"
      {...(href
        ? {
            target: '_blank',
            rel: 'noopener noreferrer',
            href,
          }
        : {
            to: toUrl,
          })}
      {...props}>
      {label}
    </Link>
  );
}

const FooterLogo = ({url, alt}) => (
  <img className="footer__logo" alt={alt} src={url} />
);

function Footer() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {themeConfig = {}} = siteConfig;
  const {footer} = themeConfig;

  const {copyright, links = [], logo = {}} = footer || {};
  const logoUrl = useBaseUrl(logo.src);

  if (!footer) {
    return null;
  }

  return (
    <footer
    /*
      className={classnames('footer', {
        'footer--dark': footer.style === 'dark',
      })}
    */
      >
      {/*
      <div className="container">
        {links && links.length > 0 && (
          <div className="row footer__links">
          <div className="col col--5 footer__col">

              <div className="margin-bottom--md">
                <MailingList description={true} width="200px" />
              </div>
              <div>
                <a href="https://twitter.com/acertHQ" target="_blank"><i className="feather icon-twitter" alt="Twitter"></i></a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://matrix.to/#/!itNFPuHTDmvGSASiDR:matrix.org/$f76Ann6mpRupw7E31qzgqNwGx4SrdcWHzviRZ-FzSYs?via=matrix.org" target="_blank"><i className="feather icon-message-circle" alt="Chat"></i></a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://github.com/acertio" target="_blank"><i className="feather icon-github" alt="Github Repo"></i></a>
                &nbsp;&nbsp;&nbsp;&nbsp;
              </div>
            </div>
            {links.map((linkItem, i) => (
              <div key={i} className="col footer__col">
                {linkItem.title != null ? (
                  <h4 className="footer__title">{linkItem.title}</h4>
                ) : null}
                {linkItem.items != null &&
                Array.isArray(linkItem.items) &&
                linkItem.items.length > 0 ? (
                  <ul className="footer__items">
                    {linkItem.items.map((item, key) =>
                      item.html ? (
                        <li
                          key={key}
                          className="footer__item"
                          dangerouslySetInnerHTML={{
                            __html: item.html,
                          }}
                        />
                      ) : (
                        <li key={item.href || item.to} className="footer__item">
                          <FooterLink {...item} />
                        </li>
                      ),
                    )}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        )}
        {(logo || copyright) && (
          <div className="text--center">
            {logo && logo.src && (
              <div className="margin-bottom--sm">
                {logo.href ? (
                  <a
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.footerLogoLink}>
                    <FooterLogo alt={logo.alt} url={logoUrl} />
                  </a>
                ) : (
                  <FooterLogo alt={logo.alt} url={logoUrl} />
                )}
              </div>
            )}

            <div
              dangerouslySetInnerHTML={{
                __html: copyright,
              }}
            />
            <small>
            <a href="https://github.com/acertio/acert-open/security/policy">Security Policy</a>&nbsp;&bull;&nbsp;
          </small>
          </div>
        )}
      </div>
      */}
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
        <div className={styles.footerBox2}>
          <p>lol</p>
        </div>
        <div className={styles.footerBox2}>
          <p>Copyright 2019 ITTI sp. z o.o. All rights reserved. Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
