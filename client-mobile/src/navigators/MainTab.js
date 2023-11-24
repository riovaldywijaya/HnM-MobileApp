import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import { Image } from 'react-native';
import { MaterialCommunityIcons, AntDesign, FontAwesome5, Entypo } from '@expo/vector-icons';
import MainStack from './MainStack';
import NotFound from '../screens/NotFound';
import TopTab from './TopTab';

const Tab = createBottomTabNavigator();

export default function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 70 },
      }}
    >
      <Tab.Screen
        name="HomePage"
        component={TopTab}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, size, focused }) => (
            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/640px-H%26M-Logo.svg.png' }} fadeDuration={0} style={{ width: 55, height: 35, tintColor: focused ? '#E50010' : 'black' }} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Account"
        component={NotFound}
        options={{
          tabBarLabel: () => null,
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => <MaterialCommunityIcons name="account-circle" size={35} color={focused ? '#E50010' : 'black'} />,
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={NotFound}
        options={{
          tabBarLabel: () => null,
          headerShown: false,
          tabBarIcon: ({ focused }) => <AntDesign name="heart" size={24} color={focused ? '#E50010' : 'black'} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={NotFound}
        options={{
          tabBarLabel: () => null,
          headerShown: false,
          tabBarIcon: ({ focused }) => <FontAwesome5 name="shopping-bag" size={24} color={focused ? '#E50010' : 'black'} />,
        }}
      />
      <Tab.Screen
        name="ThreeDots"
        component={NotFound}
        options={{
          tabBarLabel: () => null,
          headerShown: false,
          tabBarIcon: ({ focused }) => <Entypo name="dots-three-horizontal" size={24} color={focused ? '#E50010' : 'black'} />,
        }}
      />
    </Tab.Navigator>
  );
}
