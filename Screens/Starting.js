import React from 'react';

import { SafeAreaView, Text, View , StyleSheet, FlatList, TouchableOpacity,} from 'react-native';
import stations from '../data/stations';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { setClicked } from '../slices/navSlice';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';



const Starting = () => {
    const Stack = createStackNavigator();
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);
    return(
        <SafeAreaView style={styles.bottom}>
            <Text style={styles.firstText}>Starting Station</Text>
            <View style={styles.list}>
            <FlatList  

                data={stations}
                keyExtractor={(item) => item.id}
                key={stations.id}
            renderItem={({item}) => (
                <TouchableOpacity style={styles.station}
                onPress={() => {
                    dispatch(setOrigin({
                        location: item
                        
                    }),
                    
                    
                );
                navigation.navigate('startingConfirm')
                }}>
                   <Text style={styles.stationText}>{item.address}</Text>
                </TouchableOpacity>
            )}
            
            />
            </View>
        </SafeAreaView>

    )
}

export default Starting;

const styles = StyleSheet.create({
    firstText:{
        marginTop: 21,
        marginLeft: 17,
        fontSize: 20
    },
    bottom:{
        width:"100%",
        height:"100%",
        marginTop:"0%",
        backgroundColor:"white"
    },
    station:{
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 2,
        marginHorizontal: 0,
        borderRadius:0,
        borderTopWidth: 1,
        width:'100%',
        
        alignItems:'center',
        
    },
    list:{
        
        width:"100%",
        height:'100%'
    },
    stationText:{
        fontStyle:'normal'
    },

});