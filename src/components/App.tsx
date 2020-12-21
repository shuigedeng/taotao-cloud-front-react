import React, {useReducer} from 'react';
import './App.less';
import {useMediaQuery} from "react-responsive";
import PinYouGouPC from "./pc/pingyougou"
import AlibaixiuMobile from "./mobile/alibaixiu"
import {MenuContext, UserContext} from '../store';
import {loginReducer} from "../store/reducer/UserReducer"
import {menuToggleReducer} from "../store/reducer/MenuReducer";
import {userInitState} from "../store/state/UserState"
import {menuInitState} from "../store/state/MenuState"

function App() {
  const pc = useMediaQuery({query: '(min-device-width: 980px)'})
  const mobile = useMediaQuery({query: '(max-device-width: 980px)'})

  const [userState, userDispatch] = useReducer(loginReducer, userInitState);
  const [menuState, menuDispatch] = useReducer(menuToggleReducer, menuInitState);

  return (
      <UserContext.Provider value={{...userState, userDispatch: userDispatch}}>
        <MenuContext.Provider value={{...menuState, menuDispatch: menuDispatch}}>
          <div id="mall">
            {pc && <PinYouGouPC/>}
            {mobile && <AlibaixiuMobile/>}
          </div>
        </MenuContext.Provider>
      </UserContext.Provider>
  )
}

export default App;
