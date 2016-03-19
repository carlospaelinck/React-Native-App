'use strict'

import React, {
  AppRegistry,
  Component
} from 'react-native'

import BaseScene from './app/scenes/base.js'

class CarlosApp extends Component {
  render() {
    return <BaseScene />
  }
}

AppRegistry.registerComponent('CarlosApp', () => CarlosApp)
