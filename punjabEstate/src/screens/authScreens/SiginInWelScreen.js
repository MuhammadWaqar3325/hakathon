import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { colors, parameters, title } from '../../golbal/Styles'
import Swiper from 'react-native-swiper'
import swiper1 from "../../assets/images/Swiper/Slide1.jpg"
import swiper2 from "../../assets/images/Swiper/Slide2.jpg"
import swiper3 from "../../assets/images/Swiper/Slide3.jpg"
import swiper4 from "../../assets/images/Swiper/Slide4.jpg"
import { Button } from 'react-native-paper'

export default function SiginInWelScreen({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{
                flex: 3, justifyContent: "flex-start",
                alignItems: "center",
                marginTop: 10, paddingTop: 20
            }}>
                <Text style={{ fontSize: 26, color: colors.buttons, fontWeight: "bold" }}>DISCOVER HOUSES</Text>
                <Text style={{ fontSize: 26, color: colors.buttons, fontWeight: "bold" }}>IN YOUR AREA</Text>
            </View>
            <View style={{ flex: 8, justifyContent: "center" }}>
                <Swiper autoplay={true}>
                    <View>
                        <Image source={swiper1}
                            style={{ height: "100%", width: "100%" }}
                        />
                    </View>
                    <View>
                        <Image source={swiper2}
                            style={{ height: "100%", width: "100%" }}
                        />
                    </View>
                    <View>
                        <Image source={swiper3}
                            style={{ height: "100%", width: "100%" }}
                        />
                    </View>
                    <View>
                        <Image source={swiper4}
                            style={{ height: "100%", width: "100%" }}
                        />
                    </View>
                </Swiper>
            </View>
            <View style={{ flex: 4 }}>
                <View style={{ marginTop: 30 }}>
                    <Button mode="contained" onPress={() => { navigation.navigate("SiginInScreen") }}
                        style={{
                            backgroundColor: "#ff8c52",
                            marginTop: 30,
                            marginHorizontal: 20,
                        }}
                    >
                        <Text style={{ fontSize: 20, paddingTop: 10 }}>SIGIN IN</Text>
                    </Button>
                </View>
                <View style={{ marginTop: 5 }}>
                    <Button mode="outlined" textColor='#ff8c52' onPress={() => navigation.navigate("RegisterScreen")}
                        style={{
                            marginTop: 25,
                            marginHorizontal: 20,
                        }}
                    >
                        <Text style={{ fontSize: 20, paddingTop: 10 }}>Create Your Account</Text>
                    </Button>
                </View>
            </View>
        </View>
    )
}

// const styles = StyleSheet.create({
//     slide1: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#9DD6EB",
//     },
//     slide2: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#97CA5E",
//     },
//     slide3: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#92BBD9",
//     },
// })