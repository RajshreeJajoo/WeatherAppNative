import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WeatherCapital from './component/WeatherCapital';
import CountryDetails from './component/CountryDetails';
import LoginWeatherPage from './component/LoginWeatherPage';
import CountryName from './component/CountryName';

  const AppNavigator = createStackNavigator({
    HomePage:{
      screen:LoginWeatherPage
    },
    Name:{
      screen:CountryName
    },
    Country: {
      screen: CountryDetails
    },
    Weather: {
      screen: WeatherCapital
    }
  },{
          initialRouteName: "HomePage"
  });
 

const AppContainer = createAppContainer(AppNavigator);  
export default function App() {
  return (
    <AppContainer/>
  )
}


