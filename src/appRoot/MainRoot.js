import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import Main from "../container/screen/main/Main";
import Dashboard from '../container/screen/main/Dashboard';
import Screen1 from '../container/screen/main/Screen1';
import Screen2 from '../container/screen/main/Screen2';
import Screen3 from '../container/screen/main/Screen3';


const MainStackNavigator = createStackNavigator(
    {
        Main: { screen: Main },
    },
    {
        initialRouteName: "Main",
        headerMode: "none",
        defaultNavigationOptions: {
            header: null,
            gesturesEnabled: false,
        }
    }
);

const DrawerNavigator = createDrawerNavigator(
    {
        Dashboard: { screen: Dashboard },
        Screen1: { screen: Screen1 },
        Screen2: { screen: Screen2 },
        Screen3: { screen: Screen3 },
    },
    {
        drawerPosition: "left",
        headerMode: "none",
        drawerLockMode: "locked-closed",
    }
);

export default (MainRoot = () => {
    return createStackNavigator(
        {
            DrawerNavigator: DrawerNavigator,
            Main: MainStackNavigator,
        },
        {
            initialRouteName: "DrawerNavigator",
            headerMode: "none",
            defaultNavigationOptions: {
                header: null,
                gesturesEnabled: false,
            }
        }
    );
});