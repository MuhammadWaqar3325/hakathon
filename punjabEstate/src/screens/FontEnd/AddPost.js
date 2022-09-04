import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { launchImageLibrary } from 'react-native-image-picker';

import { TextInput, Button, } from 'react-native-paper';

export default function AddPost() {
    const [selectImage, setselectImage] = useState('');
    const [url, setUrl] = useState('');
    const [productTitle, setproductTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

  



    const submitHandler = async () => {
        await storage()
            .ref(`images/${selectImage.fileName}`)
            .putFile(selectImage.uri);

        const url = await storage()
            .ref(`images/${selectImage.fileName}`)
            .getDownloadURL();
        console.log(url);
        setUrl(url);

        const obj = {
            productTitle,
            category,
            price,
            description,
            image: url,
        };

        console.log(obj);
        firestore()
            .collection('Users')
            .add(obj)
            .then(() => {
                console.log('User added!');
            });
        setproductTitle('');
        setCategory('');
        setPrice('');
        setDescription('');
    };

    let options = {
        title: 'Select Image',
        customButtons: [
            { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
        ],
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };
    const selectIamge = async () => {
        const result = await launchImageLibrary(options, res => {
            console.log(res);
            setselectImage(res.assets[0]);
        });
    };
    return (
        <View>
            
            <TextInput
                placeholder="Product Title"
                w="45%"
                value={productTitle}
                onChangeText={e => setproductTitle(e)}
            />

            <TextInput
                mx="2"
                placeholder="Category"
                w="45%"
                value={category}
                onChangeText={e => setCategory(e)}
            />


            <TextInput
                type="file"
                placeholder="Price"
                w="45%"
                value={price}
                keyboardType={'numeric'}
                onChangeText={e => setPrice(e)}
            />
            <TextInput
                mx="2"
                placeholder="Description"
                w="45%"
                value={description}
                onChangeText={e => setDescription(e)}
            />


            <View style={{ paddingTop: 20, paddingBottom: 20, display: "flex", flexDirection: "row", justifyContent: "center" }}>

                <Image
                    source={{ uri: selectImage.uri }}
                    style={{ width: "100%", height: 150 }}
                />
            </View>
            <Button onPress={selectIamge}>
                Select Image
            </Button>
            <Button >
                Post
            </Button>

        </View>
    )
}