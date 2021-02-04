import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import SettingScreen from '../screens/SettingScreen';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import MyDonationScreen from '../screens/MyDonationScreen'
import NotificationScreen from '../screens/NotificationScreen'
import { Icon } from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator ,
    navigationOptions:{
      drawerIcon:<Icon
        name = 'home'
        type  = 'fontawesome5'

      />

    }
    },
    MyDonations:{
      screen:MyDonationScreen,
      navigationOptions:{
        drawerIcon:<Icon
          name = 'gift'
          type = 'font-awesome'
        />,
        drawerLabel:'My Donation'
      }
    },
    Notifications:{
      screen:NotificationScreen,
      navigationOptions:{
        drawerIcon:<Icon
          name = 'bell'
          type = 'font-awesome'
        />
      }
    },

    
Settings:{
    screen : SettingScreen,
    navigationOptions:{
      drawerIcon:<Icon
      name =  'settings'
      type = 'font-awesome'
      />
    }
    }

    
  },
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })