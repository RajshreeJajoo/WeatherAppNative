import { useEffect, useState } from 'react';
import { Text, SafeAreaView, View, TextInput, StyleSheet, Button, Image } from 'react-native';
import axios from "axios";
import { Card, Title } from 'react-native-paper';

const WeatherCapital = ({ navigation }) => {
    let capital = navigation.state.params.paramKey.capitalname;

    const [value, setValue] = useState();
    useEffect(() => {
        axios.get(`http://api.weatherstack.com/current?access_key=a4752932d793609046209310d0b5dfb5&query=${capital}`)
            .then((res) => {
                console.log(res.data);
                setValue(res.data.current);
            })
            .catch((err) => {
                alert(err)
            });
    })

    return (
        <SafeAreaView>
            <View>
                <Card style={styles.container}>
                    <Card.Content>
                        <Title style={{ textAlign: 'center' }}>Capital Name :- {capital}</Title>
                    </Card.Content>
                    <Card.Content style={styles.details}>
                        <Text style={styles.text}>Temperature :- {value?.temperature}</Text>
                        {/* <Text style={styles.text}>Weather Icons:- {value.current.weather_icons[0]}</Text> */}
                        <Text style={styles.text}>Wind Speed:- {value?.wind_speed}</Text>
                        <Text style={styles.text}>Precip:- {value?.precip}</Text>
                        <View style={styles.button}>
                            <Button color="#00bfff" title="Back to Home"
                                onPress={() => navigation.navigate('Firstpage')} />
                        </View>

                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 125,
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
        marginTop: 15,
    }
})
export default WeatherCapital;



// https://countryflagsapi.com/png/india
