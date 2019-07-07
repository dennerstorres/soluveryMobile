import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Entrega from './pages/Entrega';
import Conf from './pages/Conf';

const Routes = (userLogged = false) => createAppContainer(
  createSwitchNavigator(
    {
      Login,
      Entrega,
      Conf,
    },
    {
      initialRouteName: userLogged ? 'Entrega' : 'Login',
    },
  ),
);

export default Routes;
