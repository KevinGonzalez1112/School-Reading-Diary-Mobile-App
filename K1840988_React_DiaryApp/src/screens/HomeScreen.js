import React from 'react';
// Importing components from react-native
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return(
    <View style = {styles.container}>
      <Text style = {styles.headingText}>WELCOME TO YOUR DIARY APPLICATION</Text>
      <Image 
        source = {{ uri: "https://us.123rf.com/450wm/robuart/robuart1909/robuart190900218/129466465-big-school-with-green-territory-schoolyard-for-outdoor-lessons-and-playing-games-red-building-for-pr.jpg?ver=6"}} 
        style = {styles.homeScreenImage} 
      />
      <Text style = {styles.headingText}>KINGSTON PRIMARY SCHOOL</Text>
      <Text style = {styles.headingText}>2021/22</Text>
      <View style = {styles.pressable}>
        <Pressable onPress = {() => navigation.navigate('ViewPastLogsScreen')}>
          <Text style = {styles.pressableText}>GO TO MAIN MENU</Text>          
        </Pressable>  
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    backgroundColor: '#533A71',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headingText:
  {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 8,
    textAlign: 'center',
    color: '#F0F465'
  },
  pressable:
  {
    backgroundColor: '#8184DB',
    marginTop: 20,
    padding: 20,
    borderRadius: 20
  },
  pressableText:
  {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F0F465'
  },  
  homeScreenImage:
  {
    width: 350,
    height: 350,
    margin: 10
  }
});

export default HomeScreen;