// import './App.css';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert,Button, TextInput,SafeAreaView, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';


function App() {
  const [text, onChangeText] = React.useState('Enter Amount');
  const [num, onPress] = React.useState(0);
  const [number, onChangeNumber] = React.useState('');
  const [profileData, setProfileData] = useState('')

  function onPressButton(){
    const baseURL = 'http://localhost:5000/data';
    // axios.get(baseURL)
    // .then((response)=> {
    //   setProfileData(response.data);
    // })
    // .catch((error) => {
    //   if (error.response) {
    //     console.log(error.response)
    //     }
    //   }
    // )  
    axios.post(baseURL, {num})
    .then(response=> {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  };

  console.log(num);

  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      
      {/* <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      </SafeAreaView> */}

      {/* <View style={styles.buttonContainer}> */}
          {/* <Button onPress={onPress} title="Enter" color='#808080'/> */}
          <Button onPress={() => onPress(num + 1)} title="Enter"/>
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
});
export default App;