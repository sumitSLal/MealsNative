import React from "react";
import MealList from "../components/MealList";
import { View, Text, StyleSheet } from "react-native";
import MealsList from "../components/MealList";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
const FavoriteScreen = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);
  if (favMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText> No favorite meals. Start adding some !</DefaultText>
      </View>
    );
  }
  //const favMeals = MEALS.filter(meal => meal.id === "m1" || meal.id === "m2");
  return <MealsList listData={favMeals} navigation={props.navigation} />;
};

FavoriteScreen.navigationOptions = navData => {
  return {
    headerTitle: "Your Favourites",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        ></Item>
      </HeaderButtons>
    )
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default FavoriteScreen;
