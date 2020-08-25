/* eslint-disable no-use-before-define */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-unresolved */
import React, { Component } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Home from './Home';
import { Container, Header, Tab, Tabs, TabHeading, Icon } from 'native-base';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";

class Beranda extends Component {
	constructor(){
  	super();
  	
	}
	componentDidMount(){ 
		// this.Scrollable.open()
	}
  render() {
  	
    return (
      <Container>
        <Tabs locked={false} initialPage={1}>
          <Tab heading={<TabHeading><FontAwesome name="home" style={styles.fh}/><Text style={styles.f1}>Promo</Text></TabHeading>}>
          	<Home ini={this} />
          </Tab>
          <Tab heading={<TabHeading><FontAwesome name="percent" style={styles.fh}/><Text style={styles.f1}>Beranda</Text></TabHeading>}>
          	<Home ini={this} />
          </Tab>
          <Tab heading={<TabHeading><AntDesign name="message1" style={styles.fh}/><Text style={styles.f1}>Chat</Text></TabHeading>}>
          	<Home ini={this} />
          </Tab>
        </Tabs>             
      </Container>
    );
  }
}


export default Beranda;

const styles = StyleSheet.create({
  f1: {
  	fontSize:12,
  	fontWeight:'bold',
  	color:'#FFFFFF',
  	marginTop:5
  },
  fh: {
  	fontSize:15, 
  	color:'white', 
  	marginTop:4, 
  	marginRight:5
  }
});