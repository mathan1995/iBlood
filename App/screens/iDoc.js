import React, { Component } from 'react'
import { StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity, View, StatusBar } from 'react-native'
import { Block, Text } from "../components";
import * as theme from "../config/theme";
import * as mocks from "../mocks/mocks";

// import * as Font from 'expo-font';
export default class IDoc extends Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: "#D61B1F",
            color: "#fff",
            elevation: 0,       //remove shadow on Android
            shadowOpacity: 0,   //remove shadow on iOS
        },
        headerTitleStyle: {
            color: "#ffff"
        },

    };

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [
                {
                    id: 1,
                    bloodType: "B+",
                    name: "Mathan Jeya",
                    age: 24,
                    gender: 'male',
                    distance: 28,
                    duration: 12,
                    priority: "urgent"
                },
                {
                    id: 2,
                    bloodType: "0+",
                    name: "Sujeban Eleank",
                    age: 24,
                    gender: 'male',
                    distance: 28,
                    duration: 12,
                    priority: "urgent"
                },
                {
                    id: 3,
                    bloodType: "AB-",
                    name: "Thanoos Thanoos",
                    age: 24,
                    gender: 'male',
                    distance: 28,
                    duration: 12,
                    priority: "urgent"
                },
                {
                    id: 4,
                    bloodType: "A+",
                    name: "Dilux Dilux",
                    age: 24,
                    gender: 'male',
                    distance: 28,
                    duration: 12,
                    priority: "urgent"
                },
                {
                    id: 5,
                    bloodType: "A+",
                    name: "Mathan Jeya",
                    age: 24,
                    gender: 'male',
                    distance: 28,
                    duration: 12,
                    priority: "urgent"
                },
                {
                    id: 6,
                    bloodType: "A+",
                    name: "Mathan Jeya",
                    age: 24,
                    gender: 'male',
                    distance: 28,
                    duration: 12,
                    priority: "urgent"
                },
            ]
        }
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
        // const { user } = this.props;
        return (

            <Block flex={0.36} column style={{ paddingHorizondal: 15, margin: 10 }}>
                <StatusBar backgroundColor={theme.colors.primary} />
                <Block flex={false} row style={{ paddingVertical: 15, }}>
                    <Block center>
                        <Text h3 style={{ color: "#ffff" }}>Blood requests</Text>
                    </Block>
                    <TouchableOpacity activeOpacity={0.2}>
                        <Image style={styles.avatar} source={require('../assets/profile.jpg')} />
                    </TouchableOpacity>
                </Block>


                <Block card shadow color="white" style={styles.headerChart}>
                    <Block row space="between">
                        <Block style={{ paddingHorizondal: 30, marginLeft: 30 }}>
                            <Block flex={false} row center >
                                <Text h1>291</Text>
                                <Text caption bold style={{ color: "red" }}>-12%</Text>
                            </Block>
                            <Text caption Light >Available</Text>
                        </Block>
                        <Block style={{ paddingHorizondal: 30, marginRight: -80 }} >
                            <Block flex={false} row center>
                                <Text caption bold style={{ color: "orange" }}>-49%</Text>
                                <Text h1 style={{ marginLeft: 5 }}>481</Text>
                            </Block>
                            <Text caption Light style={{ marginLeft: 35, color: "gray" }}>Requests</Text>
                        </Block>
                    </Block>
                </Block>
            </Block>
        )
    }

    renderRequest(request) {
        return (
            <Block card shadow color="white" style={{ paddingTop: 100, elevation: 2, margin: 5 }}>
                <Text>{request.id}</Text>
            </Block>
        )
    }


    renderData() {
        return this.state.dataSource.map((dataSource, index) => {
            const { id, name, bloodType, priority, age, gender, distance, duration } = dataSource //De structuring
            return (
                <TouchableOpacity activeOpacity={0.2} key={id}>
                    <Block row card shadow color="white" style={styles.requestBlockStyle} key={id}>
                        <Block flex={0.24} card column color="secondary" style={styles.requestStatus}>
                            <Block flex={0.25} middle center color={theme.colors.primary}>
                                <Text small center style={{ textTransform: 'uppercase', color: "white" }}>{priority}</Text>
                            </Block>
                            <Block flex={0.7}>
                                <Text h1 center style={{ color: "white" }}>{bloodType}</Text>
                            </Block>
                        </Block>
                        <Block flex={0.76} column middle>
                            <Text h3 bold >
                                {name}
                            </Text>
                            <Text caption semibold>
                                {age} * {gender} * {distance}km * {duration}hrs
                            </Text>
                        </Block>
                    </Block>
                </TouchableOpacity>
            )
        })
    }

    renderRequests() {
        // const { requests } = request.user;
        return (
            <Block flex={0.8} column color="gray2" style={styles.requestsStyle}>
                <Block row space="between" style={styles.requestHeader}>
                    <Text>Recent Updates</Text>
                    <Text>View All</Text>
                </Block>

                <ScrollView showsVerticalScrollIndicator={false}>
                    {this.renderData()}
                </ScrollView>
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
//Getting Mocks
IDoc.defaultProps = {
    avatar: mocks.user,
    // requests: requests,
    chart: mocks.chart
};


const styles = StyleSheet.create({
    safe: {
        // backgroundColor: theme.colors.primary,
        flex: 1,
        backgroundColor: theme.colors.primary
    },
    headerChart: {
        paddingTop: 30,
        // paddingBottom: 85,,

        zIndex: 1,
        elevation: 5,
    },
    requestsStyle: {
        marginTop: -40,
        paddingTop: 55 + 20,
        paddingHorizontal: 15,
        zIndex: -1,
        color: "#ffffff",
    },
    requestHeader: {
        paddingHorizontal: 0,
        paddingVertical: 0
    },
    avatar: {
        height: 30,
        width: 30,
        borderRadius: 50
    },
    requestBlockStyle: {
        marginBottom: 15,
        padding: 12,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
    },
    requestStatus: {
        overflow: "hidden",
        height: 90,
        width: 90,
        marginRight: 20,
    }
})
