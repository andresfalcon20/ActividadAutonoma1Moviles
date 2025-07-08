import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import CrearScreen from "../screens/CrearScreen";
import LeerScreen from "../screens/LeerScreen";
import ActualizarScreen from "../screens/ActualizarScreen";
import EliminarScreen from "../screens/EliminarScreen,";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack =  createNativeStackNavigator()

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Guardar" component={CrearScreen} />
            <Stack.Screen name="Leer" component={LeerScreen} />
            <Stack.Screen name="Editar" component={ActualizarScreen} />
            <Stack.Screen name="Eliminar" component={EliminarScreen} />
        </Stack.Navigator>
    )
}



export default function NavegadorPrincipal(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}