import { LogBox } from "react-native";
import RootNavigator from "./src/navigators/RootNavigator";
import { NavigationContainer } from "@react-navigation/native";
import store from "./src/redux/store";
import { Provider } from "react-redux";
import * as Linking from "expo-linking";

LogBox.ignoreAllLogs(true);

const prefix = Linking.createURL("/");

const App = () => {
  //* DeepLinking işlemleri.
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Search: {
          screens: {
            CartScreen: {
              path: "CartScreen/:message",
              parse: {
                message: (message: string) => `met-${message}`,
              },
            },
          },
        },
      },
    },
  };
  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
