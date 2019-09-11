import { createStackNavigator ,createBottomTabNavigator} from 'react-navigation-stack'
import Home from './..//view/home'
import DetailNovel from './..//view/detailNovel'

const AppNavigator = createStackNavigator({
	Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  DetailNovel: {
    screen: DetailNovel,
    navigationOptions: {
      header: null,
    },
  },
});

export default AppNavigator;