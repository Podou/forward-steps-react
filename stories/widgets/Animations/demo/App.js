import * as React from 'react'
import { Button, Card, Select } from '../../../../src/components'

import Demo from './demo';

const Option = Select.Option

const divStyle = {
  width: '400px',
  height: '300px',
  backgroundColor: '#f6f8fa',
  border: 'solid 1px #ccc',
  position: 'absolute',
  overflow: 'hidden',
}

const animationNames = [
  'bouceOut',
  'bounce',
  'bounceIn',
  'bounceInDown',
  'bounceInLeft',
  'bounceInRight',
  'bounceInUp',
  'bounceOutDown',
  'bounceOutLeft',
  'bounceOutRight',
  'bounceOutUp',
  'fadeIn',
  'fadeInDown',
  'fadeInDownBig',
  'fadeInLeft',
  'fadeInLeftBig',
  'fadeInRight',
  'fadeInRightBig',
  'fadeInUp',
  'fadeInUpBig',
  'fadeOut',
  'fadeOutDown',
  'fadeOutDownBig',
  'fadeOutLeft',
  'fadeOutLeftBig',
  'fadeOutRight',
  'fadeOutRightBig',
  'fadeOutUp',
  'fadeOutUpBig',
  'flash',
  'flip',
  'flipInX',
  'flipInY',
  'flipOutX',
  'flipOutY',
  'headShake',
  'hinge',
  'jello',
  'lightSpeedIn',
  'lightSpeedOut',
  'pulse',
  'rollIn',
  'rollOut',
  'rotateIn',
  'rotateInDownLeft',
  'rotateInDownRight',
  'rotateInUpLeft',
  'rotateInUpRight',
  'rotateOut',
  'rotateOutDownLeft',
  'rotateOutDownRight',
  'rotateOutUpLeft',
  'rotateOutUpRight',
  'rubberBand',
  'shake',
  'slideInDown',
  'slideInLeft',
  'slideInRight',
  'slideInUp',
  'slideOutDown',
  'slideOutLeft',
  'slideOutRight',
  'slideOutUp',
  'swing',
  'tada',
  'wobble',
  'zoomIn',
  'zoomInDown',
  'zoomInLeft',
  'zoomInRight',
  'zoomInUp',
  'zoomOut',
  'zoomOutDown',
  'zoomOutLeft',
  'zoomOutRight',
  'zoomOutUp',
]

class App extends React.Component {

  constructor(props: any) {
    super(props)
    this.state = {
      show: false,
      selectedName: 'fadeInUp'
    }
  }

  render() {
    // const { animation } = this.state;
    const showPopover = () => {
      this.setState({ show: !this.state.show })
    }
    const selectAnimation = (value) => {
      console.log(value)
      this.setState({ selectedName: value })
    }

    const hidePop = () => {
      this.setState({ show: !this.state.show })
    }
    return (
      <Card style={divStyle}>
        <Select defaultValue={this.state.selectedName} onChange={selectAnimation}>
          {animationNames.map((name, index) => {
            return <Option key={index} value={name}>{name}</Option>
          })}
        </Select>
        <Button onClick={showPopover}>Show</Button>
        {this.state.show ? <Demo name={this.state.selectedName} hidePop={hidePop} /> : null}
      </Card>
    )
  }
}

export default App
