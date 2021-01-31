import React,{useState} from 'react'
import { View, StyleSheet, Text, Button, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import login from '../../Controller/loginController'

  

function Startpage({navigation}) {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const nosepress=()=>{
        // login();
       login(email,password,loginComplete)
        // console.log(email, password);
    }

    const loginComplete = () => {
        navigation.navigate('Blooddonor')
    }

    // const loginComplete=()=>{
    //    navigation.navigate('Blooddonor')   
    //    }
    return (
        <View style={style.continer}>
            <Text style={style.heading}>
                If you  want to use this application please Sign In
            </Text>
            <TextInput style={style.Input} placeholder="EnterEmail"
            value={email}
            onChangeText={(text)=>setEmail(text)}
            >

            </TextInput>
            <TextInput style={style.Input} placeholder="password" secureTextEntry={true}
              underlineColorAndroid='transparent'
              value={password}
             onChangeText={(text)=>setPassword(text)}
           >
            </TextInput>

            <TouchableOpacity style={style.btn} onPress={nosepress} >
                <Text>Login</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={style.btn} onPress={()=> navigation.navigate('SignUp')}>
                <Text>SignUp</Text>
            </TouchableOpacity>
        
        </View>
    )
}

const style = StyleSheet.create({
    continer: {
        alignItems: "center",
        justifyContent: 'center',
        flex: 1
    },

    heading: {
        fontSize: 18
    },
    Input:{
        borderWidth:1,
        width:'80%',
        marginTop:20,
    },
    btn:{
        width:'80%',
        backgroundColor:'blue',
        marginTop:20,
        height:20,
        borderRadius:20
    }
})

export default Startpage;