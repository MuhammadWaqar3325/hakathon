import React, { useState, useContext, useEffect } from 'react'
import { View, Text, Linking, Pressable, Alert, Switch, StyleSheet, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView, DrawerItemList, Drawer, DrawerItem } from '@react-navigation/drawer'
import { Avatar, Button } from 'react-native-paper'
import Pro from '../assets/images/Profile/waqar.jpg'
import { colors } from "../golbal/Styles"
import Icon from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import auth from '@react-native-firebase/auth'

export default function DrawerContent(props) {

    async function signOut() {
        try {
            auth().signOut().then(
                () => {
                    console.log("USER IS SIGN OUT")
                }
            )
        } catch (error) {
            alert("SomeThing is Wrong")
        }
    }

    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={{ backgroundColor: colors.buttons, }} >
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: 'center',
                            backgroundColor: colors.buttons,
                            paddingVertical: 15,
                            paddingLeft: 15
                        }}
                    >
                        <Avatar.Image
                            size={75}
                            source={Pro}
                        />
                        <View style={{ paddingLeft: 10 }}>
                            <Text
                                style={{
                                    fontWeight: "bold",
                                    color: "white",
                                    fontSize: 18
                                }}
                            >Muhammad Waqar</Text>
                            <Text
                                style={{
                                    color: "white",
                                    fontSize: 14
                                }}
                            >ranawaqar3325@gmail.com</Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                    }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ margin: 10, alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>1</Text>
                                <Text style={{ color: "white", fontSize: 14 }}>My Favoites</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", }}>
                            <View style={{ margin: 10, alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>0</Text>
                                <Text style={{ color: "white", fontSize: 14 }}>My Card</Text>
                            </View>
                        </View>
                    </View>

                </View>
                <DrawerItemList {...props} />

                <DrawerItem
                    label="Payment"
                    icon={({ color, size }) => (
                        <Icon
                            name='credit-card'
                            color={color}
                            size={size}
                        />
                    )}
                />


                <DrawerItem
                    label="Promotions"
                    icon={({ color, size }) => (
                        <Icon
                            name='tag'
                            color={color}
                            size={size}
                        />
                    )}
                />


                <DrawerItem
                    label="setting"
                    icon={({ color, size }) => (
                        <AntDesign
                            name='setting'
                            color={color}
                            size={size}
                        />
                    )}
                />


                <DrawerItem
                    label="Help"
                    icon={({ color, size }) => (
                        <Icon
                            name='hospital-symbol'
                            color={color}
                            size={size}
                        />
                    )}
                />

                <View style={{ borderWidth: 1, backgroundColor: colors.gery5 }}>
                    <Text style={styles.Pre}>Preferences</Text>
                </View>
                <View style={styles.switch}>
                    <Text style={styles.Drak}>Drak mode </Text>
                    <View>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={"#fuf3f4"}
                        />

                    </View>
                </View>
            </DrawerContentScrollView>

            
                <DrawerItem
                    label="SiginOut"
                    icon={({ color, size }) => (
                        <Feather
                            name='log-out'
                            color={color}
                            size={size}
                            onPress={() => { signOut() }}
                        />
                    )}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Pre: {
        fontSize: 16,
        color: colors.gery2,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,

    },

    switch: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingVertical: 5,
        paddingRight: 10,
    },
    Drak: {
        fontSize: 16,
        color: colors.gery2,
        paddingTop: 10,
        paddingLeft: 0,
        fontWeight: "blod"
    }


})