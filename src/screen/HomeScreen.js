import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CarouselCard from '../components/CarouselCard';


const HomeScreen = () => {
    return(
        
        <View style={styles.container}>
            <CarouselCard/>
        </View>
       
    )
       
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        flexDirection:'column',
    },
    heading:{
        fontSize:20,
        backgroundColor:'#888899',
        margin:'5%',
        padding:10,
        color:'white'
    }
})
export default HomeScreen;