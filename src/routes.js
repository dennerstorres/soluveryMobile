import {
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";

import Login from "./pages/Login";
import Entrega from "./pages/Entrega";
import Conf from "./pages/Conf";
import TestCon from "./pages/TestCon";

import Sidebar from "./components/Sidebar";

const AppDrawerNavigator = createDrawerNavigator(
  {
    Entregas: { screen: Entrega },
    Configurações: { screen: Conf },
    Conexão: { screen: TestCon }
  },
  {
    contentComponent: Sidebar
  }
);
const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Login,
        AppDrawerNavigator
      },
      {
        initialRouteName: userLogged ? "AppDrawerNavigator" : "Login"
      }
    )
  );

export default Routes;
