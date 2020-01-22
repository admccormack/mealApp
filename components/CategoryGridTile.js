import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Platform } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const CategoryGridTile = props => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.gridItem} >
        <TouchableCmp style={{flexGrow: 1, height:100, width: 160, margin: 5, borderRadius: 10, overflow: 'hidden'}} onPress={props.onSelect} >
            <View style={{...styles.container,...{backgroundColor: props.color}}}>
                <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
            </View>
        </TouchableCmp>
        </View>
        );
    };

const styles = StyleSheet.create({
    gridItem: {
        margin: 5,
        height: 100,
        flexGrow: 1,
        borderRadius: 10,
        overflow: 'hidden'
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2 },
        shadowRadius: 10,
        elevation:3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        textAlign: 'right'
    }
});

export default CategoryGridTile;

