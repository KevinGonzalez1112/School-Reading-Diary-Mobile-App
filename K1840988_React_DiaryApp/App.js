import React from 'react';
// Imports used for the navigation between screens
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// Importing the applications Screens
import HomeScreen from './src/screens/HomeScreen';
import AddLogScreen from './src/screens/AddLogScreen';
import ViewPastLogs from './src/screens/ViewPastLogs';
import ViewPastLog from './src/screens/ViewPastLog';
import EditLogScreen from './src/screens/EditLogScreen';
import CameraScreen from './src/screens/CameraScreen';
// Importing Contexts
import { ItemProvider } from './src/contexts/itemContext';

// Create a stack navigator to move between screens
const Stack = createNativeStackNavigator();

// NOTES FOR APPLICATION:
// Camera prompted when trying to create a log does not save to Async Storage
// Tried implementing this but was not able to get it to a stage where it was useful in application context

const App = () => {
return (
  <ItemProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName =  "HomeScreen">
        <Stack.Screen 
          name = "HomeScreen" 
          component = {HomeScreen} 
          options = {{ title: 'Home Screen'}}
        />
        <Stack.Screen 
          name = "ViewPastLogsScreen" 
          component = {ViewPastLogs} 
          options = {{ title: 'Main Menu'}}
        />
        <Stack.Screen 
          name = "ViewPastLogScreen" 
          component = {ViewPastLog} 
          options = {{ title: 'Selected Log'}}
        />
        <Stack.Screen 
          name = "AddNewLog" 
          component = {AddLogScreen} 
          options = {{ title: 'Add New Log'}}
        />
        <Stack.Screen
          name = "EditLog"
          component = {EditLogScreen}
          options = {{ title: 'Edit Log'}}
        />
        <Stack.Screen
          name = "CameraScreen"
          component = {CameraScreen}
          options = {{title: "Take A Picture Of Book"}}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  </ItemProvider>
);}

export default App;