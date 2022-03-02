import React from 'react';

import { SafeAreaView, Text, View , StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';
import { FlatList } from 'react-native-gesture-handler';
import stations from '../data/stations';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { setDestination } from '../slices/navSlice';
import { updateMaps } from './HomeScreen';

const Destination = () => {
    const Stack = createStackNavigator();
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);
    return(
        <SafeAreaView style={styles.bottom}>
            <Text style={styles.firstText}>Final Station</Text>
            <View style={styles.list}>
            <FlatList  

                data={stations}
                keyExtractor={(item) => item.id}
                key={stations.id}
            renderItem={({item}) => (
                <TouchableOpacity style={styles.station}
                onPress={(data, details = null) => {
                    
                    dispatch(setDestination({
                        location: item
                        
                    }),
                    
                   
                    
                );
                navigation.navigate('DestinationConfirm')
                
                }}>
                   <Text style={styles.stationText}>{item.address}</Text>
                </TouchableOpacity>
            )}
            
            />
            </View>
        </SafeAreaView>

    )
}

export default Destination;

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
        borderColor: 'lightgray'
        
    },
    list:{
        
        width:"100%",
        height:'100%'
    },
    stationText:{
        fontStyle:'normal'
    },

});