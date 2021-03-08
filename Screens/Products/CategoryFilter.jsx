import React from 'react'
import {StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {ListItem, Badge, Text} from 'native-base';
import PropTypes from 'prop-types';

const CategoryFilter = (props)=> {

    const { categoryFilter, setActive, active, categories } = props;

    return (
        <ScrollView
            bounces={true}
            horizontal={true}
            styles={styles.scroll}
        >
            <ListItem style={styles.item}>
                <TouchableOpacity
                    key={1}
                    onPress={()=>{
                        categoryFilter('all'), setActive(-1)
                    }}
                >
                    <Badge
                        style={[styles.center,styles.badge,
                                active == -1 ? styles.active : styles.inactive
                        ]}
                    >
                        <Text style={styles.badgeText}>All</Text>
                    </Badge>
                </TouchableOpacity>
                { categories.map((item) =>(
                    <TouchableOpacity
                    key={item._id.$oid}
                    onPress={()=>{
                        categoryFilter(item._id.$oid), 
                        setActive(categories.indexOf(item))
                    }}
                    >
                        <Badge
                            style={[styles.center,styles.badge,
                                    active == categories.indexOf(item) ? styles.active : styles.inactive
                            ]}
                        >
                            <Text style={styles.badgeText}>{item.name}</Text>
                    </Badge>
                    </TouchableOpacity>
                )) }
            </ListItem>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scroll: {
        backgroundColor:"#f2f2f2",

    },
    item:{
        margin:0,
        padding: 0,
        borderRadius:0
    },
    center:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    badge: {
        margin: 5,

    },
    badgeText: {
        color: 'white'
    },
    active:{
        backgroundColor: '#03bafc'
    },
    inactive:{
        backgroundColor: '#a0e1eb'
    }
})

CategoryFilter.propTypes = {
    categoryFilter: PropTypes.func.isRequired,
    setActive: PropTypes.func.isRequired,
    active: PropTypes.number.isRequired,
    categories: PropTypes.array.isRequired
}

export default CategoryFilter;