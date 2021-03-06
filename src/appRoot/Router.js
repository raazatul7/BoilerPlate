import { createSwitchNavigator } from 'react-navigation';
import LoginRoot from './AuthRoot';
import MainRoot from './MainRoot';
import PrintLog from '../common/PrintLog';

export const createRootNavigator = (isLogin) => {

    PrintLog("isLogin >> ", isLogin);
    return createSwitchNavigator(
        {
            LoginRoot: { screen: LoginRoot() },
            HomeRoot: { screen: MainRoot(isLogin) }
        },
        {
            initialRouteName: (!isLogin) ? "LoginRoot" : "HomeRoot"
        }
    )
}