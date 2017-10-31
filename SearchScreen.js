import React from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import { Slider } from 'react-native-elements';
import styles from './style.js'
import MainScreen from './MainScreen.js'


export default class SearchScreen extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            kwotaKredytu: 400,
            iloscDni:1
        }
    };




    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        Date.prototype.addDays = function(days) {
            var dat = new Date(this.valueOf());
            dat.setDate(dat.getDate() + days);
            return dat;
        }
        var dat = new Date();
        const { navigate } = this.props.navigation;

        function odsetki(kwotaKredytu, oprocentowanie,){
            return (kwotaKredytu*oprocentowanie)
        }
        function rrso(kwotaKredytu, iloscDni, prowizja){
            return (((kwotaKredytu+prowizja)/kwotaKredytu)*(1/(365/iloscDni)))
        }


        return (
            <View style={styles.container}>
                <Text style={styles.messageBoxTitleText}>Wybierz kwotę i ilość dni</Text>

                {/*<TextInput style={styles.messageBoxBodyText}*/}
                           {/*placeholder="Type city here!"*/}
                           {/*onChangeText={(text) => this.setState({text})}*/}
                {/*/>*/}
                <Text>Kwota kredytu</Text>
                <View style={styles.textInputWrapper1}>
                    <Text>0</Text>
                    <Text>{this.state.kwotaKredytu}</Text>
                    <Text>1200</Text>
                </View>
                <Slider
                    value={this.state.kwotaKredytu}
                    maximumValue={1200}
                    step={100}
                    onValueChange={(kwotaKredytu) => this.setState({kwotaKredytu})} />
                <Text>Ilośc dni</Text>
                <View style={styles.textInputWrapper1}>
                    <Text>0</Text>
                    <Text>{this.state.iloscDni}</Text>
                    <Text>30</Text>
                </View>
                <Slider


                    minimumValue={1}
                    maximumValue={30}
                    step={1}
                    value={this.state.iloscDni}
                    onValueChange={(iloscDni) => this.setState({iloscDni: iloscDni})} />


                    <Text>Termin spłaty: {dat.addDays(this.state.iloscDni).toDateString()}</Text>
                    <Text>Pożyczka: {this.state.kwotaKredytu} zł</Text>
                    <Text>Prowizja: {this.state.kwotaKredytu*0.1} zł</Text>
                    <Text>Odsetki: {odsetki(this.state.kwotaKredytu, 0.1)}</Text>
                    <Text>RRSO: {rrso(this.state.kwotaKredytu,this.state.iloscDni,this.state.kwotaKredytu*0.1)}</Text>
                    <Text>Razem : {odsetki(this.state.kwotaKredytu, 0.1)+this.state.kwotaKredytu*0.1+this.state.kwotaKredytu}</Text>


                <Button
                    onPress={() => navigate('MainScreen', {city : this.state.text})}
                    title="Biorę kredyt !"
                />



            </View>
        );
    }
}

