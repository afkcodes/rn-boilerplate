/**
 * @format
 */

import { AppRegistry } from 'react-native'
import '@formatjs/intl-pluralrules/polyfill'
import App from './src/App'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => App)
