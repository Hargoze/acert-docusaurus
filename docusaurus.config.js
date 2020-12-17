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
      ],
    },
    footer: {
      style: 'light',
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
