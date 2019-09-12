import { createStackNavigator ,createBottomTabNavigator} from 'react-navigation-stack'
import Home from './..//view/home'
import More from './..//view/moreNovel'

const AppNavigator = createStackNavigator({
	Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  More: {
    screen: More,
    navigationOptions: {
      header: null,
    },
  },
});

export default AppNavigator;