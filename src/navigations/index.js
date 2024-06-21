import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationServices from './NavigationServices';
import {SCREENS} from './screenConstant';
import screenNames from './screenNames';

export default function AppStack() {
  const Stack = createNativeStackNavigator();

  const ScreenComponents = [
    {id: 1, name: SCREENS.Splash, comp: screenNames.Splash},
    {id: 2, name: SCREENS.Register, comp: screenNames.Register},
  ];
  return (
    <NavigationContainer ref={NavigationServices.navigationRef}>
      <Stack.Navigator
        initialRouteName={SCREENS.Splash}
        screenOptions={{headerShown: false}}>
        {ScreenComponents.map(screen => (
          <Stack.Screen
            key={screen.id}
            name={screen.name}
            component={screen.comp}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
