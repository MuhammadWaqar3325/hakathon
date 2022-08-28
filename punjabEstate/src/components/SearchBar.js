import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, Modal, TextInput, FlatList, TouchableOpacity, Keyboard } from 'react-native'
import * as Anmatable from 'react-native-animatable'
import { filterData } from '../golbal/Data'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../golbal/Styles'
import { filter } from 'lodash'

export default function SearchBar() {
    
    const navigation = useNavigation();

    const [data, setData] = useState([...filterData])
    const [modalVisiable, setModalVisiable] = useState(false)
    const [textInputFoussed, setTextInputFoussed] = useState(true)
    const textInput = useRef(0)
    
    const contains = ({name},query)=>{
        if(name.includes(query)){
            return true
        }
        return false
    }

   const handleSearch=text=>{
       const data = filter(filterData ,userSearch=>{
           return contains (userSearch,text)
       }) 
setData([...data])
    }

    return (

        <View>
            <TouchableWithoutFeedback
                onPress={() => { setModalVisiable(true) }}
            >
                <View style={styles.Searcharea}>
                    <Icon
                        name='search'
                        style={styles.Searchicon}
                        size={5}

                    />
                    <Text style={{ fontSize: 15, }}>what are you looking for ?</Text>
                </View>
            </TouchableWithoutFeedback>

            <Modal
                animationType='fade'
                transparent={false}
                visible={modalVisiable}
            >
                <View style={{ flex: 1 }}>
                    <View style={styles.view1}>
                        <View style={styles.textinput}>
                            <Anmatable.View
                                animation={textInputFoussed ? "fadeInRight" : "fadeInLeft"}
                                duration={400}
                            >
                                <Icon
                                    name={textInputFoussed ? "arrow-left" : "search"}
                                    onPress={
                                        () => {
                                            if (textInputFoussed)
                                                setModalVisiable(false)
                                            setTextInputFoussed(true)
                                        }
                                    }
                                    style={styles.icon2}
                                />
                            </Anmatable.View>

                            <TextInput
                                style={{ width: "83%" }}
                                placeholder=""
                                autoFocus={false}
                                ref={textInput}

                                onFocus={()=>{
                                    setTextInputFoussed(true)
                                }}
                                onBlur={()=>{
                                    setTextInputFoussed(false)
                                }}
                              onChangeText={handleSearch}
                                
                            />

                            <Anmatable.View
                                animation={textInputFoussed ? "fadeInLeft" : ""}
                                duration={400}

                            >
                                <MaterialIcons
                                    size={23}
                                    name={textInputFoussed ? "cancel" : null}
                                    style={{ color: colors.gery3, marginRight: 10 }}
                                    onPress={() => {
                                        textInput.current.clear()
                                        // handleSearch()
                                    }}
                                />

                            </Anmatable.View>
                        </View>
                    </View>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => {
                                    Keyboard.dismiss
                                    navigation.navigate("ResultSearch", { item: item.name })
                                    setModalVisiable(false)
                                    setTextInputFoussed(true)
                                }}
                            >
                                <View style={styles.view2}>
                                    <Text style={{ color: colors.gery2, fontSize: 15 }}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>

                        )}
                        keyExtractor={item => item.id}
                    />

                </View>
            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text1: {
        color: colors.gery3,
        fontSize: 16,
    },
    textinput: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 1,
        borderColor: "#86939e",
        flexDirection: "row",
        alignContent: 'center',
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
    },
    Searcharea: {
        marginTop: 10,
        width: "95%",
        height: 50,
        backgroundColor: colors.gery5,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.gery4,
        flexDirection: "row",
        alignItems: "center",
    },
    Searchicon: {
        fontSize: 24,
        padding: 5,
        color: colors.gery2,
        marginLeft: 5,

    },
    view1: {
        height: 70,
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    view2: {
        flexDirection: "row",
        padding: 15,
        alignItems: "center"
    },
    icon2: {
        fontSize: 24,
        padding: 5,
        color: colors.gery2,
        marginRight: 5,

    }


})