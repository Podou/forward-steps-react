import React from 'react';

import { storiesOf } from '@storybook/react';
import ReactMarkdown from 'react-markdown'

import ConfigMd from './markdown/Config.md'

const webpackStories = storiesOf('Webpack', module)

const ConfigExample = () => {
  return (
    <div className="container">
      <ReactMarkdown escapeHtml={false} source={ConfigMd} />
    </div>
  )
}

const addConfigStory = (story) => {
  story.add('Config', ConfigExample)
}

addConfigStory(webpackStories)
