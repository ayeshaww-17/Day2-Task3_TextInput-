import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import login from './login'
 const App=() => {
  const[Name,setName]=useState("");
  const[Password,setPassword]=useState("");
  
  const handlename=(text)=>{
    setName(text)
  }
  const handlepassword=(text)=>{
     setPassword(text)
  }
  return (
    <SafeAreaView style={styles.background}>
    <View style={{padding:20}}>
      <Text style={styles.title}>LogIn</Text>
      <TextInput
      onChangeText={handlename}
      placeholder='Name'
      style={styles.input_Field}
      />
      <TextInput
      secureTextEntry={true}
      onChangeText={handlepassword}
      placeholder='Password'
      style={styles.input_Field}
      />
      <Text style={styles.forget}>Forget Password</Text>
      
      <TouchableOpacity 
      
      style={styles.button}>
        <Text style={styles.text_login}>LogIn</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}
export default App;
const styles = StyleSheet.create({
  
  title:{
    marginTop:100,
    fontSize:45,
    fontWeight:'bold',
    color:'#000',
  },
  input_Field:{
    padding:10,
    borderWidth:0.8,
    fontSize:15,
    marginTop:30,
    borderRadius:20,
  },
  forget:{
    marginTop:10,
    textAlign:'right',
    color:'blue',
    fontSize:15,
  },
  button:{
    
  },
  text_login:{
    backgroundColor:'#000',
    color:'white',
    textAlign:'center',
    padding:10,
    marginTop:30,
    borderRadius:20,
    fontSize:18,
  },
  background:{
    //backgroundColor:"#F9ECEC"
  }
});
 