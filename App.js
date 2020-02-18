import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './src/screens/Home';
import Contacts from './src/screens/Contacts';


const navigator = createStackNavigator(
  {
    Home,
    Contacts
  },
  {
    initialRouteName: 'Contacts',
    defaultNavigationOptions: {
      title: 'Contacts App'
    }
  }
);

export default createAppContainer(navigator);
