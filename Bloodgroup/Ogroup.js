import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet,View,Text,FlatList } from "react-native";
import { color } from 'react-native-reanimated';


function Ogroup(props) {
    return(
        <View style={style.container} >
            <View style={style.head}>
                <Text style={style.hedtxt}>DETAILS</Text>
            </View>
            <Text   style={style.para}>(O) blood group People give the blood 
                (A) blood group patients , (B) Blood Group patients, (O) Blood Group patients and (AB) Blood Group patients
            </Text>
            <Text style={style.para}>(O) Blood Group patients takes the blood only (O)Blood group people </Text>
            <View style={style.btnContainer}>
               <TouchableOpacity style={style.btn} onPress={()=>props.navigation.navigate('Blooddonor')}>
                   <Text>Back</Text>
               </TouchableOpacity>
            </View>
        </View>
        
        
    )
}
const style = StyleSheet.create({
   container:{
       flex:1,
       alignItems:'center',
       justifyContent:'center',
       backgroundColor:'darkred'
   },
   head:{
       flex:0.3,
       alignContent:'center',
       justifyContent:'center'
   },
   hedtxt:{
       fontSize:50,
       color:'red'
   },
   para:{
       alignSelf:'center',
       alignItems:'center',
       textAlign:'center',
       fontSize:30,
       color:'#ffff',
       margin:10
   },
    
 btnContainer:{
     alignItems:'flex-end',
     justifyContent:'flex-end'
 },
btn:{
    backgroundColor: "#ffff",
        color:'red',
        padding:7, 
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:2,
        width:'30%',
        margin: 10,
        borderRadius:100,
        height:50,
        textAlign:'center',
        flexDirection:'row',
        justifyContent:'space-between',
}
})
export default Ogroup;