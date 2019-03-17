import Taro, {Component} from '@tarojs/taro'
import {
  View,
  Text,
  Input,
} from '@tarojs/components'
import './index.scss'

const toDoList = ['赵', '钱', '孙', '李', '周', '吴', '郑', '王']

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toDoList,
      inputVal: ''
    }
  }

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  inputHandler = (e) => {
    console.log("=== inputHandler e -=-> ", e)
    this.inputVal = e.target.value
  }

  addItem = () => {
    const {toDoList} = this.state
    const inputVal = this.inputVal

    console.log("==== toDoList -=--> ", toDoList)

    if (!inputVal) return

    toDoList.push(inputVal)
    this.setState({
      toDoList,
      inputVal: ''
    })
  }

  delItem = (index) => {
    const {toDoList} = this.state
    toDoList.splice(index, 1)
    this.setState({
      toDoList
    })
  }

  render() {
    const {toDoList, inputVal} = this.state
    console.log("=== this.state -=--> ", this.state)
    return (
      <View className='index'>
        <Input
          className='input'
          type='text'
          value={inputVal}
          onInput={this.inputHandler.bind(this)}
        />
        <Text className='add' onClick={this.addItem.bind(this)}>添加</Text>
        {
          toDoList.map((item, index) => {
            return (
              <View key={index}>
                <Text>{item}</Text>
                <Text className='del' onClick={this.delItem.bind(this, index)}>删除</Text>
              </View>
            )
          })
        }
      </View>
    )
  }
}

export default Index
