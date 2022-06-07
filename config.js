const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://devkurultay.github.io/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/brand.svg',
    logoLink: 'https://devkurultay.github.io/',
    title:
      "<a href='https://devkurultay.github.io/'><img class='img-responsive' src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/learn-logo.svg' alt='Learn logo' /></a>",
    githubUrl: 'https://github.com/devkurultay/devkurultay.github.io',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://t.me/devkurultay" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Telegram'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Devkurultay', link: 'https://github.com/devkurultay' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://github.com/devkurultay/devkurultay.github.io'>github </a><div class='greenCircle'></div><a href='https://t.me/devkurultay'>telegram</a>",
  },
  siteMetadata: {
    title: 'Devkurultay',
    description: 'Documentation built with mdx. Powering DevKurultay ',
    ogImage: null,
    docsLocation: 'https://github.com/devkurultay/devkurultay.github.io/tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
