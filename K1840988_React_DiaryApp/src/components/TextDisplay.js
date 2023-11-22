import React from "react";
// Importing Components from react native
import { StyleSheet, Text, View } from 'react-native';

// Will be useful later on to reduce the number of lines needed when display the logs
// This was used in the ViewPastLogs and further in the ViewPastLog screen
const TextDisplay = (props) => {
    return(
        <View>
            <Text style = {styles.titleText}> {props.title} </Text>
            <Text style = {styles.text}> {props.value} </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    text:
    {
        fontSize: 15,
        fontWeight: 'bold',
        margin: 10,
        color: '#F0F465'
    },
    titleText:
    {
        fontSize: 15,
        fontWeight: 'bold',
        margin: 10,
        color: '#F0F465',
        textDecorationLine: 'underline'
    }
});

export default TextDisplay;