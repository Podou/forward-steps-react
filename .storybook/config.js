import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

setOptions({
  name: 'Forward Steps - React',
  url: 'TBD',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: false,
});

configure(loadStories, module);
