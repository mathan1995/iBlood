import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Block, Text } from "../components";
import * as theme from "../config/theme";

export default class IDoc extends Component {
    render() {
        return (
            <Block center middle color="white" style={styles.container}>
                <Text h1 bold>iBlood</Text>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: theme.colors.primary,
    },
})
