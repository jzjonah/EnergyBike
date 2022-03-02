import React from 'react';

import { SafeAreaView, Text, View , StyleSheet, Button, TouchableOpacity} from 'react-native';

const userStats = () => {
    return(

        <SafeAreaView style ={styles.container}>
            <View style = {styles.titleContainer}>
                <Text style = {styles.bStats}> Biking Stats</Text>
            </View>
            <View style={styles.statButtonsContainer}> 
                <TouchableOpacity style={styles.button}>
                    <Text style = {styles.buttonText}>All Time</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style = {styles.buttonText}>Today</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style = {styles.buttonText}>This Week</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style = {styles.buttonText}>This Month</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text style = {styles.infoText}> Distance Traveled</Text>
            </View>
        </SafeAreaView>

    )
}

export default userStats;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "white"
    },
    titleContainer: {

    },
    bStats: {
        fontSize: 45,
        paddingTop: 10,
        paddingLeft: 10
    },
    statButtonsContainer:{
        flexDirection: "row"
    },
    button:{
        paddingLeft: 5,
        paddingRight: 5
    },
    buttonText: {
        fontSize : 20
    },
    infoText:{
        paddingLeft: 10,
        fontSize: 32,
        paddingTop: 20
    

    }

});