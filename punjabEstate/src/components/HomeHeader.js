import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { withBadge } from '@rneui/base'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import { colors, parameters } from '../golbal/Styles'

const FontAwesome5 = withBadge(0)(Icon)


export default function HomeHeader({navigation}) {
    return (

        <View style={styles.header}>
            <View style={{
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 15
            }}>
                <Feather
                    name="menu"
                    size={28}
                    color={colors.headerText}
                    onPress={()=>{navigation.toggleDrawer()}}
                />
            </View>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>LAA JAWAB</Text>
            </View>
            <View style={{
                alignItems: "center",
                justifyContent: "center",
                marginRight: 15
            }}>
                <FontAwesome5
                    name="shopping-cart"
                    size={28}
                    color={colors.headerText}
                    onPress={() => alert("SiginInWelScreen")}

                />

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: colors.buttons,
        height: parameters.headerHight,
        justifyContent: "space-between"
    }
})
