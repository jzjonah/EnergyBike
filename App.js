import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from "react-redux";
import { store } from './store';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import { Entypo, Ionicons, AntDesign } from '@expo/vector-icons';
import Bottom from './components/Bottom';
import userStats from './Screens/userStats';
import { useNavigation } from '@react-navigation/native';


export default function App() {
  const Stack = createStackNavigator();
 
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.contain}>
      <SafeAreaProvider>
      <NavigationContainer> 
        
        <View style={styles.container}>
        <Stack.Navigator>
        <Stack.Screen 
              name = "HomeScreen"
              component={HomeScreen}
              options ={{
                headerShown: false,
              }}
            />
        <Stack.Screen
              name = "UserStats"
              component={userStats}
              options ={{
                headerShown: false,
              }}
            />
          
        </Stack.Navigator>
        </View>
        
      </NavigationContainer> 
      </SafeAreaProvider>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  
  },
  toolbar:{
    height:60
  },
  container2:{
    flexDirection:'row',
    height: 60,
    
    
},
button:{
    flex:1,
    width:126,
    paddingTop:10,
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent:'center',
    
    
},
contain: {flex:1}
});
