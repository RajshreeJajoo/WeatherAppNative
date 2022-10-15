import { useState } from 'react';
import { Text, SafeAreaView, View, TextInput, StyleSheet, Button, Image } from 'react-native';
import axios from "axios";

const CountryName = ({ navigation }) => {

    const [country, setCountry] = useState();
    const getCountryDetails = () => {
        axios.get(`https://restcountries.com/v3.1/name/${country}`)
            .then((res) => {
                var arr = country.split(" ");
                for (var countrychar = 0; countrychar < arr.length; countrychar++) {
                    arr[countrychar] =
                        arr[countrychar].charAt(0).toUpperCase() +
                        arr[countrychar].slice(1);
                }
                var str2 = arr.join(" ");

                for (let i = 0; i < res.data.length; i++) {
                    if (str2 === res.data[i].name.common) {
                        navigation.navigate('Country', {
                            paramKey: res.data[i],
                        })
                    }
                }
            })
            .catch((err) => {
                alert(err)
            });
    }
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.container}>Country Details !</Text>
                <TextInput style={styles.text} placeholder='Enter Country Name' value={country} onChangeText={(text) => setCountry(text)} />

                <View style={styles.button}>
                    <Button title='Submit' onPress={getCountryDetails} disabled={!country} />
                    <View style={styles.space} />
                    <Button title='Reset' onPress={() => setCountry('')} />
                    <View style={styles.space} />
                </View>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 150,
        marginTop: 50
    },
    text: {
        borderWidth: 3,
        padding: 10,
        margin: 15
    },
    space: {
        width: 20,
        height: 20,

    },
    button: {
        flexDirection: 'row',
        paddingLeft: 15,
        marginTop: 15,
        justifyContent: 'center',
    }
})
export default CountryName;