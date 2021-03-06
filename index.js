/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';

import login from './view/login/login';
import chapNovel from './view/chapNovel';

import mainNavigator from './routers/navAdaptor';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => mainNavigator);
