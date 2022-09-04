import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import SearchCrad from '../../components/SearchCrad'
import { restaurantsData } from '../../golbal/Data'

const SCREEN_WIDTH = Dimensions.get('window').width;
 


export default function ResultSearch({ navigation, route }) {
  return (
    <View style={{flex:1}}>
      <Text> {restaurantsData.length} Result for {route.params.item}</Text>
      <SearchCrad
        screenWidth={SCREEN_WIDTH}
         image={restaurantsData[0].image}
        averageReview={restaurantsData[0].averageReview}
        numberOfReview={restaurantsData[0].numberOfReview}
      />
    </View>
  )
}