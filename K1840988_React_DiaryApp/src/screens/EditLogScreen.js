import React, { useContext, useState } from 'react';
// Importing Components from react-native
import { Pressable, ScrollView, StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
// Importing Custom Components 
import TextInputer from '../components/TextInputer';
// Importing Contexts
import ItemContext from '../contexts/itemContext';

export const EditLogScreen = ({ navigation, route }) =>
{
  // Bringing across the values assigned to the selected log 
  // By using the id to find the correct log
  const { id } = route.params;  
  const { state, update } = useContext(ItemContext);
  const currentLog = state.find((e) => e.id === id);
  const [studentName, setStudentName] = useState(currentLog.studentName);
  const [title, setTitle] = useState(currentLog.title);
  const [startPage, setStartPage] = useState(currentLog.startPage);
  const [endPage, setEndPage] = useState(currentLog.endPage);
  const [review, setReview] = useState(currentLog.review);
  const [comments, setComments] = useState(currentLog.comments);

  // Source for input checking:
  // https://aboutreact.com/react-native-check-textinput-is-empty-or-not/

  // Creating a form validation function 
  // This prevents any of the text inputs from being left null
  // And ensures start page can not be larger than end page
  const checkTextInput = () => {
    if (!studentName.trim()) {
      alert('Please Enter Your Name');
      return;
    }
    if (!title.trim()) {
      alert('Please Enter The Title Of The Book You Read')
      return;
    } 
    if (!startPage.trim()) {
      alert('Please Enter The Page You Began Reading At')
      return;
    }
    if (!endPage.trim()) {
      alert('Please Enter The Last Page You Read')
      return;
    }
    if (parseInt(startPage.trim()) > parseInt(endPage.trim())) {
      alert('Start Page Must Be Lower Than End Page')
      return;
    }
    if (!review.trim()) {
      alert('Please Enter Your Thoughts On The Book You Read')
      return;
    }
    if (!comments.trim()) {
      alert('Please Enter The Teachers Feedback On Your Progress')
      return;
    }
    else {
      alert('Selected Log Successfully Updated!');
      update(currentLog.id, studentName, currentLog.date, title, startPage, endPage, review, comments);
      navigation.pop();
      navigation.pop();
    }
  }

  // Creating the form view where all relevant values from previously created object will appear in the custom text inputs
  // The user will then be able to make changes using these input boxes
  // Once all values are changed a Pressable button will update the log object and update it in the array
  return(
    <View style = {styles.container}>
      <KeyboardAvoidingView style = {{flex: 1}} behavior = 'padding'>
        <ScrollView style = {styles.container}>
          <TextInputer 
              title = "My full name is:" 
              value = {studentName}
              onChangeText = { (text) => { setStudentName(text); }}
            />
            <TextInputer
              title = "The book I have been reading is:"
              value = {title}
              onChangeText = { (text) => { setTitle(text); }}
            />
            <TextInputer
              title = "I started reading on page:"
              value = {startPage}
              onChangeText = { (text) => { setStartPage(text); }}
            />
            <TextInputer
              title = "And finished on page:"
              value = {endPage}
              onChangeText = { (text) => { setEndPage(text); }}
            />
            <TextInputer
              title = "My thoughts on the book are:"
              value = {review}
              onChangeText = { (text) => { setReview(text); }}
              multiline
            />
            <TextInputer
              title = "Teachers comments:"
              value = {comments}
              onChangeText = { (text) => { setComments(text); }}
            />
        </ScrollView>
        <View style = {styles.pressable}>
          <Pressable onPress = { () => { checkTextInput(); }}> 
            <Text style = {styles.pressableText}>SUBMIT EDITED LOG</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    backgroundColor: '#533A71'
  },
  itemContainer:
  {
    backgroundColor: '#8184DB',
    padding: 8,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 20
  },
  text:
  {
    fontSize: 15,
    fontWeight: 'bold',
    margin: 10,
    color: '#F0F465'
  },
  pressable:
  {
    backgroundColor: '#8184DB',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
    marginLeft: 20,
    marginRight: 20,
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

export default EditLogScreen;