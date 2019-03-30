import Taro, {Component} from '@tarojs/taro';
import {View} from '@tarojs/components';
import {connect} from '@tarojs/redux';
import './index.scss';

@connect(({mine}) => ({
  ...mine,
}))
class Mine extends Component {
  config = {
    navigationBarTitleText: 'mine',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View className="mine-page">
        mine
      </View>
    )
  }
}

export default Mine
