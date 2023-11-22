import React from 'react';
// Importing components from react-native
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
// Importing Custom Components
import TextDisplay from '../components/TextDisplay';

const ViewPastLog = ({ navigation, route }) => {
    // Grabbing full list of values of the selected log 
    const { id, studentName, date, title, startingPage, endingPage, review, comments } = route.params;
    // Creating the view where the full details of the log will be shown 
    // And creating a pressable button which leads the user to the screen the selected log can be edited on 
    return(
    <View style = { styles.container}>
        <ScrollView style = { styles.container }>
            <View style = { styles.itemContainer}>
                <TextDisplay title = "LOG ID:" value = {id}/>
                <TextDisplay title = "DATE, TIME:" value = {date}/>
                <TextDisplay title = "STUDENT NAME:" value = {studentName}/>
                <TextDisplay title = "BOOK TITLE:" value = {title}/>
                <TextDisplay title = "STARTING PAGE:" value = {startingPage}/>
                <TextDisplay title = "END PAGE:" value = {endingPage}/>
                <TextDisplay title = "STUDENT'S REVIEW:" value = {review}/>
                <TextDisplay title = "TEACHER'S REVIEW" value = {comments}/>
            </View>
        </ScrollView>
        <View style = {styles.pressable}>
            <Pressable onPress = { () => {
                navigation.navigate('EditLog', {id, id})
            }}>
                <Text style = {styles.pressableText}>EDIT THIS LOG</Text>
            </Pressable>      
        </View>
    </View>
    );  
};

const styles = StyleSheet.create(
{
    container: 
    {
        flex: 1,
        backgroundColor: '#533A71'
    },
    itemContainer:
    {
        padding: 10,
        backgroundColor: '#8184DB',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        borderRadius: 20
    },
    pressable:
    {
        backgroundColor: '#8184DB',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 40,
        marginRight: 20,
        marginLeft: 20,
        padding: 20,
        borderRadius: 20
    },
    pressableText:
    {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#F0F465'
    }
});

export default ViewPastLog;