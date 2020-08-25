/* eslint-disable no-use-before-define */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-unresolved */
import React, { Component } from "react";
import {View, ScrollView, DatePickerIOS, TouchableOpacity, Text, TextInput, StyleSheet, Image, Dimensions } from "react-native";
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import BottomSheet from 'react-native-simple-bottom-sheet';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import { Container, Header, Tab, Tabs, TabHeading, Icon } from 'native-base';
const { width } = Dimensions.get('window')
const { height } = Dimensions.get('window')

class Promo extends Component {
	constructor(){
		super();
		this.maxH = height * 0.85;
		this.minH = height * 0.4;
	}
	componentDidMount(){ 
		// this.Scrollable.open()
	}
  render() {
  	var ini = this;
    return (
      <View style={styles.container}>        
        {/* Grid Menu */}
        <Image source={require('../assets/ban2.png')} style={{width:width, height:height*0.8}}/>    
        <BottomSheet sliderMinHeight={this.minH} sliderMaxHeight={this.maxH}>
          <ScrollView style={styles.container1}>
          	<View style={styles.rowS}>
	            <View style={styles.viewS}>
			          <Feather name="search" style={styles.iconS}/>
			          <TextInput style={styles.tS} placeholder="Cari nasi goreng buat ngemil"underlineColorAndroid="transparent"/>
			        </View>
			        <View style={styles.viewIS}>
			        	<SimpleLineIcons name="user" style={styles.userS}/>
			        </View>
		        </View>  
						<View style={styles.ban1}>
		        	<View style={styles.ban2}>
		        		<View>
		        			<View>
		        				<View style={styles.gopay}>
		        					<AntDesign name="wallet" style={styles.icon2}/>
		        					<Text style={styles.f2}>gopay</Text>
		        				</View>
		        				<Text style={styles.f2}>Rp 2.500</Text>
		        				<Text style={styles.f3}>Klik Buat Isi</Text>
		        			</View>		        			
		        		</View>
		        	</View>
		        	<TouchableOpacity onPress={()=>{ini.props.ini.props.navigation.navigate('Note')}} style={styles.view1}>
			        	<View style={styles.view2}>
				        	<AntDesign name="arrowup" style={styles.icon1}/>
				        </View>
			        	<Text style={styles.f1}>Bayar</Text>
			        </TouchableOpacity>
			        <TouchableOpacity onPress={()=>{ini.props.ini.props.navigation.navigate('Note')}} style={styles.view1}>
			        	<View style={styles.view2}>
				        	<AntDesign name="arrowup" style={styles.icon1}/>
				        </View>
				        <Text style={styles.f1}>Isi Gopay</Text>
			        </TouchableOpacity>
			        <TouchableOpacity onPress={()=>{ini.props.ini.props.navigation.navigate('Note')}} style={styles.view1}>
			        	<View style={styles.view2}>
				        	<AntDesign name="arrowup" style={styles.icon1}/>
				        </View>
				        <Text style={styles.f1}>Lainnya</Text>
			        </TouchableOpacity>
			      </View>		
			      <Text style={styles.title}>Konten Buat Kamu</Text>
			      <ScrollView horizontal>
			      	<View style={styles.ban3}>
			      		<Text style={styles.f4}>Apa Aja</Text>
			      	</View>
			      	<View style={styles.ban3}>
			      		<Text style={styles.f4}>COVID-19</Text>
			      	</View>
			      	<View style={styles.ban3}>
			      		<Text style={styles.f4}>Donasi</Text>
			      	</View>
			      	<View style={styles.ban3}>
			      		<Text style={styles.f4}>Hiburan</Text>
			      	</View>
			      	<View style={styles.ban3}>
			      		<Text style={styles.f4}>Makanan</Text>
			      	</View>
			      	<View style={styles.ban3}>
			      		<Text style={styles.f4}>J3K</Text>
			      	</View>
			      	<View style={styles.ban3}>
			      		<Text style={styles.f4}>Gaya Hidup</Text>
			      	</View>
			      	<View style={styles.ban3}>
			      		<Text style={styles.f4}>Pembayaran</Text>
			      	</View>
			      	<View style={styles.ban3}>
			      		<Text style={styles.f4}>Jalan-jalan</Text>
			      	</View>
			      </ScrollView>
			      <View style={styles.ban4}>
			      	<Image source={require('../assets/ban1.png')} style={styles.img1}/>    
			      	<View>
			      		<Text style={styles.f5}>4 Protokol</Text>
			      		<Text style={styles.f5}>Kebersihan Rekan</Text>
			      		<Text style={styles.f5}>Usaha Gopay</Text>
			      	</View>
			      </View>
			      <View style={styles.ban5}>
			      	<View style={styles.ban6}>
			      		<Image source={require('../assets/covid2.png')} style={styles.img2}/>			      	
			      	</View>
				      <View style={styles.ban7}>
				      	<Text>Promo Goride & GoCar</Text>
				      	<Text>Sebelum Kembali berkegiatan, klik disini untuk dapetin vouchernya</Text>
				      </View>
			      </View>
          </ScrollView>
        </BottomSheet>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  container1: {
    margin:10
  },
  rowS: {
  	flex:1, 
  	flexDirection:'row'
  },
  viewS:{
  	flex:1, 
		flexDirection: 'row', 
		justifyContent: 'center', 
		alignItems: 'center', 
		backgroundColor: '#fff', 
		borderWidth: 0.5, 
		borderColor: '#000', 
		height: 40, 
		borderRadius: 5, 
		marginRight: 10, 
		marginBottom:10
  },
  viewIS: {
  	width: 40, 
  	height: 40, 
  	borderRadius: 40, 
  	backgroundColor: 'green'
  },
  tS: {
  	flex: 1,
  },
  userS: {
  	fontSize:18, 
  	paddingLeft:11, 
  	paddingTop:10,
  	color:'#ffffff'
  },
  iconS: {
  	fontSize:22, 
  	paddingLeft:10
  },
  ban1: {
  	flex:1, 
  	borderRadius: 10, 
  	justifyContent:'space-around', 
  	flexDirection:'row', 
  	backgroundColor:'orange', 
  	paddingVertical:20,
  	paddingHorizontal:5
  },
  ban2: {
  	flex:1, 
  	borderRadius: 10, 
  	padding:10,
  	width:100,
  	backgroundColor:'#FFFFFF'
  },
  ban3: {
  	borderRadius: 10, 
  	padding:7,
  	backgroundColor:'green',
  	marginHorizontal:10,
  },
  ban4: {
  	flex:1, 
  	borderRadius: 10, 
  	backgroundColor:'#EFF0F1', 
  	padding:20,
  	justifyContent:'space-around', 
  	flexDirection:'row', 
  	marginTop:20
  },
  ban5: {
  	flex:1, 
  	borderRadius: 10,
  	borderWidth:0.2, 
  	backgroundColor:'#FFE4C4', 
  	alignItems:'center', 
  	marginVertical:20
  },
  ban6: {
  	paddingTop:10
  },
  ban7: {
  	flex:1,
  	backgroundColor:'white',
  	padding:10
  },
  icon1: {
  	fontSize:8, 
  	paddingLeft:6, 
  	paddingTop:5
  },
  icon2: {
  	fontSize:10,
  	color:'blue', 
  	paddingTop:10,
  	paddingRight:5,
  },
  view1:{
  	alignItems:'center',
  	marginHorizontal:20,
  	justifyContent:'center'
  },
  view2: {
  	width: 20, 
  	height: 20, 
  	borderRadius: 5, 
  	backgroundColor: '#FFFFFF'
  },
  f1: {
  	fontSize:12,
  	fontWeight:'bold',
  	color:'#FFFFFF',
  	marginTop:5
  },
  f2: {
  	fontSize:12,
  	fontWeight:'bold',
  	color:'#000000',
  	marginTop:5
  },
  f3: {
  	fontSize:10,
  	fontWeight:'bold',
  	color:'green',
  	marginTop:5
  },
  f4: {
  	fontSize:10,
  	fontWeight:'bold',
  	color:'#FFFFFF',
  },
  f5: {
  	fontSize:16,
  	fontWeight:'bold',
  	color:'#000000',
  	marginTop:3
  },
  gopay: {
  	flexDirection:'row'  	
  },
  title: {
  	fontSize:20,
  	marginVertical:10
  },
  img1: {
  	width:80, 
  	height:80
  },
  img2: {
  	width:280, 
  	height:120
  }
});

export default Promo;