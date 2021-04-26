/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'TBT Gateway Design Documentation',
  tagline: 'Dinosaurs are cool',
  url: 'https://design.tampabay.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'TBT Dev', // Usually your GitHub org/user name.
  projectName: 'engage-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'TBT Gateway Design Documentation',
      logo: {
        alt: 'TBT Gateway Design Documentation Logo',
        src: 'img/docusaurus.png',
      },
      items: [
       
        {
          href: 'https://bitbucket.com/',
          label: 'Repo',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Tampa Bay Times`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Change this to repo if we want to have Edit link on pages.
          // editUrl:
          //   'https://bitbucket.com/',
        },
        
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
