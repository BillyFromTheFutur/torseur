import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import FeedScreen from "../screens/FeedScreen";
import HomeScreen from "../screens/HomeScreen";


const Tab = createBottomTabNavigator(); 

const MainNavigator = ()=>{
  return <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route,navigation})=>({
        tabBarStyle:{
          borderTopWidth:0
        }
      })
}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
    </Tab.Navigator>
  </NavigationContainer>
}

export default MainNavigator;
