import React from 'react';

import { SafeAreaView, Text, View , StyleSheet, Button} from 'react-native';
import { useSelector } from 'react-redux';
import { selectClicked, selectOrigin } from '../slices/navSlice';
import stations from '../data/stations';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { mapRef } from './HomeScreen';
import { initialLocation } from './HomeScreen';

const startingConfirm = () => {
    const origin = useSelector(selectOrigin);
    
   
    const navigation = useNavigation();
    
    
    return(

        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{origin.location.show}</Text>
            <View style = {styles.header}>
                
                <Text style={styles.amount}> 3/5 </Text>
                <MaterialIcons style = {styles.bike}
                name="electric-bike" size={50} color="green" />
            </View>
            <View style = {styles.buttonView}>
            <Button
            style={styles.button}
            title="Set Start"
            onPress={(data, details = null) => {
                initialLocation(origin);
                navigation.navigate('Destination')
            }}
            />
            </View>

            
            
         
        </SafeAreaView>

    )
}

export default startingConfirm;

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
        
        flex:0.6
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
    }


});