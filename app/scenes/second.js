'use strict'

import React, {
  Animated,
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  Alert,
  View
} from 'react-native'

export default class SecondScene extends Component {
  constructor() {
    super(...arguments)
    this.showAlert = this.showAlert.bind(this)
    this.state = {
      fadeAnimation: new Animated.Value(0)
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnimation,
      { toValue: 1 }
    ).start()
  }

  showAlert() {
    Alert.alert(
      'Title',
      'Message',
      [
        { text: 'OK', onPress: () => {} }
      ]
    )
  }

  render() {
    return <View style={styles.container}>
      <Animated.Text style={{ opacity: this.state.fadeAnimation }}>
        Second
      </Animated.Text>
      <TouchableHighlight
        onPress={this.showAlert}>
        <Text>Show Alert</Text>
      </TouchableHighlight>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})
