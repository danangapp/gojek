/* eslint-disable no-use-before-define */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-unresolved */
import React, { Component } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

class Note extends Component {
	constructor(){
  	super();
  	
	}
	componentDidMount(){ 
		// this.Scrollable.open()
	}
  render() {
  	
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      	<TouchableOpacity onPress={()=>{this.props.navigation.goBack(null)}} style={{backgroundColor:'orange', paddingVertical:10, paddingHorizontal:30, borderRadius:5, borderWidth:0.1}}>
      		<Text>Back</Text>
      	</TouchableOpacity>
      </View>
    );
  }
}


export default Note;