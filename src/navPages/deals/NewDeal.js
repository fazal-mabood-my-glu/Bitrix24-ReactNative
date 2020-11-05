import React, { Component } from 'react';
import {Header,SearchBar, Input} from 'react-native-elements';
import { StyleSheet,View, Text, StatusBar,Image, Alert, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native';
import { Avatar, Title, Caption } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import RoundCheckbox from 'react-native-round-checkbox';
import {Picker} from '@react-native-community/picker';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

export default class NewDeal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  goBackToAllDeals = () => {
   
    Actions.allDeals()
 }

//   gotoNewEvent = () => {
//     Actions.newEvent()
//  }


  render() {
    return (
      <ScrollView>
        <View>
        
  {/* ---------------------------------header--------------------------------- */}
  
         <View  style={{ marginTop:-20,}}>
         <Header 
              containerStyle={{backgroundColor: '#fff',}}
              leftComponent={
                <TouchableOpacity
                onPress={this.goBackToAllDeals}
                >
                  <Icon name="chevron-back-outline" color="#49641D" style={{ marginLeft: '10%',marginTop: '3%',fontSize: 25 }}></Icon>
                  </TouchableOpacity>      
                       }
              centerComponent={<Text style={{ fontSize:20}}>New Deal</Text>
                  // {text: 'All Clients', fontSize:30}
              }
          
              rightComponent={
              // <Image source={require('../../assets/images/search.png')}  />
      
          <Text>Save</Text>  
      
      }
              // rightComponent={<Text>Done</Text>}
              // <ion-icon name="ellipsis-vertical-outline"></ion-icon>
         />
  </View>
  {/* -----Header end */}
  
  
          {/* -------------row 1------------------ */}
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  {/* ----------------- */}
  <View style={styles.mLeft}>
  <Text style={styles.smText}>Name*</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
                  {/* ----------------------- */}
          <View pointerEvents="auto" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} color="#49641D" placeholder="Name" editable={true} />
  </View>
  {/* --------------------------- */}
       {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
       </View>
          {/* -------------row 1 end ------------------ */}
  
  
  
  
  
          {/* -------------row 2------------------------------------------------------------- */}
            
          {/* ----------------- */}
          <View style={styles.mLeft}>
  <Text style={styles.smText}>Deal stage</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
    {/* ----------------------- */}
 <View style={{backgroundColor:'white'}}>
<View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems:'center', backgroundColor:'white', marginLeft:'8%', marginRight:'5%'}}>
<View style={{  width:'100%',  justifyContent: 'center',  }}>

<Picker   
style={{backgroundColor: 'white'}}
                      selectedValue={this.state.dealstage}  
                      onValueChange={(itemValue, itemPosition) =>  
                          this.setState({dealstage: itemValue, choosenIndex: itemPosition})}  
                  >  
                   <Picker.Item label="New" value="new" />  
                  <Picker.Item label="Sent to client" value="stc" />  
                  <Picker.Item label="Accepted" value="acp" />  
                  <Picker.Item label="Declined" value="dcl" />  
                  <Picker.Item label="Analyze decline" value="ad" />  
                  {/* <Picker.Item label="React Native" value="rn" />   */}
              </Picker>
              </View>

<Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2', marginLeft:-40 }}></Icon>
 
 
 
  {/* <Title style={{ color: '#49641D' , fontSize:14}}>New</Title>
  <TouchableOpacity>
  <Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2' }}></Icon>
  </TouchableOpacity> */}
    </View>
    </View>

{/* --------------------------- */}
       {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
          {/* -------------row 2 end ------------------ */}
  
  
  
  
  
          {/* -------------row 3 new------------------ */}
                  {/* ----------------- */}
  <View style={styles.mLeft}>
  <Text style={styles.smText}>Currency</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
              {/* ----------------------- */}
 <View style={{backgroundColor: 'white'}}>
<View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center', backgroundColor:'white', marginLeft:'8%', marginRight:'5%'}}>
  
  
<View style={{  width:'100%',  justifyContent: 'center',  }}>

<Picker   
style={{backgroundColor: 'white'}}
                      selectedValue={this.state.currencys}  
                      onValueChange={(itemValue, itemPosition) =>  
                          this.setState({currencys: itemValue, choosenIndex: itemPosition})}  
                  >  
                  <Picker.Item label="US Dollar" value="no" />  
                  <Picker.Item label="Euro" value="eu" />  
                  <Picker.Item label="China Yuan Renminbi" value="cyr" />  
                  <Picker.Item label="Brazilian Real" value="br" />  
                  <Picker.Item label="Indian Rupee" value="ir" />  
                  {/* <Picker.Item label="React Native" value="rn" />   */}
              </Picker>
              </View>

<Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2', marginLeft:-40 }}></Icon>
 
  
  {/* <Title style={{ color: '#49641D' , fontSize:14}}>US Dollar</Title>
  <TouchableOpacity>
  <Icon name="chevron-forward-outline" style={{fontSize: 35, color: '#e2e2e2' }}></Icon>
  </TouchableOpacity> */}
    </View>
    </View>
{/* --------------------------- */}
       {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
          {/* -------------row 3 new end------------------ */}
  
  
  
  
  
          {/* -------------row 4------------------ */}
     {/* ----------------- */}
  <View style={styles.mLeft}>
  <Text style={styles.smText}>Amount</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
                  {/* ----------------------- */}
          <View pointerEvents="auto" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} placeholder="Amount" color="#49641D" editable={true} />
  </View>
  {/* --------------------------- */}
       {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
          {/* -------------row 4 end ------------------ */}
  
  
  
  
  
          {/* -------------row 5------------------ */}
           {/* ----------------- */}
  <View style={styles.mLeft}>
  <Text style={styles.smText}>Probability, %</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
                  {/* ----------------------- */}
                  <View style={{flexDirection: 'row', backgroundColor:'white'}}>
  
  <View style={{flexDirection: 'row', alignItems: 'center', height: 35,  marginLeft:'8%' }}>
  
  {/* <Avatar.Image source={require('../../assets/images/blue6.jpg')} size={40} /> */}
  <View>
    <Title style={{ color: '#49641D' , fontSize:14}}>Probability, %</Title>
  </View>
  
  </View>
  
  {/* <View>
  <TouchableOpacity>
    <Icon name="chevron-forward-outline" style={{ alignSelf: 'flex-end',fontSize: 35, color: '#e2e2e2' }}></Icon>
  </TouchableOpacity>
  </View>
   */}
  </View>
  
  {/* --------------------------- */}
       {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
          {/* -------------row 5 end ------------------ */}
  
  
  
            {/* -------------row 6------------------ */}
  
   {/* ----------------- */}
    {/* -------------row  image ------------------ */}
  {/* ----------------- */}
  <View  >
  <Text style={{fontSize:12, color:'#C0C0C0'   ,marginLeft:'8%' }}>Responsible person</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
                  {/* ----------------------- */}
                  <View style={ { backgroundColor: 'white', paddingLeft:'8%'}}>
                  <View style={styles.Rows}>
  
  <View style={styles.registeredName}>
  
  <Avatar.Image source={require('../../assets/images/blue6.jpg')} size={40} />
  <View style={{ marginLeft: 20 }}>
    <Title style={{ color: '#49641D' , fontSize:17}}>Farhan Sarwar</Title>
  </View>
  
  </View>
  
  
  </View>
   {/* ------------------------------Horizontal line -------------------------------------- */}
   <View style={{flexDirection: 'row', alignItems: 'center', marginTop:5, marginRight:'8%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  {/* ------------------- */}
  <View  style={{ marginTop:'3%', marginBottom:5}}>
  <Text style={{color:'#49641D'}}>Change</Text>
  </View>
  {/* ------------------ */}
  {/* <View>
  <TouchableOpacity style={{ width: 300, height: 20 }}>
    <Icon name="chevron-forward-outline" style={{ marginLeft: '20%',marginTop: '3%', fontSize: 35, color: '#e2e2e2' }}></Icon>
  </TouchableOpacity>
  </View> */}
  
 
  {/* </View> */}
  {/* --------------------------- */}
      
      
       

  
  </View>

     {/* ------------------------------Horizontal line -------------------------------------- */}
     <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
                  </View>
  
           {/* -------------row 6 end ------------------ */}
  
  
  
  {/* ------------------7---------------------- */}

  <View style={styles.mLeft}>
  <Text style={styles.smText}>Start date</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
                  {/* ----------------------- */}
          <View pointerEvents="auto" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} placeholder="Today" color="#49641D" editable={true} />
  </View>
  {/* --------------------------- */}
       {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>

  {/* ------------------7 end---------------------- */}




  {/* ------------------8---------------------- */}
  <View style={styles.mLeft}>
  <Text style={styles.smText}>Completed on</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
                  {/* ----------------------- */}
          <View pointerEvents="auto" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} placeholder="08/09/2020" color="#49641D" editable={true} />
  </View>
  {/* --------------------------- */}
       {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  
  {/* ------------------8 end---------------------- */}
  
  
          {/* -------------row 9------------------ */}
          {/* ----------------- */}
  <View style={styles.mLeft}>
  <Text style={styles.smText}>Type</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
                  {/* ----------------------- */}
          <View pointerEvents="auto" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} placeholder="Sales" color="#49641D" editable={true} />

{/* ---------------------- */}

{/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginTop:2, marginRight:'8%', marginLeft:'8%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  {/* ---------------- */}
  
  <View style={{justifyContent: 'space-between', flexDirection: 'row',alignItems: 'center', marginRight:'5%'}}>
      <Title style={{ color: '#49641D' , fontSize:14, marginLeft:'8%'}}>Available to everyone</Title>
      {/* <ion-icon name="checkmark-circle-outline"></ion-icon> */}
      {/* <Icon name="checkmark-circle-outline" color="#49641D" style={{ marginLeft: '10%',marginTop: '3%',fontSize: 25 }}></Icon> */}
    
       
<RoundCheckbox
            size={24}
            borderColor={'black'}
            backgroundColor={"#49641D"}
            iconColor={'white'}
            checked={this.state.isSelected}
            onValueChange={(newValue) => {this.setState({isSelected:true})}}
        />
    </View>
  {/* ---------------- */}
{/* ---------------------- */}

  </View>
  {/* --------------------------- */}
       {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
          {/* -------------row 9 end ------------------ */}
  
  
  {/* ------------------------10 new ----------------- */}
  <View style={styles.mLeft}>
  <Text style={styles.smText}>Contact</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
                  {/* ----------------------- */}
          <View pointerEvents="auto" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} placeholder="Select" color="#49641D" editable={true} />
  </View>
  {/* --------------------------- */}
       {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  
  {/* ------------------------10 new end----------------- */}
  
  {/* ------------------------11 new ----------------- */}
  <View style={styles.mLeft}>
  <Text style={styles.smText}>Company</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
                  {/* ----------------------- */}
          <View pointerEvents="auto" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} placeholder="Select" color="#49641D" editable={true} />
  </View>
  {/* --------------------------- */}
       {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  
  {/* ------------------------11 new end----------------- */}
  



  {/* ------------------------12 new ----------------- */}
<View style={styles.mLeft}>
  <Text style={styles.smText}>Comment</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
                  {/* ----------------------- */}
          <View pointerEvents="auto" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} placeholder="Comment" color="#49641D" editable={true} />
  </View>
  {/* --------------------------- */}
       {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
  
  {/* ------------------------12 new end----------------- */}
  
  



          {/* -------------row 13------------------ */}
          {/* ----------------- */}
  <View style={styles.mLeft}>
  <Text style={styles.smText}>Deal Products</Text>
  </View>
  {/* ----------------- */}
  
          {/* ------------------------------Horizontal line -------------------------------------- */}
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2,}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
                  {/* ----------------------- */}
          <View pointerEvents="auto" style={{backgroundColor:'white'}}>
    <TextInput style={styles.pLeft} placeholder="Select" color="#49641D" editable={true} />
  </View>
  {/* --------------------------- */}
       {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop:2}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
  
                  </View>
          {/* -------------row 13 end ------------------ */}
  
  
  <View style={{height:100}}></View>
        </View>
        </ScrollView>
    );
  }
}


const styles = StyleSheet.create({

  mLeft:{
 
     marginLeft:'8%'
 
  },
  pLeft:{
 
     marginLeft:'8%'
 
  },
  smText:{fontSize:12, color:'#C0C0C0' },
  registeredName: {
     flexDirection: 'row',
     alignItems: 'center',
     height: 50,

  
   },
   Rows: {
     flexDirection: 'row',   
   },
 
 
 })