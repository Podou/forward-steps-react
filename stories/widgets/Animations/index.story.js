import * as React from 'react'

import SimpleExample from './demo/App'

const Example = () => {
  return (
    <div><SimpleExample /></div>
  )
}

export default (story) => {
  story.add('A10Chart', Example)
}
