import { createStackNavigator ,createBottomTabNavigator} from 'react-navigation-stack'
import Home from './..//view/home'
import MoreNovel from './..//view/moreNovel'
import DetailNovel from './..//view/detailNovel'
import ListChap from './..//view/listChapInVolume'
import ChapNovel from './..//view/chapNovel'
import ReadChap from './..//view/readChap'

const AppNavigator = createStackNavigator({
	Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  MoreNovel: {
    screen: MoreNovel,
    navigationOptions: {
      header: null,
    },
  },
  DetailNovel:{
    screen: DetailNovel,
    navigationOptions: {
      header: null,
    },
  },
  ListChap:{
    screen: ListChap,
    navigationOptions: {
      header: null,
    },
  },
  ChapNovel:{
    screen: ChapNovel,
    navigationOptions: {
      header: null,
    },
  },
  ReadChap:{
    screen: ReadChap,
    navigationOptions: {
      header: null,
    },
  },
});

export default AppNavigator;