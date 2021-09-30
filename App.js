import React,{useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './navigation/bottomNav';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import 'react-native-gesture-handler';
import AuthStack from './screens/landingScreen.js'
import { MenuProvider } from 'react-native-popup-menu';


const getFonts = () => Font.loadAsync({
  'Abril': require('./assets/fonts/Abril.ttf'),
  'oswald': require('./assets/fonts/oswald.ttf'),
  'Poppins': require('./assets/fonts/PoppinsBold.ttf'),
})


export default function App() {
  let logged = false
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return (
      <>
        <NavigationContainer>
          <MenuProvider>
          {
           logged ? <AuthStack /> : <BottomNavigation />
          }
          </MenuProvider>
        </NavigationContainer>
      </>
    )
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(error) => console.log(error)}
      />
    )
  }
}




