import React, { useEffect } from 'react';
import { Text, View } from "react-native";
import api from 'service';
import { colors } from "theme";
import fonts from "theme/fonts";

type Props = {

};
const StartUp: React.FC<Props> = (props) => {

  useEffect(() => {
    login();
  }, []);
  const login = async () => {
    const { data, status } = await api.auth.authentication.login({
      email: "swamis@gmail.com",
      password: "123456"
    });
    console.log(data, "data in api")
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.primary }}>
      <Text style={{ fontFamily: fonts.regular, color: colors.secondary }}>Spotify start up page</Text>
    </View>
  );
};

export default StartUp;
