import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native'
import { colors, parameters } from '../golbal/Styles'
// import { restaurantsData } from '../golbal/Data'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

// const SCREEN_WIDTH = Dimensions.get('window').width

export default function FoodCard({
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
}) {
    return (

        <TouchableOpacity>
            <View style={{ ...styles.cardView, width: screenWidth }}>
                <Image
                    style={{ ...styles.image, width: screenWidth }}
                    source={image}
                />

                <View>
                    <View>
                        <Text style={styles.restaurantName}>{restaurantName}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={styles.distance}>
                            <MaterialIcons
                                name='place'
                                color={colors.gery2}
                                style={{ marginTop: 3, }}
                            />
                            <Text style={styles.Min}>{farAway} Min</Text>
                        </View>
                        <View style={{ flex: 9, flexDirection: "row" }}>
                            <Text style={styles.address}>{businessAddress}</Text>
                        </View>
                    </View>
                </View>
            </View>


            <View style={styles.review}>
                <Text style={styles.average}>{averageReview}</Text>
                <Text style={{ fontSize: 13, marginRight: 0, color: "white" }}>{numberOfReview} Review</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardView: {
        marginHorizontal: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderWidth: 1,
        borderColor:colors.gery5,
        backgroundColor: colors.gery5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
    },
    image: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        height: 160,
    },
    restaurantName: {
        fontSize: 17,
        fontWeight: "bold",
        color: colors.gery1,
        marginTop: 5,
        
    },
    distance: {
        flex: 4,
        flexDirection: "row",
        borderRightColor: colors.gery4,
        borderRightWidth: 1,
        paddingHorizontal: 5,
    },
    Min: {
        fontSize: 12,
        fontWeight: "bold",
        paddingTop: 5,
        color: colors.gery3,
        marginLeft: 10
    },
    address: {
        fontSize: 12,
        fontWeight: "bold",
        paddingTop: 5,
        color: colors.gery2,
        paddingHorizontal: 10,
    },
    review: {
        position: "absolute",
        top: 0,
        right: 9,
        backgroundColor: 'rgba(52,52,52,0.4)',
        padding: 2,
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 12,
    },
    average: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: -3,
    }


})