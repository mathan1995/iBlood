import React, { Component } from 'react'
import { StyleSheet, Image, SafeAreaView } from 'react-native'
import { Block, Text } from "../components";
import * as theme from "../config/theme";
// import * as Font from 'expo-font';
export default class IDoc extends Component {
    state = {
        fontsLoaded: false,
    }

    // loadFonts() {
    //     return Font.loadAsync({
    //         "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    //         "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    //         "Montserrat-semiBold": require("/assets/fonts/Montserrat-semiBold.ttf"),
    //         "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    //         "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
    //     });
    // }

    // async componentDidMount() {
    //     await this.loadFonts();
    //     this.setState({ fontsLoaded: true });
    // }

    renderHeader() {
        return (
            <Block flex={0.36} column style={{ paddingHorizondal: 15, margin: 10 }}>
                <Block flex={false} row style={{ paddingVertical: 15, }}>
                    <Block center>
                        <Text h3 style={{ color: "#ffff" }}>Blood requests</Text>
                    </Block>
                </Block>

                {/* <Image style={styles.avatar} source={} /> */}
                <Block card shadow color="white" style={styles.headerChart}>
                    <Block row style={{ paddingHorizondal: 100, }}>
                        <Block >
                            <Block row center>
                                <Text h1>291</Text>
                                <Text caption bold tertiary>-12%</Text>
                            </Block>
                            <Text caption Light >Available</Text>
                        </Block>
                        <Block >
                            <Block row center>
                                <Text caption bold tertiary>-12%</Text>
                                <Text h1>291</Text>
                            </Block>
                            <Text caption Light>Available</Text>
                        </Block>
                    </Block>
                </Block>
            </Block>
        )
    }

    renderRequests() {
        return (
            <Block flex={0.8} column color="gray2" style={styles.requests}>
                <Block row space="between">
                    <Text>Recent Updates</Text>
                    <Text>View All</Text>
                </Block>
            </Block>
        )
    }
    render() {


        return (
            <SafeAreaView style={styles.safe}>
                {this.renderHeader()}
                {this.renderRequests()}
            </SafeAreaView>
        );

    }
}

const styles = StyleSheet.create({
    safe: {
        // backgroundColor: theme.colors.primary,
        flex: 1,
        backgroundColor: theme.colors.primary
    },
    headerChart: {
        paddingTop: 30,
        paddingBottom: 45,
        zIndex: 1,
    },
    requests: {
        marginTop: -40,
        paddingTop: 55 + 20,
        paddingHorizontal: 15,
        zIndex: -1,
    }
})
