import { createStackNavigator } from 'react-navigation-stack';

import Register from '../container/screen/auth/Registration';
import Login from '../container/screen/auth/Login';
import ForgotPassword from '../container/screen/auth/ForgotPassword';


export default AuthRoot = () => {
    return createStackNavigator(    
        {
            Register: { screen: Register },
            Login: { screen: Login },
            ForgotPassword: { screen: ForgotPassword },
        },
        {
            initialRouteName: "Login",
            headerMode: 'none',
            defaultNavigationOptions: {
                gesturesEnabled: false,
            },
        }
    )
}