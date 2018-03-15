import React from 'react'

import { storiesOf } from '@storybook/react'

import UseStorybookMd from './markdown/UseStorybook.md'
import UseGitPagesMd from './markdown/UseGitPages.md'

const publishStories = storiesOf('Publish', module)

const UseStorybookExample = () => {
  return (
    <div className="container">
      <div dangerouslySetInnerHTML={{ __html: UseStorybookMd }}/>
    </div>
  )
}

const UseGitPagesExample = () => {
  return (
    <div className="container">
      <div dangerouslySetInnerHTML={{ __html: UseGitPagesMd }}/>
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
