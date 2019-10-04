import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import MainNavigator from "./App/stackNavigator"
import Iblood from "./App/screens/iDoc"
export default class App extends Component {
  render() {
    return (

      <MainNavigator />
      // <Iblood />
    )
  }
}

const styles = StyleSheet.create({})
