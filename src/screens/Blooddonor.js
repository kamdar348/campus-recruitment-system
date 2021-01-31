import React,{useState} from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import dataBase from '@react-native-firebase/database'
import { Value } from 'react-native-reanimated';


function Blooddonor(props){
    const [Ogroup,setOgroup]=useState("");
    const [Agroup,setAgroup]=useState("");
    const [Bgroup,setBgroup]=useState("");
    const [ABgroup,setABgroup]=useState("");

    const save_data=()=>{
         let user ={
             Ogroup,
             Agroup,
             Bgroup,
             ABgroup,
         }
         dataBase().ref('/').child('user').push(user)
    }
    return (
        <View style={style.head}>
            <Text style={style.headtxt}>
                Select Blood Group
            </Text>
            <TouchableOpacity style={style.btn} onPress={()=>{props.navigation.navigate('Ogroup'),save_data()}} value={Ogroup} onChangeText={(text)=>setOgroup(text)}>
                <Text Value={Ogroup} onChangeText={(text)=>setOgroup(text)}>O Group</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btn} onPress={()=>{props.navigation.navigate('Agroup'),save_data()} }>
                <Text  Value={Agroup} onChangeText={(text)=>setAgroup(text)}>A Group</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btn} onPress={()=>{props.navigation.navigate('Bgroup'),save_data()}} >
                <Text  Value={Bgroup} onChangeText={(text)=>setBgroup(text)}>B Group</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btn} onPress={()=>{props.navigation.navigate('ABgroup'),save_data()}} >
                <Text  Value={ABgroup} onChangeText={(text)=>setABgroup(text)}>AB Group</Text>
            </TouchableOpacity>
        </View>
    )
}


const style = StyleSheet.create({
    head: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'darkred'
    },

    headtxt: {
        fontSize: 30,
        color: 'red',
        marginBottom: 30
    },

    btn: {
        alignItems: "center",
        backgroundColor: "red",
        color:'white',
        padding:10, 
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:2,
        width:'30%',
        margin: 10,
        borderRadius:100,
        height:100,
        textAlign:'center'
    }

})

export default Blooddonor;