import { createSwitchNavigator, createAppContainer } from 'react-navigation';
// import AuthNavigator from 'libraries/components/AuthTemplate/Airbnb/AuthNavigator';
import Link from './navLink';

const mainStack = createSwitchNavigator({
  // Auth: AuthNavigator,
  Main: Link,
});
const navLink = createAppContainer(mainStack);
export default navLink;