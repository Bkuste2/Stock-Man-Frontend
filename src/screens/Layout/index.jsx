import React from 'react'
import { View, SafeAreaView } from 'react-native'
import { AndroidSafeArea, container } from './styles'
import IndexPage from '../Index'
import BoasVindas from '../BoasVindas'
import Cadastro from '../Cadastro'
import Login from '../Login'
import ListUsuarios from '../ListaUsuarios'
import ListaProdutos from '../ListaProdutos'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

function Layout(){
    return(
        <View style={container}>
            <SafeAreaView style={AndroidSafeArea}>
                {/* <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen 
                            name="IndexPage" 
                            component={IndexPage}  
                            options={{headerShown: false, drawerItemStyle: { display: "none" }}}
                        />
                        <Stack.Screen 
                            name="BoasVindas" 
                            component={BoasVindas}  
                            options={{headerShown: false, drawerItemStyle: { display: "none" }}} 
                        />
                        <Stack.Screen 
                            name="Cadastro" 
                            component={Cadastro}  
                            options={{headerShown: false, drawerItemStyle: { display: "none" }}}
                        />
                        <Stack.Screen 
                            name="Login" 
                            component={Login} 
                            options={{headerShown: false, drawerItemStyle: { display: "none" }}}
                        />
                    </Stack.Navigator>
                </NavigationContainer> */}
             {/* <ListaUsuarios />  */}
             <ListaProdutos /> 
            </SafeAreaView>
        </View>
    )
}

export default Layout;