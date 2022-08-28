import React from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { colors, parameters } from '../golbal/Styles'


export default function Header({ title,type,navigation }) {
  return (
    <View style={styles.header}>
      <View>
        <FontAwesome5 style={{marginLeft:20,marginTop:5}}
          name={type}
          size={24}
          color={colors.headerText}
          onPress={()=>navigation.navigate("SiginInWelScreen")}
        />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: parameters.headerHight,
    backgroundColor: colors.buttons,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.headerText,
    marginLeft:20,
    marginTop:3,
    
  }

})
