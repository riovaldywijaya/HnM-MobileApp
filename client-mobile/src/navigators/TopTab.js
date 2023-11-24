import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/Home';
import { Image, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import NotFound from '../screens/NotFound';
import { AntDesign, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MainStack from './MainStack';

const Tab = createMaterialTopTabNavigator();

export default function TopTab() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { paddingTop: 5 + insets.top, paddingBottom: 20 + insets.bottom },
        headerTitleAlign: 'center',
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainStack}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, size, focused }) => (
            <>
              <View>
                <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/640px-H%26M-Logo.svg.png' }} fadeDuration={0} style={{ width: 55, height: 35, tintColor: focused ? '#E50010' : 'black' }} />
              </View>
            </>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={NotFound}
        options={{
          tabBarLabel: () => null,
          headerShown: false,
          tabBarIcon: ({ focused }) => <AntDesign name="search1" size={24} color={focused ? '#E50010' : 'black'} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={NotFound}
        options={{
          tabBarLabel: () => null,
          headerShown: false,
          tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="account-outline" size={24} color={focused ? '#E50010' : 'black'} />,
        }}
      />
      <Tab.Screen
        name="Language"
        component={NotFound}
        options={{
          tabBarLabel: ({ focused, color }) => <Text style={{ color: focused ? '#E50010' : 'black' }}>English</Text>,
          headerShown: false,
          tabBarActiveTintColor: '#E50010',
          tabBarInactiveTintColor: 'black',
        }}
      />

      <Tab.Screen
        name="Wishlist"
        component={NotFound}
        options={{
          tabBarLabel: () => null,
          headerShown: false,
          tabBarIcon: ({ focused }) => <AntDesign name="hearto" size={24} color={focused ? '#E50010' : 'black'} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={NotFound}
        options={{
          tabBarLabel: () => null,
          headerShown: false,
          tabBarIcon: ({ focused }) => <SimpleLineIcons name="handbag" size={24} style={{ marginBottom: -1 }} color={focused ? '#E50010' : 'black'} />,
        }}
      />
    </Tab.Navigator>
  );
}
