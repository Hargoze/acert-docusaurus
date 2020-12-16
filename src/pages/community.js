import React from 'react';

import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

//import styles from './community.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const AnchoredH2 = Heading('h2');
const AnchoredH3 = Heading('h3');

function Community() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;


  return (
    <Layout title="Community" description="Join our open community. Connect with other users and help make acert better.">
      <header className="hero hero--clean">
        <div className="container container--fluid">
          <h1>Community</h1>
          <div className="hero--subtitle">Join our open community. Connect with other users and help make acert better.</div>
        </div>
      </header>
      <main>
        <section>
          <div className="container">
            <div className="row">
              <div className="col">
                <a href="https://matrix.to/#/!itNFPuHTDmvGSASiDR:matrix.org/$f76Ann6mpRupw7E31qzgqNwGx4SrdcWHzviRZ-FzSYs?via=matrix.org" target="_blank" className="panel panel--button">
                  <div className="panel--icon">
                    <i className="feather icon-message-circle"></i>
                  </div>
                  <div className="panel--title">[Matrix] channel</div>
                  <div className="panel--description">Ask questions and get help</div>
                </a>
              </div>
              <div className="col">
                <a href="https://twitter.com/acertHQ" target="_blank" className="panel panel--button">
                  <div className="panel--icon">
                    <i className="feather icon-twitter" title="Twitter"></i>
                  </div>
                  <div className="panel--title">@acertHQ</div>
                  <div className="panel--description">Follow us in real-time</div>
                </a>
              </div>
              <div className="col">
                <a href="https://github.com/acertio" target="_blank" className="panel panel--button">
                  <div className="panel--icon">
                    <i className="feather icon-github"></i>
                  </div>
                  <div className="panel--title">Github</div>
                  <div className="panel--description">Specs, issues and code</div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <AnchoredH2 id="faqs">FAQs</AnchoredH2>

            <AnchoredH3 id="contribute" className="header--flush">How do I contribute to acert?</AnchoredH3>

          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Community;
