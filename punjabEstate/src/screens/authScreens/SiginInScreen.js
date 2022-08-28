import React, { useState, useRef, useContext } from 'react'
import { View, Text, StyleSheet, TextInput, Image, Alert } from 'react-native'
import { colors, parameters, title } from '../../golbal/Styles'
import * as Animatable from "react-native-animatable"
import Header from '../../components/Header'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Button } from 'react-native-paper'
import google from "../../assets/images/google.png"
import facebook from "../../assets/images/facebook.png"
import { Formik } from 'formik'
import auth from '@react-native-firebase/auth'
import { SignInContext } from '../../context/authContext'

export default function SiginInScreen({ navigation }) {

    const { dispatchSignIn } = useContext(SignInContext)

    const [textInput2Foused, setTextInput2Foused] = useState(false)
    const Input1 = useRef(1)
    const Input2 = useRef(2)

    async function SignIn(data) {
        try {
            const { password, email } = data
            const user = await auth().signInWithEmailAndPassword(email, password)
            if (user) {
                dispatchSignIn({ type: "UPDATE_SIGIN_IN", payload:{ userToken: "sign-In" } })
                console.log(user)
            }

        }
        catch (error) {
            alert("SomeThing is Worng")

        }

    }

    return (
        <View style={styles.container}>
            <Header title="MY ACCOUNT" type={"arrow-left"} navigation={navigation} />
            <View style={{ marginLeft: 20, marginTop: 10 }}>
                <Text style={title}>Sigin-In</Text>
            </View>
            <View style={{ alignItems: "center", marginTop: 10 }}>
                <Text style={styles.text1}>Enter your email and password</Text>
                <Text style={styles.text1}>Registered With your Account</Text>
            </View>

            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => {
                    SignIn(values)
                }}
            >
                {(props) =>
                    <View>
                        <View style={{ marginTop: 20, }}>
                            <TextInput
                                style={styles.textinput1}
                                placeholder="Email"
                                placeholderTextColor={"black"}
                                keyboardType="email-address"
                                ref={Input1}
                                onChangeText={props.handleChange('email')}
                                value={props.values.email}
                            />
                        </View>
                        <View style={styles.textinput2}>
                            <Animatable.View animation={textInput2Foused ? "" : "fadeInRight"} duration={400}>
                                <Icon name='lock'
                                    size={20}
                                    color={colors.gery3}
                                />
                            </Animatable.View>
                            <TextInput
                                style={{ width: "80%", color: "black" }}
                                placeholder="Password"
                                placeholderTextColor={"black"}
                                secureTextEntry
                                ref={Input2}
                                onFocus={() => {
                                    setTextInput2Foused(false)
                                }}
                                onBlur={() => {
                                    setTextInput2Foused(true)
                                }}
                                onChangeText={props.handleChange('password')}
                                value={props.values.password}
                            />
                            <Animatable.View animation={textInput2Foused ? "" : "fadeInLeft"} duration={400}>
                                <Icon name='eye-slash'
                                    size={20}
                                    color={colors.gery3}
                                    style={{ marginRight: 10 }}
                                />
                            </Animatable.View>
                        </View>
                        <View>
                            <Button mode="contained" onPress={props.handleSubmit}
                                style={{
                                    backgroundColor: "#ff8c52",
                                    marginTop: 30,
                                    marginHorizontal: 20,

                                }}
                            >
                                <Text style={{ fontSize: 20, paddingTop: 10 }}>SIGIN IN</Text>
                            </Button>
                        </View>
                    </View>
                }
            </Formik>


            <View style={{ marginTop: 30, alignItems: "center" }}>
                <Text style={{ ...styles.text1, textDecorationLine: "underline" }}>Forget Password ?</Text>
            </View>
            <View style={{ alignItems: "center", marginBottom: 10, marginTop: 30 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>OR</Text>
            </View>

            <View>
                <Button icon={() => (
                    <Image
                        source={facebook}
                        style={{ width: 28, height: 28, }}
                    />
                )} mode="contained" onPress={() => alert('Pressed')}
                    style={{
                        backgroundColor: "#1877f2",
                        marginTop: 30,
                        marginHorizontal: 20,
                    }}
                >
                    <Text style={{ color: "White", fontSize: 17 }}>Sigin In with Facebook</Text>
                </Button>
            </View>
            <View>
                <Button icon={() => (
                    <Image
                        source={google}
                        style={{ width: 25, height: 25, }}
                    />
                )} textColor='#4285f4' mode="elevated" onPress={() => alert('Pressed')}
                    style={{
                        backgroundColor: "#7552cc",
                        marginTop: 35,
                        marginHorizontal: 20,
                    }}
                >
                    <Text style={{ color: "white", fontSize: 17, }}>Sigin In with Google</Text>
                </Button>
            </View>

            <View style={{ marginTop: 40, marginLeft: 25 }}>
                <Text style={{ ...styles.text1 }}>New on Punajab Real Estate?</Text>
            </View>
            <View style={{ alignItems: "flex-end", display: "flex" }}>
                <Button mode="outlined" textColor='#ff8c52' onPress={() => navigation.navigate("RegisterScreen")}
                    style={{ marginTop: 20, marginRight: 20 }}
                >
                    <Text style={{ color: "#ff8c52", fontSize: 18 }}>Create an Account </Text>
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    text1: {
        color: colors.gery1,
        fontSize: 16,
    },
    textinput1: {
        borderRadius: 12,
        borderColor: "#86939e",
        borderWidth: 1,
        marginHorizontal: 20,
        marginBottom: 20,
        paddingLeft: 15,
        color: "black"
    },
    textinput2: {
        borderRadius: 12,
        borderColor: "#86939e",
        borderWidth: 1,
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
        paddingLeft: 15,
    },


})