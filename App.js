import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Directions } from 'react-native-gesture-handler';


export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      golTeamOne: 0,
      golTeamTwo: 0,
      resultadoOne: 0,
      resultadoTwo: 0
    }
  }
  golTeamOne = () => {

    let newGoal = this.state.golTeamOne + 1
    this.setState({ golTeamOne: newGoal })

  }
  golTeamTwo = () => {

    let newGoal = this.state.golTeamTwo + 1
    this.setState({ golTeamTwo: newGoal })

  }

  desmarkGolOne = () => {

    let newGoal = this.state.golTeamOne - 1
    this.setState({ golTeamOne: newGoal })
  }
  desmarkGolTwo = () => {

    let newGoal = this.state.golTeamTwo - 1
    this.setState({ golTeamTwo: newGoal })
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.teamOneContainer}>
          <Text style={styles.numberLabel}>{this.state.golTeamOne}</Text>
          <Text style={styles.teamNameLabel}>Time Rodrigo</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonRemove} onPress={() => this.desmarkGolOne()}>
              <Text style={styles.buttonLabel}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonAdd} onPress={() => this.golTeamOne()}>
              <Text style={styles.buttonLabel}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.teamTwoContainer}>
          <Text style={styles.numberLabel}>{this.state.golTeamTwo}</Text>
          <Text style={styles.teamNameLabel}>Time Italo</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonRemove} onPress={() => this.desmarkGolTwo()}>
              <Text style={styles.buttonLabel}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonAdd} onPress={() => this.golTeamTwo()}>
              <Text style={styles.buttonLabel}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7d7d',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  teamOneContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 35,
    padding: 10,
  },
  teamTwoContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 25,
    padding: 10,
  },
  numberLabel: {
    flex: 3,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 70,
    fontWeight: 'bold',
    color: 'black',
  },
  teamNameLabel: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 25,
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'row'
  },
  buttonAdd: {
    flex: 1,
    backgroundColor: 'green',
    borderRadius: 15,
    margin: 15
  },
  buttonRemove: {
    flex: 1,
    backgroundColor: 'red',
    borderRadius: 15,
    margin: 15
  },
  buttonLabel: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 30,
    color: 'white'
  }
});


