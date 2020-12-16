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
      <div className={styles.footerContainer}>
        <img src="../../static/img/Artboard.png" alt="Footer pic"/>
        <div className={styles.footerText}>
          <p>This project has received funding from the European Union’s Horizon 2020 research and innovation programme under the NGI_TRUST grant agreement no 825618According to cybercrime magazine, “healthcare suffers 2-3X more cyberattacks than the average amount for other industries”, because the data has more value for hackers. Cyber regulations such as the EU cybersecurity act provide mandatory requirements to protect sensitive information and systems. Beyond traditional clinical systems of electronic health records (EHR), it remains really difficult to extend that line of requirements to connected devices people carry around as part of their treatments. If those medical devices aren’t properly secured, people may unknowingly be broadcasting their health status, as well as many other personal sensitive data, everywhere they go. Or even be directly harmed by hacked devices. Existing protocols available for IoT are unable to meet the complete requirements from regulators. In the current proposal, we provide an opensource pilot implementation on how an equipment vendor should protect the functions and data of their medical IoT devices.</p>
        </div>
      </div>
      <div className={styles.footerContainer2}>
        <div>
          <i>linkedin</i>
        </div>
        <div>
          <p>Copyright 2019 ITTI sp. z o.o. All rights reserved. Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
