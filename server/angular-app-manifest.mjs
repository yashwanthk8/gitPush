
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/gitPush/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/gitPush"
  },
  {
    "renderMode": 2,
    "route": "/gitPush/pushTest"
  },
  {
    "renderMode": 2,
    "route": "/gitPush/home"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 440, hash: '8734f5a116dfa27185c712222ca83f986af078470353f37915bac86671f1cbb0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 953, hash: '06a4ecb45010d140a6d5331fbc2b995a88cb288c3ce4ff9a56c924f9252d4b09', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 1746, hash: '27029328a0f35e8c2ae0d288cfa2d4882d79cb3f9f01e1d1a985513b71494d5d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 1565, hash: '89d59909eb2721cd948ddd4fc548152a80726c8c6e33c46677a8809e2236eb64', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'pushTest/index.html': {size: 1625, hash: '68eeda7731ba6b7aae4692121087a255786f484d2c3ac4cba7776f62e7a4f040', text: () => import('./assets-chunks/pushTest_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
