// import { StatusBar } from 'expo-status-bar';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import GarageReducer from './store/reducers/GarageReducer';

const rootReducer = combineReducers({
  garage: GarageReducer
})

const store = createStore(rootReducer)

import LoginScreen from './src/screens/Login.Screen';
import AdminScreen from './src/screens/AdminScreen';
import EmployeeScreen from './src/screens/EmployeeScreen';
import AddJob from './src/components/adminComps/AddJob';
import AssignJob from './src/components/adminComps/AssignJob';
import Employees from './src/components/adminComps/Employees';
import ChooseEmployee from './src/screens/ChooseEmployee';
import Reports from './src/screens/Reports';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <MainContainer>
    //   <Text>Open up App.js to start working on your apps</Text>
    //   <LoginScreen />
    //   <StatusBar style="auto" />
    // </MainContainer>

    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={"rgb(36,49,80)"} />
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: "LOGIN" }} />
          <Stack.Screen name="Admin" component={AdminScreen} />
          <Stack.Screen name="Employee" component={EmployeeScreen} />
          <Stack.Screen name="AddJob" component={AddJob} />
          <Stack.Screen name="AssignJob" component={AssignJob} />
          <Stack.Screen name="Employees" component={Employees} />
          <Stack.Screen name="ChooseEmployee" component={ChooseEmployee} />
          <Stack.Screen name="Reports" component={Reports} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
