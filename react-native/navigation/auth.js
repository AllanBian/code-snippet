import { createStackNavigator } from "react-navigation";

import Auth from '../screens/pages/auth';

const AuthNavigator = createStackNavigator(
    {
        AuthPage: { screen: Auth },
    },
    {
        initialRouteName: 'AuthPage',
        headerMode: 'none'
    }
)

export default AuthNavigator;