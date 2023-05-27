// import { NavigationContainer } from "@react-navigation/native"
import { NavigationContainer } from "@react-navigation/native"
import {Profile} from "screens/common/Profile.tsx"



const Routes: React.FC = () => {

    return (
        <NavigationContainer>
    <Profile /> 
        </NavigationContainer>
    )
}

export default Routes