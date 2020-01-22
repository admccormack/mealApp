import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { Platform, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Colors from '../constants/Colors';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FavouritesScreen from '../screens/FavouritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import { createDrawerNavigator } from 'react-navigation-drawer';

const defaultStackNavOptions = {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitle: 'A Screen'
  };

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealScreen,
    MealDetail: MealDetailScreen
},
{
    defaultNavigationOptions: defaultStackNavOptions
});

const FavNavigator = createStackNavigator(
    {
      Favourites: FavouritesScreen,
      MealDetail: MealDetailScreen
    },
    {
      // initialRouteName: 'Categories',
      defaultNavigationOptions: defaultStackNavOptions
    }
  );


const tabScreenConfig = {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
          );
        },
        tabBarColor: Colors.primaryColor,
        tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'open-sans-bold' }}>Meals</Text>
        ) : (
          'Meals'
        )
      }
    },
    Favourites: {
      screen: FavNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
        },
        tabBarColor: Colors.accentColor,
        tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'open-sans-bold' }}>Favorites</Text>
        ) : (
          'Favorites'
        )
      }
    }
  };

  const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: 'white',
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primaryColor
        }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeColor: Colors.accentColor
        }
      });

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
},
{
  // initialRouteName: 'Categories',
  defaultNavigationOptions: defaultStackNavOptions
});

const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
          drawerLabel: 'Meals'
        }
      },
    Filters: FiltersNavigator
},
{
  contentOptions: {
    activeTintColor: Colors.accentColor,
    labelStyle: {
      fontFamily: 'open-sans-bold'
    }
  }
});

export default createAppContainer(MainNavigator);