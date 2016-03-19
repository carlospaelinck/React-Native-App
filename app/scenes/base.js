'use strict'

import React, {
  Navigator,
  Component,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'

import { Provider } from 'react-redux'

import FirstScene from './first.js'
import SecondScene from './second.js'

import configureStore from '../store/store'

export default class BaseSecene extends Component {
  constructor() {
    super(...arguments)
    this.store = configureStore()
  }

  render() {
    return <Provider store={this.store}>
      <Navigator
        initialRoute={{ name: 'First Scene', index: 0 }}
        renderScene={this.navigatorRenderScene}
        navigationBar={
          <Navigator.NavigationBar
            style={styles.navigationBar}
            routeMapper={NavigationBarRouteMapper} />
        } />
    </Provider>
  }

  navigatorRenderScene(route, navigator) {
    switch (route.name) {
    case 'First Scene':
      return <FirstScene navigator={navigator} name={route.name} />

    case 'Second Scene':
      return <SecondScene navigator={navigator} name={route.name} />
    }
  }
}

const NavigationBarRouteMapper = {
  LeftButton: (route, navigator, index, navState) => {
    if (index === 0) {
      return null
    } else {
      return <TouchableHighlight
        onPress={navigator.pop}>
        <Text>Back</Text>
      </TouchableHighlight>
    }
  },

  RightButton: (route, navigator, index, navState) => {
    return null
  },

  Title: (route, navigator, index, navState) => {
    return <Text>{ route.name }</Text>
  }
}

const styles = StyleSheet.create({
  navigationBar: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  }
})
