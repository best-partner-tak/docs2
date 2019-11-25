const siteConfig = {
  title: 'CosmWasm Documentation',
  tagline: 'Get started with mutli-chain smart contracts!',

  url: "https://docs.cosmwasm.com",
  baseUrl: "/",

  cname: 'docs.cosmwasm.com',
  projectName: 'docs',
  organizationName: 'cosmwasm',

  // algolia: {
  //   apiKey: 'xxx',
  //   indexName: 'xxx',
  // },

  headerLinks: [
    { href: "https://github.com/confio/cosmwasm", label: "GitHub" },
    // { search: true },
  ],

  disableHeaderTitle: true,

  headerIcon: 'img/favicon.ico',
  footerIcon: false,
  favicon: 'img/favicon.ico',

  colors: {
    primaryColor: '#61512b',
    secondaryColor: '#43381e',
  },

  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },

  copyright: `Copyright © ${new Date().getFullYear()} Confio UO`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'atom-one-light',
  },

  scripts: ['https://buttons.github.io/buttons.js'],

  onPageNav: 'separate',

  docsSideNavCollapsible: true,

  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // Show documentation's last contributor's name.
  enableUpdateBy: true,
  enableUpdateTime: true,
};

module.exports = siteConfig;
