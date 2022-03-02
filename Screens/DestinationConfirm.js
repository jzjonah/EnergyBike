import React, { useEffect, useRef } from 'react';

import { SafeAreaView, Text, View , StyleSheet, Button} from 'react-native';
import { useSelector } from 'react-redux';
import { selectClicked, selectDestination, selectOrigin, selectTravelTimeInformation } from '../slices/navSlice';
import stations from '../data/stations';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { updateMaps } from './HomeScreen';
import { mapRef } from './HomeScreen';


const DestinationConfirm = () => {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination)
    const mapRef = useRef(null);
   const travel = useSelector(selectTravelTimeInformation)
    const navigation = useNavigation();
    
    useEffect(()=> {
        updateMaps(origin, destination)
    })
    
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{destination.location.show}</Text>
           
           
            <View style = {styles.header}>
                
                <Text style={styles.amount}> 4/5 </Text>
                <MaterialIcons style = {styles.bike}
                name="electric-bike" size={50} color="green" /> 
                
            </View>
            <View style = {styles.buttonView}>
            <Button
            style={styles.button}
            title="Set Destination"
            onPress={(data, details = null) => {
            
            navigation.navigate('OnRoute')
            }}
            />
            </View>

            
            
         
        </SafeAreaView>

    )
}

export default DestinationConfirm;

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    title:{
        paddingLeft:15,
       
        fontSize: 30,
        flex: 0.2
    },
    header:{
        flexDirection: 'row',
        flex:0.6,
        
    },
    bike:{
        
        paddingTop:15

    },
    amount:{
        paddingTop:22,
        paddingLeft: 15,
        fontSize:25,
        color:"grey"

    },
    button:{
        paddingTop:100
    },
    buttonView:{
        
        flex:0.3
    },
    distance:{
        paddingLeft: 30,
        paddingTop: 20,
        fontSize:30

    }


});