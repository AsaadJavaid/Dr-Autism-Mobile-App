import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Linking } from 'react-native';

const GamesScreen = () => {
    const handlePress1 = async () => {
        const url = 'https://asaadkhan.itch.io/my-first-game'; // Replace with your desired URL
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        } else {
            console.log(`Unable to open URL: ${url}`);
        }
    };

    const handlePress2 = async () => {
        const url = 'https://asaadkhan.itch.io/cube-run'; // Replace with your desired URL
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        } else {
            console.log(`Unable to open URL: ${url}`);
        }
    };


    return (
        <View style={{ backgroundColor: "#B2A4FF", alignContent: "center" }}>
            <View style={[styles.profileIcon, {alignItems: "center", alignContent: "center"}]}>
                <View style={{alignContent: "center", alignItems: "center", backgroundColor: "#16B3C0", borderTopLeftRadius: 10, borderBottomLeftRadius: 30, borderTopRightRadius: 10, borderBottomRightRadius: 30, height: 170, width: 350 }}>
                    <ImageBackground source={require('../../../assets/Emotions/buttonIcons/gameTopIcon.jpg')} style={{ height: 150, width: 350 }} imageStyle={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 30, borderTopRightRadius: 10, borderBottomRightRadius: 30, marginTop: 20 }} />
                </View>
            </View>
            <ScrollView style = {{marginBottom : 200}}>
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 25 }}>
                    <TouchableOpacity onPress={handlePress1}>
                        <View style={{
                            height: 300,
                            width: 355,
                            backgroundColor: "#FF9B0F",
                            borderRadius: 20,
                            alignItems: "center",
                            marginBottom: 30,
                            shadowColor: "black",
                            shadowOffset: {
                                width: 0,
                                height: 10,
                            },
                            shadowOpacity: 0.5,
                            shadowRadius: 20,
                            elevation: 20,
                        }}>
                            <ImageBackground source={require('../../../assets/Emotions/buttonIcons/game1.jpg')} style={{ height: 250, width: 355 }} imageStyle={{ borderRadius: 20 }} />
                            <Text style={{ fontSize: 35, fontWeight: "bold", color: "#FCFC01" }}>Play Game</Text>
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 25 }}>
                    <TouchableOpacity onPress={handlePress2}>
                        <View style={{
                            height: 300,
                            width: 355,
                            backgroundColor: "#EECF29",
                            borderRadius: 20,
                            alignItems: "center",
                            marginBottom: 30,
                            shadowColor: "black",
                            shadowOffset: {
                                width: 0,
                                height: 10,
                            },
                            shadowOpacity: 0.5,
                            shadowRadius: 20,
                            elevation: 20,
                        }}>
                            <ImageBackground source={require('../../../assets/Emotions/buttonIcons/game2.jpg')} style={{ height: 250, width: 355 }} imageStyle={{ borderRadius: 20 }} />
                            <Text style={{ fontSize: 35, fontWeight: "bold", color: "#714171" }}>Play Game</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    profileIcon: {
        backgroundColor: "#16B3C0",
        width: "100%",
        height: "23%",
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
    },
});

export default GamesScreen;
