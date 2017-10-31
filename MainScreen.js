
import React from 'react';
import {Text, View} from 'react-native';
import MapView from 'react-native-maps';
import styles from './style.js'


export default  class MainScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {weatherApiParam: 'init',
        marker:{
            coordinates: {
                latitude: 3.148561,
                longitude: 101.652778
            },

        }


        };
    }
    static navigationOptions = ({ navigation }) => ({
        title: ` ${navigation.state.params.city}`,
    });


    // componentDidMount(){
    //     fetch(`http://api.apixu.com/v1/current.json?key=0c82c413a5ca4c80a7f123530171010&q=${this.props.navigation.state.params.city}`)
    //         .then((response) => response.json())
    //         .then((responseJson) => {this.setState({weatherApiParam: responseJson.current.temp_c});})
    //         .catch((error) => {
    //             console.error(error);
    //         })
    //
    // }

    render() {
        var MapView = require('react-native-maps');
        const { params } = this.props.navigation.state;

        return (


            <View style={styles.container}>

                <MapView style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
                {/*<Text>Current temperature in {params.city}: {this.state.weatherApiParam} C</Text>*/}
            </View>
        );
    }
}

