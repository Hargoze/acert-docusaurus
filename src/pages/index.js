import React, { useState, useEffect } from 'react';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import classnames from 'classnames';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import { List, ListItem, ListIcon } from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"

const AnchoredH2 = Heading('h2');

// HERO
function HeroContent() {

  return (
    <div className="container">
    
      <h1>Reframing Digital Access</h1>
      <div className="hero--buttons">
      <Link to="https://github.com/acertio/manifesto.md" className="button button--primary"><i className="feather icon-star-on"></i> Read our Manifesto</Link>
      <Link to="https://github.com/acertio" className="button button--primary"><i className="feather icon-github"></i> View on Github</Link>
      </div>

      <img src='../static/img/hero.svg' alt="acert hero banner"/>

      <h3>Open Source IAM <strong><em>(Identity and Access Management)</em></strong> for people and their things.</h3>

    </div>
  );
}

// FEATURES
const features = [
  {
    title: 'Developer Tools',
    description: ['decentralized Storage', 'Data Dashboard', 'Smart Contract Tools'],
  },
  {
    title: 'Middleware',
    description: ['decentralized Storage', 'IoT Data Oracle', 'Confidential Computing'],
  },
  {
    title: 'Iotex Blockchain',
    description: ['Token Transaction', 'Data Exchange', 'Smart Contracts'],
  },
];

function Features({features}) {
  let rows = [];

  let i,j, chunk = 3;
  for (i=0,j=features.length; i<j; i+=chunk) {
    let featuresChunk = features.slice(i,i+chunk);

    rows.push(
      <div key={`features${i}`} className="row">
        {featuresChunk.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    );
  }

  return (
    <section className={styles.features}>
      <div className="container">
        <AnchoredH2 id="features">Why work with us?</AnchoredH2>
        {rows}
      </div>
    </section>
  );
}

function Feature({icon, title, description}) {
  return (
    <div className={classnames('col col--4', styles.feature)}>
      <div className={styles.featureBox}>
        <h3>{title}</h3>
        <List color="yellow.500" >
        {description.map((elem, i) => (
          <ListItem key={i}>
            <ChevronRightIcon color="yellow.500" />
            {elem}
          </ListItem>
        ))}
        </List>
      </div>
      
    </div>
  );
}

// HOME 
function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <Layout title={`${siteConfig.title} - ${siteConfig.tagline}`} description={siteConfig.tagline}>
      
      <header className={classnames('hero', 'hero--full-height', styles.indexHeroBanner)}>
        <HeroContent/>
      </header>
      <main>
        {features && features.length && <Features features={features} />}
      </main>
    </Layout>
  );
}


export default Home;

