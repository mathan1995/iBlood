import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

export default class Home extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.header}> Hello From the Home component </Text>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() =>
                            this.props.navigation.navigate('Main')}
                    >
                        <Text>Main</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <Text style={styles.header}> Hello From the Home component </Text>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() =>
                            this.props.navigation.navigate('IDoc')}
                    >
                        <Text>Gradient</Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        margin: 10,
        padding: 5,
        borderColor: "blue",
        borderRadius: 20,
        elevation: 5
    },
    header: {
        color: "#fff",
        alignItems: "center",
        textAlign: "center"
    },
    buttonStyle: {
        color: "#fff",
        backgroundColor: "#20BDFF",
        borderRadius: 10,
        margin: 20,
        alignContent: "center",
        alignItems: "center",
        padding: 20,
    }
})