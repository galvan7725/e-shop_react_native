import React,{ useState, useEffect} from 'react';
import {Image, StyleSheet, Dimensions,View, ScrollView} from 'react-native';
import Swiper from 'react-native-swiper/src';

let {width} = Dimensions.get("window");

const Banner = () => {
    const [bannerData, setBannerData] = useState([]);

    useEffect(() => {
        setBannerData(['https://i.pinimg.com/originals/f1/47/2c/f1472cd9f017531ed6c575beeeabb368.png',
        'https://cdn.game.tv/game-tv-content/images_3/0e435f81ec8571c9e6a9a9753bb55ad4/GameTile.jpg',
        'https://i.blogs.es/aed5aa/note10_auraglow-1-/1366_2000.jpg']);
        return () => {
            setBannerData([]);
        }
    }, [])

    return(
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.swiper}>
                    <Swiper
                    style={{ height: width / 2}}
                    showsButtons={false}
                    autoplay={true}
                    autoplayTimeout={2}
                    >
                        {bannerData.map((item)=>{
                            return (
                                <Image 
                                key={item}
                                style={styles.imageBanner}
                                resizeMode="contain"
                                source={{uri:item}}
                                />
                            )
                        })}
                    </Swiper>
                    <View style={{height:20}}></View>
                </View>
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    cotainer :{
        flex: 1,
        backgroundColor: 'gainsboro'
    },
    swiper :{
        width: width,
        alignItems: 'center',
        marginTop: 10
    },
    imageBanner:{
        height: width / 2,
        width : width - 40,
        borderRadius: 10,
        marginHorizontal: 20
    }
})

export default Banner;