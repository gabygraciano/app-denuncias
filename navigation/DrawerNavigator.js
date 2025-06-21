import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabsNavigator from './BottomTabsNavigator';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#0D0D0D',
        },
        drawerLabelStyle: {
          color: '#fff',
        },
      }}
    >
      <Drawer.Screen name="App" component={BottomTabsNavigator} />
    </Drawer.Navigator>
  );
}
