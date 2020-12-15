module.exports = {
  title: 'acert',
  tagline: 'IAM of things',
  url: 'https://doc.acert.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/miniLogo.ico',
  organizationName: 'Acert', // Usually your GitHub org/user name.
  projectName: 'acert doc', // Usually your repo name.
  themeConfig: {
    
    navbar: {
      hideOnScroll: false,
      logo: {
        alt: 'My Site Logo',
        src: 'img/SodaLogo300-120.png',
      },
      items: [
        {to: 'docs/', label: 'Docs', position: 'left'},
        {to: 'roadmap/', label: 'Roadmap', position: 'left'},
        {to: 'blog/', label: 'Announcements', position: 'left'},
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
        {
          href: 'https://github.com/acertio',
          label: 'GitHub',
          position: 'right',
        },
        {href: '/community/', label: "Community", position: 'right'},
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'About',
          items: [
            {
              label: 'What is acert?',
              to: 'docs/about/',
            },
            {
              label: 'Manifesto',
              to: 'manifesto/',
            },
            {
              label: 'Roadmap',
              to: 'roadmap/',
            },
            {
              label: 'Press',
              to: 'press/',
            },
          ],
        },
        {
          title: 'Docs',
          items: [
            {
              label: 'Installation',
              to: 'docs/installation/',
            },
            {
              label: 'Examples',
              to: 'docs/examples/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Opensource projects',
              to: 'docs/about/projects',
            },
            {
              label: 'Github',
              to: 'https://github.com/acertio/acert-open',
            },
            {
              label: 'Announcements',
              to: 'blog/',
            },
            {
              label: 'Twitter',
              to: 'https://twitter.com/acertHQ',
            }
          ],
        },
      ],
      logo: {
        alt: 'acert.io',
        src: 'static/img/SodaLogo300-120.png',
        href: 'https://acert.io/',
      },
      copyright: `Copyright © ${new Date().getFullYear()} acert.io`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
