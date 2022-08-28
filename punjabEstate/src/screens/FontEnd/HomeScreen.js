import React, { useState } from 'react'
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView, FlatList, Pressable, Image, Dimensions
} from 'react-native'
import { colors, parameters } from '../../golbal/Styles'
import HomeHeader from '../../components/HomeHeader'
import { HouseData, AreaData } from "../../golbal/Data"
import AreaCard from '../../components/HouseCard'

// Import Part is End

// Function Part Is Start

const SCREEN_WIDTH = Dimensions.get('window').width

// Home Screen is Exprot
export default function HomeScreen({navigation}) {

  // Hook is use Start

  const [indexcheck, setIndexCheck] = useState("0")
  //

  // Return start


  return (

    // Header Start
    <View style={styles.container}>
      <HomeHeader navigation={navigation}/>
      {/* Main Screen Is Start */}

      <ScrollView
        showsVerticalScrollIndicator={true}
      >
   

        {/* Location And Time */}

      
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
            data={HouseData}
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
       

        <View style={{
          backgroundColor: colors.gery5,
          paddingVertical: 2
        }}>
          <Text style={{
            color: colors.gery1,
            fontSize: 25,
            paddingLeft: 10,
          }}>Suggestion Place</Text>
        </View>
        <View>
          <View style={{ flexDirection: "row", alignItems: 'center', marginTop: 5 }}>
            
          

          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 10, marginBottom: 10, }}
            horizontal={true}
            data={AreaData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View>
                <AreaCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  image={item.image}
                  Prices={item.Prices}
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
            data={AreaData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View>
                <AreaCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  image={item.image}
                  Prices={item.Prices}
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
            color: colors.gery1,
            fontSize: 25,
            paddingLeft: 10,
          }}>Beast Place In Your Area </Text>
        </View>
        <View style={{ width: SCREEN_WIDTH, paddingTop: 10 }}>
          {
            AreaData.map(item => (
              <View key={item.id} style={{ paddingBottom: 20 }}>
                <AreaCard
                  screenWidth={SCREEN_WIDTH * 0.95}
                  image={item.image}
                  Prices={item.Prices}
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