import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, StatusBar, Image, ScrollView } from 'react-native'
import * as theme from "../config/theme";

import Icon from "../assets/inject.png";
import Icon2 from "../assets/blood-donation.png";
import Icon3 from "../assets/friendship.png"
export default class Home extends Component {
    static navigationOptions = {
        title: '',
        headerStyle: {
            backgroundColor: "#FFF",
            color: "#fff",
            elevation: 0,       //remove shadow on Android
            shadowOpacity: 0,   //remove shadow on iOS
        },
        headerTitleStyle: {
            color: "#ffff"
        },

    };
    render() {
        return (
            <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <StatusBar backgroundColor={theme.colors.white} />
                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate('Main')}
                    >
                        <View style={styles.container} >
                            <Image source={Icon} style={styles.icon} />
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate('IDoc')}
                    >
                        <View style={styles.container} >
                            <Image source={Icon2} style={styles.icon} />
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate('IDoc')}
                    >
                        <View style={styles.container} >
                            <Image source={Icon3} style={styles.icon} />
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate('IDoc')}
                    >
                        <View style={styles.container} >
                            <Image source={Icon3} style={styles.icon} />
                        </View>

                    </TouchableOpacity>

                </ScrollView>

                <ScrollView showsVerticalScrollIndicator={false} style={styles.Scrollcard} >
                    <View style={styles.gadgets}>

                        <TouchableOpacity style={styles.card}>
                            <Text>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card}>
                            <Text>2</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.gadgets}>
                        <TouchableOpacity style={styles.card}>
                            <Text>3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card}>
                            <Text>4</Text>
                        </TouchableOpacity>
                    </View>


                </ScrollView>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        margin: 10,
        padding: 0,
        borderColor: "blue",
        borderRadius: 20,
        shadowColor: "gray",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 5,
        height: 130,
        width: 140
    },
    header: {
        color: "#fff",
        alignItems: "center",
        textAlign: "center"
    },
    buttonStyle: {
        color: "#fff",
        backgroundColor: "#FFF",
        borderRadius: 10,
        margin: 20,
        color: "#FFF",
        alignContent: "center",
        alignItems: "center",
        padding: 20,
    },
    icon: {
        height: 100,
        width: 100,
        margin: 20,
        borderRadius: 20
    },
    card: {
        backgroundColor: "#FEFEFE",
        margin: 10,
        paddingTop: 20,
        borderColor: "blue",
        borderRadius: 15,

        paddingBottom: 0,
        elevation: 5,
        height: 170,
        width: 160

    },
    Scrollcard: {
        marginBottom: 0
    },
    gadgets: {
        flex: 1,
        flexDirection: "row",
        margin: 10
    },
    gadgetsView: {
        marginLeft: 10
    }
})