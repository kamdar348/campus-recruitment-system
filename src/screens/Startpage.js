import React, { useState } from 'react'
import { Image, View, StyleSheet, Text, Button, ImageBackground, TextInput, TouchableOpacity, ScrollView } from "react-native";
import login from '../../Controller/loginController'



function Startpage({ navigation }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const nosepress = () => {
        // login();
        login(email, password, loginComplete)
        // console.log(email, password);
    }

    const loginComplete = () => {
        navigation.navigate('studentData')
    }

    // const loginComplete=()=>{
    //    navigation.navigate('Blooddonor')   
    //    }
    const image={uri:'https://1stwebdesigner.com/wp-content/uploads/2019/07/css-background-effects-thumb.jpg '}
    return (
        <ImageBackground source={image} style={{  flex: 1,
            resizeMode: "cover",
            justifyContent: "center"}}>

        <ScrollView>

            <View style={style.container}>
                <Text style={style.Heading}>
                    College Recruitment Form
      </Text>
                <View>
                    <Image
                        style={style.image}
                        source={{
                            uri:
                            "http://vskills.in/certification/blog/wp-content/uploads/2014/09/best-practices-in-campus-recruitment-selection-and-selection.jpg"
                        }} />
                </View>
                <View>
                    <Text style={style.Heading2}> Admin login</Text>
                    {/* <TextInput placeholder="Enter Your email" style={style.Input} />
        <TextInput placeholder="Enter Your Pasword" style={style.Input} /> */}

                </View>
                <TextInput style={style.Input} placeholder="EnterEmail"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    >

                </TextInput>
                <TextInput style={style.Input} placeholder="password" secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    >
                </TextInput>
                <View>
                    <Text style={style.Heading2}> Company login</Text>
                    <TextInput placeholder="Enter Your email" style={style.Input}   
                     value={email}
                     onChangeText={(text)=>setEmail(text)} />
                    <TextInput placeholder="Enter Your Pasword" style={style.Input}
                     value={password}
                     onChangeText={(text) => setPassword(text)} />
                </View>
                <View>
                    <Text style={style.Heading2}> Student login</Text>
                    <TextInput placeholder="Enter Your email" style={style.Input} 
                    value={email}
                    onChangeText={(text) => setEmail(text)} />
                    <TextInput placeholder="Enter Your Pasword" style={style.Input} 
                    value={email}
                    onChangeText={(text) => setPassword(text)} />
                </View>


                <TouchableOpacity style={style.btn} onPress={nosepress} >
                    <Text>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.btn} onPress={() => navigation.navigate('SignUp')}>
                    <Text>SignUp</Text>
                </TouchableOpacity>

            </View>

        </ScrollView>
                    </ImageBackground>
    )
}

const style = StyleSheet.create({
    continer: {
        alignItems: "center",
        justifyContent: 'center',
        flex: 1
    },

    heading: {
        fontSize: 18,
        color:'green'
    },
    Input: {
        borderWidth: 1,
        width: '80%',
        marginTop: 20,
    },
    btn: {
        width: '80%',
        backgroundColor: 'blue',
        marginTop: 20,
        height: 20,
        borderRadius: 20
    },
    container: {
        marginTop: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Heading: {
        fontSize: 30,
        color:'green'
    },
    image: {
        width: 350,
        height: 200,
        borderRadius: 20
    },
    Input: {
        marginTop: 10,
        borderWidth: 2,
        width: 300,
        textAlign: 'center',
        color:'green',
        backgroundColor:'white'
    },
    Heading2: {
        fontSize: 25,
        fontStyle: 'italic',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'green',
        borderRadius:50
    },
})

export default Startpage;