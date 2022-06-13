import React,{useState,useEffect} from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import {View, StyleSheet} from 'react-native';

const data = [
    { label: 'America', value: 'America' },
    { label: 'Australia', value: 'Australia' },
    { label: 'Egypt', value: 'Egypt' },
    { label: 'Canada', value: 'Canada' },
    { label: 'India', value: 'India' },
    { label: 'Ireland', value: 'Ireland' },
    { label: 'Dubai', value: 'Dubai' },
    { label: 'Spain', value: 'Spain' },
  ];

const DropdownComponent =() => {
    const [isFocus, setIsFocus] = useState(false);
    const [country, setCountry] = useState("")
    useEffect(()=>{
      setCountry(country)
    },[])
    return(
        <View style={styles.container}>
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              searh
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select country' : '...'}
              searchPlaceholder="Search..."
              value={"India"}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              // onChange={(event)=>props.handleOnChange('country',event.label)}
             onChange={() => setCountry()} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      width:"95%",
    
    },
    dropdown: {
      height: 50,
      // width:"100%",
      borderColor: 'gray',
      borderWidth: 0.8,
      marginHorizontal:15,
      
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });

export default DropdownComponent;