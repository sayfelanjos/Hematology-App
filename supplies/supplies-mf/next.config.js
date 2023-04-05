const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const deps = require("./package.json").dependencies;
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  eslint: {
    dirs: ["app", "components"], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },

  experimental: {
    appDir: true,
  },
  webpack(config, options) {
    const { isServer } = options;
    if (!isServer) {
      Object.assign(config.experiments, { topLevelAwait: true });
      config.plugins.push(
        new NextFederationPlugin({
          name: "supplies",
          remotes: {
            shell: `shell@http://localhost:3001/_next/static/remoteEntry.js`,
            // shop: "shop@http://localhost:3002/_next/static/chunks/remoteEntry.js",
          },
          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./suppliesModule": "./src/app/page.tsx",
            // "./checkout": "./pages/checkout",
            // "./pages-map": "./pages-map.js",
          },
          // shared: {
          //   react: {
          //     singleton: true,
          //     requiredVersion: deps["react"],
          //   },
          //   "react-dom": {
          //     singleton: true,
          //     requiredVersion: deps["react-dom"],
          //   },
          // },
        })
      );
    }
    return config;
  },
};

module.exports = nextConfig;
