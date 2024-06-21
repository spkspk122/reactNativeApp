/**
 * @format
 */

import {AppRegistry,Text} from 'react-native';
import {name as appName} from './app.json';
import App from './src';
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

AppRegistry.registerComponent(appName, () => App);
