import { createStackNavigator } from "react-navigation";

import Login from '../screens/pages/login';

const LoginNavigator = createStackNavigator(
    {
        LoginPage: { screen: Login },
    },
    {
        initialRouteName: 'LoginPage',
        headerMode: 'none'
    }
)

export default LoginNavigator;