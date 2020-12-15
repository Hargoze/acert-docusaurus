import React, { useState, useEffect } from 'react';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import classnames from 'classnames';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

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

      <p className="hero--subsubtitle">
        <h3>Open Source IAM <strong><em>(Identity and Access Management)</em></strong> for people and their things.</h3>
      </p>

    </div>
  );
}

// FEATURES
const features = [
  {
    title: 'Scalable',
    icon: 'zap',
    description: (
      <>
        acert is designed to be used in the most demanding production environments and for <Link to="/docs/about/usecases">critical missions</Link>.
      </>
    ),
  },
  {
    title: 'Minimal',
    icon: 'check-circle',
    description: (
      <>
        acert is framework independant and includes minimal scope and dependancies, with clear <Link to="/docs/about/secpolicy">security guarantees</Link>.  
      </>
    ),
  },
  {
    title: 'Open',
    icon: 'unlock',
    description: (
      <>
        acert fosters a fair and <Link to="/docs/about/opensource">open ecosystem</Link>. Lock-in free, transparent and future proof trust protocols and standards.
      </>
    ),
  },
  {
    title: 'Documented',
    icon: 'move',
    description: (
      <>
        acert exists for builders. We put as much love into our <Link to="/docs/about/guides">guides</Link> and <Link to="/docs/about/examples">examples</Link> as with the rest of the product.
      </>
    ),
  },
  {
    title: 'Current',
    icon: 'shield',
    description: (
      <>
      acert favors improved levels of understanding and actionnability against <Link to="/docs/about/guides">IoT cyber threats</Link>, through science and technology. 
      </>
    ),
    
  },
  {
    title: 'Flexible',
    icon: 'navigation',
    description: (
      <>
      acert supports <Link to="/docs/about/innovation">business and social innovation</Link>. Keeping things simple in general but allowing complex requirements.
      </>
    ),
  }
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
      <div className={styles.featureIcon}>
        <i className={classnames('feather', `icon-${icon}`)}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
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

