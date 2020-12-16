import React from 'react';

import Heading from '@theme/Heading';
import Layout from '@theme/Layout';

//import styles from './community.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const AnchoredH2 = Heading('h2');
const AnchoredH3 = Heading('h3');

function Press() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
  
    return (
      <Layout title="Press" description="Official resources for digital and printed materials">
        <header className="hero domain-bg domain-bg--acert">
          <div className="container container--fluid">
            <h1>Logos & Press Kit</h1>
            <div className="hero--subtitle">
              Official resources for digital and printed materials from acert.io
            </div>
          </div>
        </header>
        <main className="container container--xs">
          <section>
            <div class="markdown">
              <AnchoredH3 id="connect">Why?</AnchoredH3>
              <p>
              acert.io reframes digital access for things and data. 
              </p>
  
            </div>
          </section>
        </main>
      </Layout>
    );
  }


export default Press;
