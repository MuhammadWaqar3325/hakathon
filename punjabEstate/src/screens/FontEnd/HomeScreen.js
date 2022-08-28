import React, { useState } from 'react'
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView, FlatList, Pressable, Image, Dimensions
} from 'react-native'
import CountDown from 'react-native-countdown-component'
import { colors, parameters } from '../../golbal/Styles'
import HomeHeader from '../../components/HomeHeader'
import Icon from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { filterData, restaurantsData } from "../../golbal/Data"
import FoodCard from '../../components/FoodCard'

// Import Part is End

// Function Part Is Start

const SCREEN_WIDTH = Dimensions.get('window').width

// Home Screen is Exprot
export default function HomeScreen({navigation}) {

  // Hook is use Start

  const [delivery, setDelivery] = useState(true)
  const [indexcheck, setIndexCheck] = useState("0")
  //

  // Return start


  return (

    // Header Start
    <View style={styles.container}>
      <HomeHeader navigation={navigation}/>
      {/* Main Screen Is Start */}

      <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={true}
      >
        {/* top Button is start */}
        <View>
          <View style={{
            marginTop: 0, justifyContent: "space-evenly",
            flexDirection: "row",
            backgroundColor: "white",
            paddingVertical: 15,
            marginHorizontal: 1
          }}>
            <TouchableOpacity
              onPress={() => {
                setDelivery(true)
              }}
            >
              <View style={{ ...styles.deliverybutton, backgroundColor: delivery ? colors.buttons : colors.gery5 }}>
                <Text style={styles.deliverytext}>Delivery</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setDelivery(false)
                navigation.navigate('MapScreen')
              }}
            >
              <View style={{ ...styles.deliverybutton, backgroundColor: delivery ? colors.gery5 : colors.buttons }}>
                <Text style={styles.deliverytext}>Pick Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Top Butuon is End  */}

        {/* Location And Time */}

        <View style={styles.filterView}>
          <View style={styles.location}>
            <View style={{ flexDirection: "row", alignItems: "center", paddingLeft: 5 }}>
              <Icon
                name='location-sharp'
                color={colors.gery1}
                size={20}
              />
              <Text style={{
                marginLeft: 5,
                color: colors.gery1,
                fontSize: 18,
              }}>22 Bessie Street</Text>
            </View>
            <View style={styles.clock}>
              <FontAwesome5
                name='clock'
                color={colors.gery1}
                size={20}
              />
              <Text style={{
                marginLeft: 5,
                color: colors.gery1,
                fontSize: 18,
              }}>Now</Text>
            </View>
          </View>
          <View style={{ alignItems: "center", marginTop: 8 }}>
            <MaterialIcons
              name='tune'
              color={colors.gery1}
              size={28}
              
            />
          </View>

          {/* Location And Time */}

          {/* Small Button */}

        </View>
        <View style={{
          backgroundColor: colors.gery5,
          paddingVertical: 2
        }}>
          <Text style={{
            color: colors.gery2,
            fontSize: 25,
            paddingLeft: 10,
          }}>Categories</Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={(item) => item.id}
            extraData={indexcheck}
            renderItem={({ item, index }) => (
              <Pressable
                onPress={() => { setIndexCheck(item.id) }}
              >
                <View style={indexcheck === item.id ? { ...styles.smallcardseleted } :
                  { ...styles.smailcard }}>
                  <Image
                    style={{ height: 60, width: 60, borderRadius: 30 }}
                    source={item.image}
                  />
                  <View style={{ marginTop: 3 }}>
                    <Text style={indexcheck === item.id ? { ...styles.cts } : { ...styles.ct }}>{item.name}</Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>
        {/* Small Button end */}

        {/* Large  Button */}

        <View style={{
          backgroundColor: colors.gery5,
          paddingVertical: 2
        }}>
          <Text style={{
            color: colors.gery2,
            fontSize: 25,
            paddingLeft: 10,
          }}>Free Delivery Now</Text>
        </View>
        <View>
          <View style={{ flexDirection: "row", alignItems: 'center', marginTop: 5 }}>
            <Text style={{
              marginLeft: 15,
              marginTop: -10,
              fontSize: 16,
              marginRight: 5,
              color: colors.gery2

            }}>Options Chaning in :</Text>
            <CountDown
              until={3600}
              size={14}
              digitStyle={{ backgroundColor: "#66DF48" }}
              digitTxtStyle={{ color: colors.gery1 }}
              timeToShow={['M', 'S']}
              timeLabels={{ m: 'Min', s: 'Sec' }}
            />

          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 10, marginBottom: 10, }}
            horizontal={true}
            data={restaurantsData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  image={item.image}
                  restaurantName={item.restaurantName}
                  farAway={item.forAway}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                  businessAddress={item.businessAddress}
                />
              </View>
            )}
          />
        </View>

        <View style={{
          backgroundColor: colors.gery5,
          paddingVertical: 2
        }}>
          <Text style={{
            color: colors.gery2,
            fontSize: 25,
            paddingLeft: 10,
          }}>Promotions Available</Text>
        </View>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 10, marginBottom: 10, }}
            horizontal={true}
            data={restaurantsData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  image={item.image}
                  restaurantName={item.restaurantName}
                  farAway={item.forAway}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                  businessAddress={item.businessAddress}
                />
              </View>
            )}
          />
        </View>

        <View style={{
          backgroundColor: colors.gery5,
          paddingVertical: 2
        }}>
          <Text style={{
            color: colors.gery2,
            fontSize: 25,
            paddingLeft: 10,
          }}>Restaurant In Your Area </Text>
        </View>
        <View style={{ width: SCREEN_WIDTH, paddingTop: 10 }}>
          {
            restaurantsData.map(item => (
              <View key={item.id} style={{ paddingBottom: 20 }}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.95}
                  image={item.image}
                  restaurantName={item.restaurantName}
                  farAway={item.forAway}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                  businessAddress={item.businessAddress}
                />
              </View>
            ))
          }
        </View>
        {/* Large  Button End */}
      </ScrollView>

      {
        delivery &&
        <View style={styles.map}>
        <TouchableOpacity
        onPress={()=>{navigation.navigate("MapScreen")}}
        >
          <Entypo
          name='location-pin'
          size={28}
          color={colors.buttons}
          style={{marginTop:5}}
          />
          <Text>Map</Text>
        </TouchableOpacity>
      </View>
      }

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  deliverybutton: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 15,
  },
  deliverytext: {
    marginLeft: 5,
    fontSize: 16,
    color: "black"
  },

  filterView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10
  },
  location: {
    flexDirection: "row",
    backgroundColor: colors.gery4,
    paddingVertical: 3,
    marginTop: 10,
    borderRadius: 18,
    paddingHorizontal: 20,
  },
  clock: {
    flexDirection: "row",
    marginLeft: 20,
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 10,
    borderRadius: 18,
    paddingVertical: 3
  },
  smailcard: {
    borderRadius: 30,
    backgroundColor: colors.gery5,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 80,
    margin: 10,
    height: 100
  },
  smallcardseleted: {
    borderRadius: 30,
    backgroundColor: colors.buttons,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 80,
    margin: 10,
    height: 100
  },
  cts: {
    fontWeight: "bold",
    color: "white"
  },
  ct: {
    fontWeight: "bold",
    color: colors.gery2
  },
  map: {
    position: "absolute",
    height: 60,
    width: 60,
    alignItems: "center",
    backgroundColor: colors.gery5,
    bottom: 10,
    right: 10,
    elevation: 10,
    borderRadius: 30,
  }


})