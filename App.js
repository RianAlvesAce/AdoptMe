import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Animais from './screens/animais';
import Favoritos from './screens/favoritos';
import Formulario from './screens/formulario';
import Galeria from './screens/galeria';
import PetProfile from './screens/pet_profile';
import ProfileScreen from './screens/ProfileScreen';
import ONGsRecife from './screens/geolocalizacao';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Animais} options={{ headerShown: false }}/>
        <Stack.Screen name="Form" component={Formulario} options={{ headerShown: false }}/>
        <Stack.Screen name="Gallery" component={Galeria} options={{ headerShown: false }}/>
        <Stack.Screen name="Favorites" component={Favoritos} options={{ headerShown: false }}/>
        <Stack.Screen name="PetProfile" component={PetProfile} options={{ headerShown: false }}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Localizacao" component={ONGsRecife} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>    
  );
}