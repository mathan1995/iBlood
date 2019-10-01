import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Main from "./screens/main";
import Home from "./screens/home";
import IDoc from "./screens/iDoc";
const MainNavigator = createStackNavigator(
    {
        Home: Home,
        Main: Main,
        IDoc: IDoc,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            title: '',
        }
    }
)


const App = createAppContainer(MainNavigator);
export default App;