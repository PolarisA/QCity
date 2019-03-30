import '@tarojs/async-await';
import Taro, {Component} from '@tarojs/taro';
import Home from './pages/home';
import dva from './utils/dva';
import models from './models';
import {Provider} from '@tarojs/redux';

import './styles/base.scss';

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});
const store = dvaApp.getStore();

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  config = {
    pages: [
      'pages/home/index',
      'pages/mine/index',
      'pages/book/index',
    ],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'QCity_24H',
      navigationBarTextStyle: 'black',
    },
    tabBar: {
      list: [
        {
          pagePath: 'pages/home/index',
          text: '位置',
          iconPath: './images/tab/home.png',
          selectedIconPath: './images/tab/home-active.png',
        },
        {
          pagePath: 'pages/book/index',
          text: '预约',
          iconPath: './images/tab/cart.png',
          selectedIconPath: './images/tab/cart-active.png',
        },
        {
          pagePath: 'pages/mine/index',
          text: '我的',
          iconPath: './images/tab/user.png',
          selectedIconPath: './images/tab/user-active.png',
        },
      ],
      color: '#333',
      selectedColor: '#333',
      backgroundColor: '#fff',
      borderStyle: 'white',
    },
  }

  componentDidMount() {
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Home/>
      </Provider>
    )
  }
}

Taro.render(<App/>, document.getElementById('app'))
