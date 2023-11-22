import React, { useContext, useEffect } from 'react';
// Importing components from react-native
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
// Importing material icons for pressable buttons
import { MaterialIcons } from '@expo/vector-icons';
// Importing contexts
import ItemContext from '../contexts/itemContext';
// Importing Custom Props
import TextDisplay from '../components/TextDisplay';

const ViewPastLogs = ({ navigation }) => {
  
  const { state, remove } = useContext(ItemContext);

  // Creating a pressable button that leads the user to the add logs screen where they can fill in the new log form
  useEffect(() => {
    navigation.setOptions(
    {
      headerRight: () => (
        <Pressable onPress = { () => navigation.navigate('CameraScreen')}>
          <MaterialIcons name = "add" size = {24} color = "black" />
        </Pressable> 
      )
    })
  }, [state]);

  // Creating the infowindow to show the user how to use the basic functionality of the main menu
  // Then creating a flat list which will be used to display the array of previously created logs
  // Each flat list object will also lead the user onto further details of the clicked log when pressed
  // With a pressable button also created which will remove the relevant log when clicked using the logs id 
  return(
    <View style = {styles.container}>
      <View style = {styles.infoContainer}>
        <Text style = {styles.bodyText}>
          INFORMATION TO STUDENTS:
        </Text>
        <Text style = {styles.bodyText}>
          Previously entered logs can be seen below. With further information 
          being accesible by clicking on the log you want to access.
        </Text>
        <Text style = {styles.bodyText}>
          New logs can be registered by using the addition symbol in the title bar!
        </Text>
      </View>
      <FlatList
        data = {state}
        keyExtractor = {(e) => e.id.toString()}
        renderItem = { ({item}) => {
          return(
            <Pressable 
              onPress = { () => navigation.navigate('ViewPastLogScreen', 
              {
                id: item.id,
                studentName: item.studentName,
                title: item.title,
                date: item.date,
                startingPage: item.startPage,
                endingPage: item.endPage,
                review: item.review,
                comments: item.comments
              })}>
              <View style = {styles.itemContainer}>
                <TextDisplay title = "STUDENT NAME:" value = {item.studentName}/>
                <TextDisplay title = "BOOK THEY READ:" value = {item.title}/>
                <View style = {styles.materialIcons}>
                  <Pressable onPress = { () => {
                    remove(item.id);
                  }}>
                    <MaterialIcons name = "delete" size = {38} color = "#F0F465" />
                  </Pressable>
                </View>
              </View>
            </Pressable>
          )
        }
        }
      />
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
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    padding: 10, 
    flexDirection: 'column',
    borderRadius: 20
  },
  infoContainer:
  {
    backgroundColor: '#533A71',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  },
  materialIcons:
  {
    alignSelf: 'flex-end'
  },
  bodyText:
  {
    fontSize: 15,
    fontWeight: 'bold',
    margin: 10,
    color: '#F0F465'  
  }
});

export default ViewPastLogs;