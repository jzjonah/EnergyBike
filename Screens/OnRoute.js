import React from 'react';

import { SafeAreaView, Text, View , StyleSheet} from 'react-native';
import { selectDestination } from '../slices/navSlice';
import { selectTravelTimeInformation } from '../slices/navSlice';
import { useSelector } from 'react-redux';

const onRoute = () => {
    const travel = useSelector(selectTravelTimeInformation)
    const destination = useSelector(selectDestination)
    return(

        <SafeAreaView>
            <View>
                <Text style={styles.title}> On Route</Text>
                
                
                <View style={styles.info}> 
                    <Text style={styles.infoTitle}> Distance:</Text>
                    <Text style={styles.infoText1}>{travel.distance.text}</Text>
                </View>

                <View style={styles.info}> 
                    <Text style={styles.infoTitle}> Estimated Time:</Text>
                    <Text style={styles.infoText2}>{travel.duration.text}</Text>
                </View>

            </View>
            <View>

            </View>
        </SafeAreaView>

    )
}

export default onRoute;

const styles = StyleSheet.create({
    mapview:{
        flex:1
    },
    title:{
        fontSize:30,
        textAlign:'center',
        paddingTop:15
    },
    info:{
        flexDirection:'row',
        paddingTop: 20
    },
    infoTitle:{
        fontSize:20
    },
    infoText1:{
        fontSize:20,
        paddingLeft:78
    },
    infoText2:{
        fontSize:20,
        paddingLeft:20
    }

});