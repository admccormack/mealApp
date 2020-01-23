import React from 'react';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import { View } from 'react-native';

import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

const FavouritesScreen = props => {
    
    const favMeals = useSelector(state => state.meals.favouriteMeals);

    if (favMeals.length === 0 || !favMeals) {
        return ( 
        <View>
            <DefaultText>No favourite meals selected</DefaultText>
        </View>);
    }
    
    return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Your Favourites',
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      )
    };
  };

export default FavouritesScreen;