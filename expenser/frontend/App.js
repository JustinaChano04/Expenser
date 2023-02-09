// import './App.css';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert,Button, TextInput,SafeAreaView, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';



function App() {
  const [text, onChangeText] = React.useState('');
  const [num, onPress] = React.useState(0);


  function onPressButton(){
    onPress(num + 1)
    console.log(num);
    const baseURL = 'https://localhost:5000/data'; 
    axios.post('https://654e-195-252-220-190.ngrok.io/data', {
      clicks: text
   
    })
    .then(function (response) {
      // console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

   
    
  };

  

  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      <View style={styles.shadowProp}>
        <Text style={styles.h1}>
          Total Spending
          {'\n'}
        </Text>
        <Text style={styles.amount}>
          $ {num}
          {'\n'}
          {'\n'}
          {'\n'}
          {'\n'}

        </Text>

      </View>
     
      <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder= "Enter Amount!"
        color='#1B1B1B'
        
      />
      </SafeAreaView>

      {/* <View style={styles.buttonContainer}> */}
          {/* <Button onPress={onPress} title="Enter" color='#808080'/> */}
          <Button onPress={() => onPressButton()} title="Enter" color='#808080'/>
      {/* </View> */}
      

    </View>

  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#808080',
    color: '#808080',
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amount: {
    fontSize: 60,
    fontWeight: 'bold',
  },
  h1: {
    fontSize: 30,
  },
  shadowProp: {
    shadowColor: '#808080',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    height: 180,
    width: 250,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#808080',
    shadowRadius: 1,  
}
});
export default App;