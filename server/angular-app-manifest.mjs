
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Angular_Harry_Potter_API/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Angular_Harry_Potter_API"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 513, hash: '3122d2992d06a16f3f59aa9cc651d575be3a4128d29b88a8b975b354d5ccdd63', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1026, hash: 'c3639279b3eb8b58c36912785402b576fb15fd0c1745f4a487aeecde24040e45', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 218505, hash: '7d53057aab4b9e04fc21bc7062ec2155997dede6861cd068f1861c5b389371b9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
