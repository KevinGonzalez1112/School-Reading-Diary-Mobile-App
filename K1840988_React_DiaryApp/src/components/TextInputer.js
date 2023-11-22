import React from 'react';
// Importing Components from react native
import { StyleSheet, Text, TextInput, View } from 'react-native';

// Will be useful later on to reduce the number of lines needed in code when asking the user for input on forms
// This was used in the AddLogScreen and EditLogScreen
const TextInputer = ({ title, value, onChangeText }) => {
    return(
        <View style = { styles.textInputContainer }>
            <Text style = { styles.titleText }> {title} </Text>
            <TextInput 
                style = { styles.textInput } 
                placeholder = 'Enter text here...' 
                onChangeText = { (text) =>  onChangeText(text) }
                value = {value}
            />
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
    },
    textInput:
    {
        fontSize: 15,
        padding: 5,
        margin: 5,
        borderWidth: 1,
        color: '#F0F465'
    },
    textInputContainer:
    {
        backgroundColor: '#8184DB',
        padding: 8,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        borderRadius: 20
    }
});

export default TextInputer;