import React from 'react';

import { storiesOf } from '@storybook/react';

import addAnimationsStory from './Animations/index.story'
import addChartStory from './Charts/index.story'

const widgetStories = storiesOf('Widgets', module)


addAnimationsStory(widgetStories)
addChartStory(widgetStories)
