import React from 'react'
import { View, Text, StyleSheet, ImageBackground,Image } from 'react-native'
import { colors } from '../golbal/Styles'

export default function SearchCrad(
    OnPessFoodCard,
    restaurantName,
    deliveryAvailable,
    disccountPercent,
    numberOfReview,
    businessAddress,
    farAway,
    averageReview,
    image,
    screenWidth,
) {
    return (
        <View style={{flex:1}}>
            <View style={styles.view1}>
                <View style ={{height:200,}}>
                    <ImageBackground
                        style={{ height: 160,width:150, ...styles.imagestyle }}
                        source={image}
                    >
                        </ImageBackground>
                        <View style={styles.image}>
                            <Text style={styles.text1}>{averageReview}</Text>
                            <Text style={styles.text2}>{numberOfReview}Review</Text>
                        </View>

                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view1: {
        marginHorizontal:9,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    image: {
        position: "absolute",
        top: 0,
        right: 0,
        backgroundColor: 'rgba(52,52,0.4)',
        padding: 2,
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    imagestyle: {
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    text1: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: -3
    },

    text2: {
        color: "black",
        fontSize: 13,
        marginRight: 0,
        marginLeft: 0
    },
    text3: {
        fontSize: 10,
        fontWeight: "bold",
        color: colors.gery2
    },
    view2: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 5,
    },
    text4: {
        fontSize: 10,
        fontWeight: "bold",
        color: colors.gery2,
    },
    view3: {
        flexDirection: "column",
        marginHorizontal: 5,
        marginBottom: 10,
        marginLeft: 0,
    },
    text5: {
        fontSize: 17,
        fontWeight: "bold",
        color: colors.gery1,
    },
    view4: {
        flex: 4,
        flexDirection: "row",
        borderRightWidth: 1,
        borderRightColor: colors.gery4,
        paddingHorizontal: 5
    },
    view6: {
        fontSize: 12,
        fontWeight: "bold",
        paddingTop: 5,
        color: colors.gery3,
    },
    text6: {
        fontSize: 12,
        paddingTop: 5,
        color: colors.gery2,
        paddingHorizontal: 10,
    }

})