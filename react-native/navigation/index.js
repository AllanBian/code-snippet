import { createAppContainer, createStackNavigator, createSwitchNavigator } from "react-navigation";
import AuthNavigator from './auth';
import LoginNavigator from './login';
import HomeNavigator from './home';

const AppNavigator = createSwitchNavigator(
    {
        Auth: { screen: AuthNavigator },
        Login: { screen: LoginNavigator },
        Home: { screen: HomeNavigator },
    },
    {
        initialRouteName: 'Auth'
    }
)

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;