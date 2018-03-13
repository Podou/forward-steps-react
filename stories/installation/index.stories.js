import React from 'react';
import { storiesOf } from '@storybook/react';
import ReactMarkdown from 'react-markdown'

import CreateMd from './markdown/Create.md'
import ImportMd from './markdown/babelImport.md'

const installationStories = storiesOf('Installation', module)

const CreateExample = () => {
  return (
    <div className="container">
      <ReactMarkdown escapeHtml={false} source={CreateMd} />
    </div>
  )
}

const addCreateProjectStory = (story) => {
  story.add('Create project', CreateExample)
}

const BabelImportExample = () => {
  return (
    <div className="container">
      <ReactMarkdown escapeHtml={false} source={ImportMd} />
    </div>
  )
}

const addUseImportStory = (story) => {
  story.add('Use babel-plugin-import', BabelImportExample)
}

addCreateProjectStory(installationStories)
addUseImportStory(installationStories)
