import Taro, {Component} from '@tarojs/taro';
import {View} from '@tarojs/components';
import {connect} from '@tarojs/redux';
import './index.scss';

@connect(({book}) => ({
  ...book,
}))
class Book extends Component {
  config = {
    navigationBarTitleText: 'book',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View className="book-page">
        book
      </View>
    )
  }
}

export default Book
