import {

    StyleSheet,
    Text

  } from 'react-native';
  import React, {useEffect, useState} from 'react';

  import {NavigationContainer} from '@react-navigation/native';
  import {useDispatch, useSelector} from 'react-redux';
  import {colors} from '../../theme';
import { Loading } from 'components';

 
//   import RNBootSplash from "react-native-bootsplash";
//   import { UnAuth } from '../stack';
  
//   const PARENT_ROUTE = {
//     AUTH: Login,
//     APP: Tabs,
//   };
  
  
  /**
   * This is Navigation Container Wrapper where tabs and login screen handled as per authentication 
   * 
   * @author Akshay khatke
   * @returns App Navigation 
   */
  const AppContainer = () => {
    // const isAuth = useSelector(state => state.user.isAuth);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
  
    useEffect(() => {
      checkAuth();
    }, []);
  
  
  
    const checkAuth = async () => {
      // const reqData = await local.fetch(local.keys.AUTH);
  
      // if (reqData) {
      //   await onLogin({...reqData, dispatch});
      // }
  
      setIsLoading(false);
    };
  
    if (isLoading) {
      return <Loading />
    }
  
    return (
    //   <NavigationContainer onReady={() => RNBootSplash.hide({fade: true})}>
    // {true ? <Tabs /> : <UnAuth />} 
    //   </NavigationContainer>
    <NavigationContainer>
     <Text>PAge of spotify</Text>
    </NavigationContainer>
    );
  };
  
  export default AppContainer;
  
  const styles = StyleSheet.create({
    loaderContainer: {
      flex: 1,
      backgroundColor: colors.white,
      justifyContent: 'center',
      alignItems: 'center',
    },
    pleaseWait: {
      paddingTop: 20,
    },
    waterMarkContainer: {
      position: 'absolute',
      bottom: 25,
      alignSelf: 'center',
    },
  });
  