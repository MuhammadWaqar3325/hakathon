import React from 'react'
import {
    View, Text, FlatList,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    Dimensions
} from 'react-native'
import SearchBar from '../../components/SearchBar'
import { filterData } from '../../golbal/Data'
import { colors } from '../../golbal/Styles'

const SCREEN_WIDTH = Dimensions.get('window').width

export default function SearchScreen({navigation}) {
    return (
        <View style={{paddingHorizontal:10}}>
            <SearchBar navigation={navigation} />
            <View style={{marginBottom:120}}>
                <FlatList
                    ListHeaderComponent={<Text style={styles.listheader}>categoies</Text>}
                    showsHorizontalScrollIndicator={false}
                    numcolums={2}
                    style={{ marginBottom: 1 }}
                    data={filterData}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableWithoutFeedback
                        onPress={()=>navigation.navigate("ResultSearch",{ item: item.name })}
                        >
                            <View style={styles.imageview}>
                                <ImageBackground style={styles.image}
                                    source={item.image}
                                >
                                    <View style={styles.textview}>
                                        <Text style={{color:"white"}}>{item.name}</Text>
                                    </View>
                                </ImageBackground>
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    image: {
        height: SCREEN_WIDTH * 0.9,
        width: SCREEN_WIDTH * 0.9,
        borderRadius: 10,
    },
    imageview: {
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        height: SCREEN_WIDTH * 0.9,
        width: SCREEN_WIDTH * 0.9,
        marginLeft: SCREEN_WIDTH * 0.035,
        marginBottom: SCREEN_WIDTH * 0.035,
    },
    listheader: {
        fontSize: 18,
        color: colors.gery2,
        paddingBottom: 10,
        marginLeft: 12,
        marginTop:5,
fontWeight:"bold",
marginBottom:5
        
    },
    textview: {
        height: SCREEN_WIDTH * 0.9,
        width: SCREEN_WIDTH * 0.9,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(52,52,52,0.5)",
       
    }

})