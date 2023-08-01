import { StyleSheet, Text } from "react-native";
import SelectDropdown from "../react-native-select-dropdown";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import ArrowDown from "../../assets/arrow_down.png";

import pinBueiro from "../../assets/pin-bueiro.png";
import pinBuraco from "../../assets/pin-buraco.png";
import pinConstrucao from "../../assets/pin-construcao.png";
import pinEletrica from "../../assets/pin-eletrica.png";
import pinEsgoto from "../../assets/pin-esgoto.png";
import pinIluminacao from "../../assets/pin-iluminacao.png";
import pinLixo from "../../assets/pin-lixo.png";
import pinProblemasNaturais from "../../assets/pin-problemasNaturais.png";

import { Image } from "react-native";
import { useState } from "react";

export default function DropDownMenu({ setItem }) {
  data = [
    "Problema de Energia",
    "Problema de iluminação",
    "Buraco",
    "Problemas naturais",
    "Esgoto",
    "Lixo",
    "Bueiro",
    "Problema em Construções",
  ];
  icons = [
    pinEletrica,
    pinIluminacao,
    pinBuraco,
    pinProblemasNaturais,
    pinEsgoto,
    pinLixo,
    pinBueiro,
    pinConstrucao,
  ];

  return (
    <SelectDropdown
      data={data}
      dropdownStyle={styles.dropdownStyle}
      buttonStyle={styles.buttonStyle}
      rowTextStyle={styles.rowTextStyle}
      buttonTextStyle={styles.buttonTextStyle}
      defaultButtonText="Selecione o tipo do problema"
      dropdownOverlayColor="transparent"
      statusBarTranslucent={false}
      renderCustomizedRowChild={(item, index) => {
        return (
          <>
            <Image
              source={icons[index]}
              style={{ width: 20, height: 23 }}
            ></Image>
            <Text style={styles.rowTextStyle}>{data[index]}</Text>
          </>
        );
      }}
      // onFocus={()=>            }

      renderDropdownIcon={ArrowDown}
      // <Image source={ArrowDown} style={{ marginLeft: 6,width: 12, aspectRatio:1.83209876543, transform: `${!active ? 'none' : 'rotate(180deg)'}`}} />
      // }
      dropdownIconPosition="left"
      // onFocus={}
      onSelect={(selectedItem, index) => {
        setItem(selectedItem);
      }}
      // onBlur={}
      buttonTextAfterSelection={(selectedItem, index) => {
        // text represented after item is selected
        // if data array is an array of objects then return selectedItem.property to render after item is selected
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        // text represented for each item in dropdown
        // if data array is an array of objects then return item.property to represent item in dropdown
        return item;
      }}
    />
  );
}

const styles = StyleSheet.create({
  dropdownStyle: {
    borderRadius: 8,
    backgroundColor: colors.white_bg,
    marginTop: -30,
    // justifyContent: 'flex-start
    // alignItems:'flex-start',
    // paddingLeft:10,
  },
  rowTextStyle: {
    textAlign: "left",
    fontFamily: fonts.bold,
    fontSize: 16,
  },
  buttonStyle: {
    backgroundColor: colors.white_bg,
    width: "100%",
    borderRadius: 12,
  },
  selectedButtonStyle: {
    backgroundColor: colors.white_bg,
    width: "100%",
    borderRadius: 12,
  },
  buttonTextStyle: {
    textAlign: "left",
    paddingLeft: 10,
    fontFamily: fonts.bold,
    // color: colors.background,
    fontSize: 16,
  },
  // dropdownStyle:{},
  // dropdownStyle:{},
  // dropdownStyle:{},
  // dropdownStyle:{},
});
