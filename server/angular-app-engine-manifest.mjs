
export default {
  basePath: '/Angular_Harry_Potter_API',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
