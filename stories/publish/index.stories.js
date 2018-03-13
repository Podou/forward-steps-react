import React from 'react'

import { storiesOf } from '@storybook/react'
import ReactMarkdown from 'react-markdown'

import UseStorybookMd from './markdown/UseStorybook.md'
import UseGitPagesMd from './markdown/UseGitPages.md'

const publishStories = storiesOf('Publish', module)

const UseStorybookExample = () => {
  return (
    <div className="container">
      <ReactMarkdown escapeHtml={false} source={UseStorybookMd} />
    </div>
  )
}

const UseGitPagesExample = () => {
  return (
    <div className="container">
      <ReactMarkdown escapeHtml={false} source={UseGitPagesMd} />
    </div>
  )
}

const addUseStroybookStory = (story) => {
  story.add('Use Stroybook', UseStorybookExample)
}

const addUseGitPagesStory = (story) => {
  story.add('Use Git Pages', UseGitPagesExample)
}

addUseStroybookStory(publishStories)
addUseGitPagesStory(publishStories)
