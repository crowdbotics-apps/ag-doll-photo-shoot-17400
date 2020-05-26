import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile52341Navigator from '../features/UserProfile52341/navigator';
import Tutorial52340Navigator from '../features/Tutorial52340/navigator';
import NotificationList52312Navigator from '../features/NotificationList52312/navigator';
import Settings52311Navigator from '../features/Settings52311/navigator';
import Settings52303Navigator from '../features/Settings52303/navigator';
import UserProfile52301Navigator from '../features/UserProfile52301/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile52341: { screen: UserProfile52341Navigator },
Tutorial52340: { screen: Tutorial52340Navigator },
NotificationList52312: { screen: NotificationList52312Navigator },
Settings52311: { screen: Settings52311Navigator },
Settings52303: { screen: Settings52303Navigator },
UserProfile52301: { screen: UserProfile52301Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
