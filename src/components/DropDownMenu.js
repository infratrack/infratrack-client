import { StyleSheet, Text } from "react-native";
import SelectDropdown from "../react-native-select-dropdown";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import ArrowDown from '../../assets/arrow_down.png'
import { Image } from "react-native";
import { useState } from "react";

export default function DropDownMenu(){
    data = ['a', 'b', 'c', 'd', 'e', 'f'];

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
            
            // onFocus={()=>            }
            renderDropdownIcon={ArrowDown}
                    // <Image source={ArrowDown} style={{ marginLeft: 6,width: 12, aspectRatio:1.83209876543, transform: `${!active ? 'none' : 'rotate(180deg)'}`}} />
            // }
            dropdownIconPosition="left"
            // onFocus={}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
            }}
            // onBlur={}
            buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
            }}
        />
    );
};


const styles = StyleSheet.create({
    dropdownStyle:{
        borderRadius: 8,
        backgroundColor: colors.white_bg,
        marginTop: -30,
    },
    rowTextStyle:{

    },
    buttonStyle:{
        backgroundColor: colors.white_bg,
        width: '100%',
        borderRadius: 12,
        // textAlign: 'left'

    },
    buttonTextStyle:{
        textAlign: 'left',
        paddingLeft:10,
        fontFamily: fonts.bold,
        color: colors.input,
        fontSize: 16,
    },
    // dropdownStyle:{},
    // dropdownStyle:{},
    // dropdownStyle:{},
    // dropdownStyle:{},
    
})