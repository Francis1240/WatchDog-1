import React from "react";
import { View, Text, Button, Flexbox } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Icon } from 'react-native-elements';


import Meter from "./components/meter"
import Chart from "./components/chart"

class HomeScreen extends React.Component {
  static navigationOptions = {
    title : "Home",
  };


  render() {
    return (
        <View>
            <Meter score={90} />
            <Chart />
            <Button
                title = "Settings"
                onPress = {() => this.props.navigation.navigate("Settings")}
            />
        </View>
    );
  }
}
export default HomeScreen;
