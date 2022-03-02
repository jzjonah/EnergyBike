import React, { useEffect, useRef } from 'react';
import { Entypo, Ionicons, AntDesign } from '@expo/vector-icons';
import { SafeAreaView, Text, View , StyleSheet, TouchableOpacity} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Starting from './Starting';
import MapView, {Marker} from 'react-native-maps';
import stations from '../data/stations';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import startingConfirm from './startingConfirm';
import Destination from './Destination';
import DestinationConfirm from './DestinationConfirm';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrent, selectDestination, selectOldDestination, selectOrigin, setCurrent, setOldDestination, setTravelTimeInformation } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_APIKEY} from "@env"
import OnRoute from './OnRoute';
import { createRef } from 'react';
import { useNavigation } from '@react-navigation/native';





export function initialLocation(origin) {
    mapRef.current.fitToSuppliedMarkers( [origin.location.address],{
            
        animated:true,
    });
}

 export function updateMaps(origin, destination) {
    
        mapRef.current.fitToSuppliedMarkers( [origin.location.address,destination.location.address],{
            
            animated:true,
        });
        
    };




export const mapRef = React.createRef(null);
const HomeScreen = () => {
    
    const Stack = createStackNavigator();
    const destination = useSelector(selectDestination);
    const origin = useSelector(selectOrigin);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const oldDestination = useSelector(selectOldDestination);
    const current = useSelector(selectCurrent);
    

    

    
 
   

    
    useEffect(( ) => {
        
        if (!origin || !destination) return;
        const getTravelTime = async() => {
            fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=
            ${origin.location.address}&destinations=${destination.location.address}&key=${GOOGLE_MAPS_APIKEY}`)
            .then(
                (res) => res.json()
            ).then(data => {
                
                dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
            })
        };
        
        getTravelTime()

        
    },[origin, destination, GOOGLE_MAPS_APIKEY] )
    return(

        <SafeAreaView style={styles.container}>
            <View style={styles.toolbar}>
        <View style={styles.container3}>

            <TouchableOpacity style={styles.button}>
            <AntDesign name="setting" size={20} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
            
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}
             onPress={() => {
                navigation.navigate('UserStats')
            }}
            >
            <Ionicons name="stats-chart" size={20} color="black" />
            </TouchableOpacity>

        </View>

        </View>
            <View style={{flex:1}}>
            <View style={styles.top}>
                
                <MapView style={styles.map}
                    ref={mapRef}
                    mapType='mutedStandard'
                    initialRegion={{
                        latitude: 44.22726160457129,
                        longitude: -76.49561220237699,
                        latitudeDelta:0.005,
                        longitudeDelta:0.005
                    }}
                >
                    
                    {origin && destination && (
                        <MapViewDirections 
                            origin = {origin.location.address}
                            destination = {destination.location.address}
                            apikey = { GOOGLE_MAPS_APIKEY}
                            strokeColor="green"
                            strokeWidth = {3}
                        
                        />
                        


                    )}
                    {stations.map(marker=>(
                        <MapView.Marker
                        coordinate={marker.coordinates}
                        title={marker.show}
                        identifier={marker.address}
                        />
                    ) )}
                    <MapView.Marker 
                        coordinate={current}
                    />
                    
                </MapView>

            </View>
            <View style={styles.bottom}>
            
        <View style={styles.container2}>
            <Stack.Navigator>
                <Stack.Screen 
                    name = "Starting"
                    component={Starting}
                    options ={{
                        headerShown: false,
                    }}
                    />
                <Stack.Screen 
                    name = "startingConfirm"
                    component={startingConfirm}
                    options ={{
                        headerShown: false,
                    }}
                    />
                <Stack.Screen
                    name="Destination"
                    component={Destination}
                    options ={{
                        headerShown: false,
                    }}
                    />
                <Stack.Screen
                    name="DestinationConfirm"
                    component={DestinationConfirm}
                    options={{
                        headerShown: false,
                    }}
                    />
                <Stack.Screen
                    name="OnRoute"
                    component={OnRoute}
                    options={{
                        headerShown: false,
                    }}
                    />
          
                </Stack.Navigator>
        </View>
        
               
        </View>
        </View>
        </SafeAreaView>

    )
}

export default HomeScreen;


const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    bottom:{
        width:"100%",
        height:"40%",
        marginTop:"0%",
        backgroundColor:"white"
    },
    top:{
        backgroundColor:"white",
        width :"100%",
        height: "60%",
        borderBottomStartRadius: 45,
        borderBottomEndRadius: 45,
        overflow: 'hidden'
    },
    firstText:{
        marginTop: 21,
        marginLeft: 17,
        fontSize: 20
    },
    container2:{
        height:'100%'
    },
    map:{
        flex:1,
        borderBottomStartRadius: 45,
        borderBottomEndRadius: 45,
    },
    toolbar:{
        height:60
      },
      container3:{
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
    }

});