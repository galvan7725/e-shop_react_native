import React from 'react';
import { StyleSheet,View, Image, SafeAreaView } from 'react-native';
import logo from '../assets/logo.png';

const Header = () => {
    return(
        <SafeAreaView style={styles.header}>
            <Image 
                source={require("../assets/logo.png")}
                resizeMode = 'contain'
                style = {{height: 50}}

            />
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        marginTop: 100,
        backgroundColor : '#7CFF43'
    }
})

export default Header;
