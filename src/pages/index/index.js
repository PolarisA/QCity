import Taro, {Component} from '@tarojs/taro'
import {
  View,
  Text,
  Input,
} from '@tarojs/components'
import {connect} from '@tarojs/redux'
import {add, del} from '../../actions/index'
import './index.scss'

const toDoList = ['赵', '钱', '孙', '李', '周', '吴', '郑', '王']

class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props)
    this.state = {
      toDoList,
      newTodo: '',
      inputVal: ''
    }
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

  saveNewTodo(e) {
    let {newTodo} = this.state
    if (!e.detail.value || e.detail.value === newTodo) return

    this.setState({
      newTodo: e.detail.value
    })
  }

  delTodo(id) {
    let {del} = this.props
    del(id)
  }

  addTodo() {
    let {newTodo} = this.state
    let {add} = this.props

    if (!newTodo) return

    add(newTodo)
    this.setState({
      newTodo: ''
    })
  }

  render() {
    console.log("=== this.state -=--> ", this.state)
    let {newTodo} = this.state
    let {todos, add, del} = this.props

    const todosJsx = todos.map(todo => {
      return (
        <View className='todos_item'>
          <Text>{todo.text}</Text>
          <View
            className='del'
            onClick={this.delTodo.bind(this, todo.id)}>
            -
          </View>
        </View>
      )
    })

    return (
      <View className='index todos'>
        <View className='add_wrap'>
          <Input placeholder="填写新的todo" onBlur={this.saveNewTodo.bind(this)} value={newTodo}/>
          <View className='add' onClick={this.addTodo.bind(this)}>+</View>
        </View>
        <View>{todosJsx}</View>
      </View>
    )
  }
}

export default connect(({todos}) => ({
  todos: todos.todos
}), (dispatch) => ({
  add(data) {
    dispatch(add(data))
  },
  del(id) {
    dispatch(del(id))
  }
}))(Index)
