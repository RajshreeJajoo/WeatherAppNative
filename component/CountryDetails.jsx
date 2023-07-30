import { Text, SafeAreaView, View, TextInput, StyleSheet, Button, Image } from 'react-native';
import { Card, Title } from 'react-native-paper';

const CountryDetails = ({ navigation }) => {
    let countrydetails = navigation.state.params.paramKey;
    let flag = '"' + countrydetails.flags?.png + '"';
    let capitalname = countrydetails.capital;
    return (
        <SafeAreaView>
            <View>
                <Card style={styles.container}>
                    <Card.Content>
                        <Title style={{ textAlign: 'center' ,color:'#9167F4' }}>Country Name :- {countrydetails.name.common}</Title>
                    </Card.Content>
                    <Card.Content style={styles.details}>
                        <Text style={styles.text}>Captial :- {countrydetails.capital}</Text>
                        <Text style={styles.text}>Population:- {countrydetails.population}</Text>
                        <Text style={styles.text}>Continent:- {countrydetails.continents}</Text>
                        <Text style={styles.text}>TimeZone:- {countrydetails.timezones}</Text>
                        {/* <Image source={{ uri: { flag } }} style={{ width: 120, height: 120, margin: 20 }} /> */}
                        <View style={styles.button}>
                            <Button color="#9167F4" title="Captial Weather Information"
                                onPress={() => navigation.navigate('Weather', {
                                    paramKey: { capitalname }
                                })} />
                        </View>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        backgroundColor:'#E5DFF1'
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
export default CountryDetails;


















