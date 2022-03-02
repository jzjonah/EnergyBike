import React from 'react';

import { SafeAreaView, Text, View , StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Bottom = () => {
    return(

        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>

            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>

            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>

            </TouchableOpacity>
        </View>

    )
}

export default Bottom;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height: 60,
    },
    button:{
        flex:1,
        width:125,
        backgroundColor: '#5E8558',
        borderWidth: 2,
        
    }

});