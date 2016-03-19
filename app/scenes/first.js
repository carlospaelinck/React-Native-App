'use strict'

import React, {
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  RecyclerViewBackedScrollView,
  ListView,
  View
} from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as PostsActions from '../actions/posts'
import SecondScene from './second.js'

export class FirstScene extends Component {
  constructor() {
    super(...arguments)
    this.pushToSecondScene = this.pushToSecondScene.bind(this)
    this.renderRow = this.renderRow.bind(this)
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (prev, next) => prev !== next
    })

    this.state = {
      dataSource: this.dataSource.cloneWithRows([])
    }
  }

  componentDidMount() {
    this.props.getAllPosts()
  }

  componentWillReceiveProps(nextProps) {
    const { posts } = nextProps.postsReducer

    this.setState({
      dataSource: this.dataSource.cloneWithRows(posts)
    })
  }

  pushToSecondScene() {
    this.props.navigator.push({
      name: 'Second Scene',
      component: SecondScene
    })
  }

  render() {
    return <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderRow}
      renderScrollComponent={props => <RecyclerViewBackedScrollView
        {...props} /> }
      renderSeparator={(sectionID, rowID) => <View
        key={`${sectionID}-${rowID}`}
        style={styles.separator} /> }
    />
  }

  renderRow(rowData, sectionID, rowID) {
    return <View>
      <Text>
        { rowData.userName }
      </Text>
      <Text>
        { rowData.content }
      </Text>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc'
  }
})

const mapStateToProps = state => {
  const { postsReducer } = state
  return { postsReducer }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  PostsActions,
  dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(FirstScene)
