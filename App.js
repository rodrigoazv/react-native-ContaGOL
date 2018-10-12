import React , { Component } from 'react';
import { StyleSheet, Text, View , TouchableOpacity  } from 'react-native';

import { Directions } from 'react-native-gesture-handler';
  



export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {golTeamOne: 0 , golTeamTwo: 0, resultadoOne: 0, resultadoTwo: 0 }
  }
    golTeamOne = () => {

      this.state.golTeamOne = this.state.golTeamOne +1
      let goal = this.state.golTeamOne

      let stateOne = this.state

      stateOne.resultadoOne = goal

      this.setState(stateOne)
      
    }
    golTeamTwo = () => {
      this.state.golTeamTwo = this.state.golTeamTwo + 1
      let goal = this.state.golTeamTwo

      let stateTwo = this.state

      stateTwo.resultadoTwo = goal
      this.setState(stateTwo)


    }

    desmarkGolOne = () => {
      
      this.state.golTeamOne = this.state.golTeamOne - 1
      let goal = this.state.golTeamOne

      let stateOne = this.state

      stateOne.resultadoOne = goal

      this.setState(stateOne)

    }
    desmarkGolTwo = () => {

      this.state.golTeamTwo = this.state.golTeamTwo - 1
      let goal = this.state.golTeamTwo

      let stateTwo = this.state

      stateTwo.resultadoTwo = goal
      this.setState(stateTwo)


    }


  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.teamStruct}>
        
          <Text>TeamOne</Text>
          <Text>TeamTwo</Text>

        </View>
        <View style={styles.teamStructTwo}>
          <Text style={styles.result}>{this.state.resultadoOne}</Text>

          <Text style={styles.result}>{this.state.resultadoTwo}</Text>
        </View>
        <View style={styles.buttonStruct}>
          <TouchableOpacity style={styles.button} onPress= {this.golTeamOne} ><Text style={styles.buttonText}>GolTeamOne</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress= {this.desmarkGolOne} ><Text style={styles.buttonText}>TiraTeamOne</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress= {this.golTeamTwo} ><Text style={styles.buttonText}>GolTeamTwo</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress= {this.desmarkGolTwo} ><Text style={styles.buttonText}>TiraTeamTwo</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7d7d',
    paddingTop: 100,
  },
  teamStruct:{
    flexDirection:'row',
    justifyContent: 'space-around', 
    backgroundColor:'#4f4f',

  },
  teamStructTwo:{
    flex: 1,
    justifyContent: 'space-around',
    flexDirection:'row',
  },
  result:{
    width: 150,
    height: 100,
    color:'lightgray',
    fontSize:65,
    backgroundColor: "#fff",
  },
  buttonStruct:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button:{
    width:100,
    height:100,
  },
  buttonText:{
    fontSize: 15,
    backgroundColor: '#fff',
  }
});


