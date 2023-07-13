const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "fr"],
    defaultLocale: "en-US",
    localeDetection: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        // will match exactly /basic-redirect
        source: "/basic-redirect",
        destination: "/redirects",
        permanent: false,
      },
      {
        // will match /wildcard-redirect/a/b/c/
        source: "/wildcard-redirect/:slug*",
        destination: "/redirects",
        permanent: false,
      },
      {
        // will match /regex-redirect/123 but not /regex-redirect/abc
        source: "/regex-redirect/:slug(\\d{1,})",
        destination: "/redirects",
        permanent: false,
      },
      {
        // will match /query-redirect?q=hello
        source: "/query-redirect",
        destination: "/redirects",
        permanent: false,
        has: [
          {
            type: "query",
            key: "q",
            value: "hello",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/rewrite",
        destination: "/",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/custom-headers",
        headers: [
          {
            key: "x-custom-header",
            value: "my custom header value",
          },
        ],
      },
    ];
  },
};


module.exports = withMDX(nextConfig);