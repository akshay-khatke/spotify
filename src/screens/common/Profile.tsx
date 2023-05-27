import React ,{useEffect}from 'react';
import {View,Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import api from 'service';
type Props = {};
const Profile: React.FC<Props> = ({}) => {
  const userData = useSelector((state: any) => state.login.userData);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const onLogoutPress = () => {
    // dispatch(actions.login.setUserDetails(null));
    // storeItem(keys.User, null);
  };
  // const {t, i18n}= useTranslation();
  useEffect(()=>{
    login();
  },[]);
  const login=async()=>{
    const {data,status}=await api.auth.authentication.login({
      email:"swamis@gmail.com",
      password:"123456"
    });
    console.log(data,"data in api")
  }
 

  console.log(userData,"userData")
  return (
    <View>
      <Text>PROFILE DATA PAGE</Text>
    </View>
  );
};

export default Profile;
