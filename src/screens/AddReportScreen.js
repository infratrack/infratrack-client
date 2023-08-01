import React, { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import * as ImagePicker from 'expo-image-picker';
import LocationIcon from '../../assets/location-icon.png'
import axios from "axios";
import {API_URL} from "@env"


async function handleSendImage(userId, file){
  console.log(API_URL)
  console.log('Trying to send image: ' + userId)
  await axios.post(`${API_URL}/user`, {
    userId: userId,
    data: file
  }).then(function (response) {
    console.log(response.status + ' ' + response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}

const pickImage = async (setFile) => {

  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    base64: true,
    quality: 1,
    allowsMultipleSelection: true,
    selectionLimit: 4,
  });

  if(!result.canceled){
    setFile(result.assets)
  }
  // console.log(result.assets.);
}

import colors from "../styles/colors";
import fonts from "../styles/fonts";
import DropDownMenu from "../components/DropDownMenu";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AddReportScreen({navigation}) {
    const [file, setFile] = useState([]);
    const [problemType, setProblemType] = useState()
    const [reportTitle, setReportTitle] = useState()
    const [description, setDescription] = useState()
    const [location, setLocation] = useState()

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.Title}>Adicionar Report</Text>
            
        </View>

        <View style={styles.forms}>
        <DropDownMenu setItem={setProblemType} />
            <TextInput value={reportTitle} onChangeText={setReportTitle} placeholder="Título do report" style={styles.input} placeholderTextColor={colors.input}></TextInput>
            <TextInput value={description} onChangeText={setDescription} multiline={true} numberOfLines = {5} placeholder="Descrição do Report" style={styles.descriptionInput} placeholderTextColor={colors.input}></TextInput>
            <Text style={styles.Text}>Adicione uma evidência</Text>

            <TouchableOpacity style={styles.archiveButton} onPress={() => pickImage(setFile) }>
                <Text style={styles.archiveText} >Selecionar arquivo</Text>
            </TouchableOpacity>


            {/* TODO: Change this to user id value */} 
            <TouchableOpacity style={styles.button} onPress={() => file.map( async (item) => await handleSendImage(await AsyncStorage.getItem('id'), item.base64) )}>  
                <Image source={LocationIcon} style={{width: 20, height:23}}></Image>
                <Text style={styles.buttonText}>Adicionar localização</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.sendButton}>
                <Text style={styles.archiveText}>Salvar</Text>
            </TouchableOpacity>
        </View>


        {/* <View style={styles.evidenceLocation}>
        </View>

        <View style={styles.buttonView}>
            {file != null ? <Image source={{uri: file.assets[0].uri}} style={{width: 100, height: 100}} ></Image> : <></>}
        </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: "space-around",
    width: "100%",
    fontFamily: fonts.bold,
  },
  dropdownMenu:{
    backgroundColor: colors.white,
    fontFamily: fonts.bold,
    color: colors.background,
    flexDirection: 'row-reverse',
    gap: 20
  },
  header:{

    display: "flex",
    // paddingTop: 20,
    justifyContent: 'space-evenly',
    flex: 1,
    paddingTop: 20,
    // backgroundColor: 'blue'
  },
  forms: {
    display: "flex",
    flex: 2.5,
    width: '75%',
    gap: 20,
    // justifyContent: 'center',
    // backgroundColor: 'red'
  },

  image: {
    height: Dimensions.get("window").width * 0.3,
    marginTop: 10,
  },

  Title: {
    color: colors.white,
    fontSize: 35,
    textAlign: "center",
    fontFamily: fonts.bold,
  },
  Text: {
    color: colors.white,
    fontFamily: fonts.bold,
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontSize: 17,
    marginTop: -10
},
input: {
    backgroundColor: colors.white_bg,
    borderRadius: 12,
    color: colors.background,
    fontFamily: fonts.bold,
    fontSize: 15,
    textAlign: "left",
    height:50,
    // marginTop:500,
    paddingLeft: 17,
  },

descriptionInput:{
    backgroundColor: colors.white_bg,
    borderRadius: 12,
    color: colors.background,
    fontFamily: fonts.bold,
    fontSize: 15,
    textAlign: "left",
    height: 150,
    paddingLeft: 17,
    paddingTop: 17,
    textAlignVertical: "top",
  },

  button: {
    marginTop: 30,
    backgroundColor: colors.white_bg,
    borderRadius: 20,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: 'center'
},
archiveButton:{
    marginTop:-15,
    backgroundColor: colors.button,
    borderRadius: 20,
    height: 30,
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    width: 180,
    // paddingHorizontal:30
},
sendButton:{
    // marginTop:10,
    backgroundColor: colors.button,
    marginTop: 50,
    borderRadius: 20,
    height: 40,
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    width: 150,
    alignSelf: 'flex-end'
    // paddingHorizontal:30
},

buttonText:{
  color: colors.background,
  fontFamily: fonts.bold,
  fontSize: 20,

  textAlign: 'center',
},
archiveText:{
  color: colors.background,
  fontFamily: fonts.bold,
  fontSize: 15,

    textAlign: "center",
  },
  evidenceLocation: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // backgroundColor: 'red',
    width: '80%',
    // alignItems: '',
    // alignContent: 'flex-start',
    // textAlign: 'left'
},
buttonView:{
    flex: 1,
  },
});
