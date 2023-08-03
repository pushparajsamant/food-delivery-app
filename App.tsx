import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Location from "./screens/Location/Location";
import {Box, ThemeProvider} from "./components/ThemeProvider";
import LocationScreen from "./screens/Location/Location";
import {NavigationContainer} from "@react-navigation/native";
import MainNavigation from "./navigation/MainNavigation";
import {Provider} from "react-redux";
import {store} from "./redux";

export default function App() {
  return (
      <Provider store={store}>
          <ThemeProvider>
              <NavigationContainer>
                  <MainNavigation/>
              </NavigationContainer>
          </ThemeProvider>
      </Provider>
  );
}
