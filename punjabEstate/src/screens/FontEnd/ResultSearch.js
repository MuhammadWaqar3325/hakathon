import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import SearchCrad from '../../components/SearchCrad'
import { HouseData } from '../../golbal/Data'

const SCREEN_WIDTH = Dimensions.get('window').width;
 


export default function ResultSearch({ navigation, route }) {
  return (
    <View style={{flex:1}}>
      <Text> {HouseData.length} Result for {route.params.item}</Text>
      <SearchCrad
        screenWidth={SCREEN_WIDTH}
         image={HouseData[0].image}
        averageReview={HouseData[0].averageReview}
        numberOfReview={HouseData[0].numberOfReview}
      />
    </View>
  )
}