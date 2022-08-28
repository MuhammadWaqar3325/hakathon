import React, { useState, useRef,useContext } from 'react'
import { View, Text, StyleSheet, TextInput, Image, ScrollView } from 'react-native'
import { colors, parameters, title } from '../../golbal/Styles'
import * as Animatable from "react-native-animatable"
import Header from '../../components/Header'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Button } from 'react-native-paper'
import { Formik } from 'formik'
import auth from '@react-native-firebase/auth'
import { SignInContext } from '../../context/authContext'

const initialValuse = { phone_number: '', first_name: "", last_name: "", password: "", email: "", username: '' }

export default function RegisterScreen({ navigation }) {

  const { dispatchSignIn } = useContext(SignInContext)

  async function signUp(values) {

    const { email, password, last_name, first_name, phone_number } = values

    try {
      const user = await auth().createUserWithEmailAndPassword(email, password, last_name, phone_number, first_name)
      console.log("USER IS CREATED")
      if (user) {
        dispatchSignIn({ type: "UPDATE_SIGIN_IN", payload: { userToken: "sign-Up" } })
        console.log(user)
      }
    }
    catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("That email is already is Sign-up")
      }

      if (error.code === "auth/invalid-email") {
        alert("That email is already is Sign-up")
      }
      else {
        alert(error.code)
      }
    }
  }

  return (
    <View style={styles.container}>

      <Header title="MY ACCOUNT" type={"arrow-left"} navigation={navigation} />

      <ScrollView keyboardShouldPersistTaps="always">

        <View style={{ marginLeft: 20, marginTop: 10 }}>
          <Text style={title}>Sigin-Up</Text>
        </View>

        <Formik
          initialValues={initialValuse}
          onSubmit={(values) => { signUp(values) }}
        >
          {(props) => (
            <View style={styles.v2}>
              <View>
                <Text style={styles.text2}>New on Laa Jawab ?</Text>
              </View>

              <View style={styles.v6}>
                <TextInput
                  placeholder='Phone Number'
                  keyboardType="phone-pad"
                  style={styles.input1}
                  // autoFocus={true}
                  onChangeText={props.handleChange('phone_number')}
                  value={props.values.phone_number}
                />
              </View>

              <View style={styles.v6}>
                <TextInput
                  placeholder='First Name'
                  // keyboardType="phone-pad"
                  style={styles.input1}
                  autoFocus={false}
                  onChangeText={props.handleChange('first_name')}
                  value={props.values.first_name}
                />
              </View>

              <View style={styles.v6}>
                <TextInput
                  placeholder='Last Name'
                  // keyboardType="phone-pad"
                  style={styles.input1}
                  autoFocus={false}
                  onChangeText={props.handleChange('last_name')}
                  value={props.values.last_name}
                />
              </View>

              <View style={styles.v10}>
                <View>
                  <Icon
                    name='email'
                    style={styles.email}
                    color={colors.gery3}
                  />
                </View>
                <View style={styles.v11}>
                  <TextInput
                    placeholder='Email'
                    keyboardType="email-address"
                    style={styles.input4}
                    autoFocus={false}
                    onChangeText={props.handleChange('email')}
                    value={props.values.email}
                  />
                </View>
              </View>

              <View style={styles.vp}>
                <View>
                  <Icon
                    name='lock'
                    style={styles.email}
                    color={colors.gery3}
                  />
                </View>
                <View style={{ width: "80%", ...styles.v11, marginLeft: -9 }}>
                  <TextInput

                    placeholder='Password'
                    keyboardType='default'
                    style={styles.input4}
                    autoFocus={false}
                    secureTextEntry
                    onChangeText={props.handleChange('password')}
                    value={props.values.password}
                  />
                </View>
                <View>
                  <Icon
                    name='eye-off'
                    style={styles.password}
                    color={colors.gery3}
                  />
                </View>
              </View>
              <View style={styles.v15}>
                <Text style={styles.text3}>By creacting or logging init an account you are</Text>
                <View style={styles.v16}>
                  <Text style={styles.text3}>agreeing with our |</Text>
                  <Text style={styles.text4}> Trems & Conditions</Text>
                  <Text style={styles.text3}> and </Text>
                </View>
                <Text style={styles.text4}>Privacy Statement </Text>
              </View>
              <View style={styles.v17}>
                <Button mode="contained"
                  style={{
                    backgroundColor: "#ff8c52",
                    marginTop: 15,
                    marginHorizontal: 20,
                  }}
                  onPress={props.handleSubmit}
                >
                  <Text style={{ fontSize: 20, paddingTop: 10 }}>SIGIN UP</Text>
                </Button>
              </View>
            </View>
          )}
        </Formik>
        <View style={styles.v18}>
          <Text style={styles.text5}>OR</Text>
        </View>
        <View style={styles.v19}>
          <View style={styles.v20}>
            <Text style={styles.text3}>Already have an account with Laa Jawab ?</Text>
          </View>
          <View style={styles.v21}>
            <Button mode="outlined" textColor='#ff8c52' onPress={() => navigation.navigate("SiginInScreen")}
              style={{ marginTop: 20, marginRight: 10 }}
            >
              <Text style={{ color: "#ff8c52", fontSize: 18 }}>Sign-In</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  text1: {
    color: colors.gery3,
    fontSize: 16,
  },
  v1: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 22,
    color: "black",
    fontWeight: "bold"
  },
  v2: {
    justifyContent: "flex-start",
    backgroundColor: "white",
    paddingHorizontal: 15,
    marginTop: 10
  },
  v3: {
    marginTop: 5,
    marginBottom: 10,
  },
  text2: {
    fontSize: 15,
    color: colors.gery2
  },
  v4: {
    flexDirection: "row",
    borderWidth: 1,
    backgroundColor: colors.gery1,
    borderRadius: 12,
    paddingLeft: 5,
  },
  v5: {
    marginLeft: 30,
    maxWidth: "65%",
  },
  input1: {
    fontSize: 16,
    // marginLeft: -20,
    // marginBottom: -10
  },
  v6: {
    flexDirection: "row",
    borderWidth: 1,
    color: colors.gery4,
    borderRadius: 12,
    paddingLeft: 5,
    marginTop: 15,
    height: 48,
  },
  v7: {
    marginLeft: 0,
    maxWidth: "65%"
  },
  input2: {
    fontSize: 16,
    marginLeft: 0,
    marginBottom: 0,
  },
  v8: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.gery4,
    borderRadius: 12,
    paddingLeft: 5,
    marginTop: 20,
    height: 48,
  },
  v9: {
    marginLeft: 0,
    maxWidth: "65%",

  },
  input3: {
    fontSize: 16,
    marginLeft: 0,
    marginBottom: 0,
  },
  v10: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.gery4,
    borderRadius: 12,
    paddingLeft: 5,
    marginTop: 20,
    height: 48,
  },
  vp: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.gery4,
    borderRadius: 12,
    paddingLeft: 5,
    marginTop: 20,
    height: 48,
    justifyContent: "space-between"
  },
  email: {
    fontSize: 24,
    padding: 0,
    marginBottom: 0,
    marginTop: 11,
    marginLeft: 2,
  },
  password: {
    fontSize: 24,
    padding: 0,
    marginBottom: 0,
    marginTop: 11,
    marginRight: 2,
  },
  v11: {
    marginLeft: 30,
    maxWidth: "65%",
  },
  input4: {
    fontSize: 16,
    marginLeft: -20,
    marginBottom: -10
  },
  v13: {
    flexDirection: "row",
    height: 40,
  },
  v14: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.gery4,
    borderRadius: 12,
    paddingLeft: 5,
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  v15: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  text3: {
    fontSize: 13,
  },
  text4: {
    textDecorationLine: "underline",
    color: "green",
    fontSize: 13,
  },
  v16: {
    flexDirection: "row",
  },
  button1: {
    backgroundColor: colors.buttons,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderEndWidth: 1,
    borderColor: colors.buttons,
    height: 50,
    paddingHorizontal: 20,
    width: '100%',
  },
  title1: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -3,
  },
  v17: {
    marginVertical: 10,
    // marginTop: ,
  },
  v18: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15,
  },
  text5: {
    fontSize: 15,
    fontWeight: "bold",
  },
  v19: {
    backgroundColor: "white",
    paddingHorizontal: 15,
  },
  v20: {
    marginTop: 20,
  },
  v21: {
    marginTop: 5,
    alignItems: "flex-end"
  },
  button2: {
    backgroundColor: colors.buttons,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.buttons,
    height: 40,
    paddingHorizontal: 20,
  },

  title2: {
    color: colors.buttons,
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -3
  },


})