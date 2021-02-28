import React, { useState } from 'react'
import { View, StyleSheet, Text, Button, ImageBackground, TextInput, TouchableOpacity} from "react-native";
import { signUp } from '../../Controller/loginController'
function SignUp({ navigation }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const nosepress = () => {
        signUp(email, password, signUpComplete)
    }
    const signUpComplete = () => { 
        // props.navigation.navigate('Blooddonor')
        navigation.navigate('Startpage');
    }
    const image={uri:'https://1stwebdesigner.com/wp-content/uploads/2019/07/css-background-effects-thumb.jpg '}
    return (
            <ImageBackground source={image} style={{  flex: 1,
                resizeMode: "cover",
                justifyContent: "center"}}
            >

        <View style={style.continer}>
            <Text style={style.heading}>
         SignUp
            </Text>
            <TextInput style={style.Input} placeholder=" EnterEmail" value={email} onChangeText={(text) => setEmail(text)}>
            </TextInput>

            <TextInput style={style.Input} placeholder="  Enter password"
                value={password} onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}>
            </TextInput>

            <TouchableOpacity style={style.btn}>
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btn} onPress={nosepress}>
                <Text>SignUp</Text>
            </TouchableOpacity>

        </View>
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
        fontSize: 35,
        fontStyle:'italic',
        color:'green',
    },
    Input: {
        borderWidth: 1,
        width: '80%',
        marginTop: 20,
        backgroundColor:'white'
    },
    btn: {
        width: '80%',
        backgroundColor: 'blue',
        marginTop: 20,
        height: 20,
        borderRadius: 20,
        backgroundColor:'grey'
    }
})

export default SignUp;