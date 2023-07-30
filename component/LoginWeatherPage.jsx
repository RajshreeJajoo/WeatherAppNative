import { useEffect, useState } from 'react';
import { Text, SafeAreaView, View, StyleSheet, ImageBackground, Image, Button } from 'react-native';

const LoginWeatherPage = ({ navigation }) => {
    const [date, setDate] = useState();
    const [time, setTime] = useState();

    useEffect(() => {
        setDate(new Date().toLocaleDateString());
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                style={{
                    flex: 1,
                    margin: 5,
                    width: '99%',
                    height: '100%'
                }}
                source={{
                    uri: 'https://img.freepik.com/free-vector/blue-cloudy-daylight-background-weather-design_33099-512.jpg'
                }}>
                <View style={styles.bg}>
                    <Text> !! Weather Page !!</Text>
                    <View style={{ flexDirection: 'row', marginTop: 50 }}>
                        <Text style={{ marginRight: 100 }}>{date}</Text>
                        <Text style={{ marginLeft: 100 }}>{time}</Text>
                    </View>

                    <Image source={{ uri: 'https://newsonair.com/wp-content/uploads/2021/06/WEATHER-5.jpg' }} style={{ width: 400, height: 200, marginTop: 200 }} />
                    <View style={{ marginTop: 10}}>
                        <Button color='black' title='Next' onPress={() => navigation.navigate('Name')} />
                    </View>

                </View>
            </ImageBackground>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bg: {
        alignItems: 'center',
        marginTop: 50
    }
})
export default LoginWeatherPage;
