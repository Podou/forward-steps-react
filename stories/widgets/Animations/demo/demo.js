import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as ReactAnimations from 'react-animations'
import { Button } from '../../../../src/components'
// import fadeInUp from 'react-animations/lib/fade-in-up'
import { StyleSheet, css } from 'aphrodite'
// const PropTypes = require('prop-types')
// console.log(PropTypes)

const animations = {}
for (const key in ReactAnimations) {
  animations[key] = {
    animationDuration: '1s',
    animationName: ReactAnimations[key],
  }
}

const styles = StyleSheet.create(animations)

class Demo extends Component {

  // Render a bunch of empty spans so that each keyframe
  // will be available in the DOM.
  render() {
    // such as name is fadeInUp
    const { name, hidePop } = this.props
    const popOverStyle = {
      backgroundColor: 'blue',
      border: 'solid 1px #ccc',
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      zIndex:920,
    }
    return (
      <div style={popOverStyle} className={css(styles[name])}>
        <h1>react-animations</h1>
        <a href='https://github.com/Podou/forward-steps-react'>View on Github</a>
        <Button onClick={hidePop}>Hide</Button>
      </div>
    );
  }
};

Demo.propTypes = {
  name: PropTypes.string,
  hidePop: PropTypes.function,
}

export default Demo
