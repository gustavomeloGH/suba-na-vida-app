import 'react-native-gesture-handler';
import React from 'react';
import { AppLoading } from "expo";
import { useFonts } from '@use-expo/font';
import { SafeAreaProvider } from "react-native-safe-area-context";

import NavigationContainer from "./src/navigation/navigation-container";

function App() {
    let [fontsLoaded] = useFonts({
        'SourceSansPro-Regular': require('./assets/fonts/SourceSansPro-Regular.ttf'),
        'SourceSansPro-Italic': require('./assets/fonts/SourceSansPro-Italic.ttf'),
        'SourceSansPro-Light': require('./assets/fonts/SourceSansPro-Light.ttf'),
        'SourceSansPro-LightItalic': require('./assets/fonts/SourceSansPro-LightItalic.ttf'),
        'SourceSansPro-SemiBold': require('./assets/fonts/SourceSansPro-SemiBold.ttf'),
        'SourceSansPro-SemiBoldItalic': require('./assets/fonts/SourceSansPro-SemiBoldItalic.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <SafeAreaProvider>
                <NavigationContainer />
            </SafeAreaProvider>
        );
    }
}

export default App
