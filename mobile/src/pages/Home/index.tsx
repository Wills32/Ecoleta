import React, {useState,useEffect} from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import{RectButton} from 'react-native-gesture-handler';
import{ Feather as Icon} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';


const Home = () => {

    const[uf,setUf]= useState('');
    const[city,setCity]= useState('');

    const navigation = useNavigation();
    function handleNavigatetoPoints(){
        navigation.navigate('Points',{
            uf,
            city,
        });
    }

    return (
        <View style={styles.container}>
        <KeyboardAvoidingView style={{flex: 1}} behavior = {Platform.OS === 'ios' ? 'position': undefined } >
            <ImageBackground source={require('../../assets/home-background.png')} style={styles.main} imageStyle={{ width: 274, height: 368 }}>
                <Image source={require('../../assets/logo.png')} />
                <View>
                <Text style={styles.title}>Seu Market Place De Coleta de residuos</Text>
                <Text style={styles.description}>Ajudamos pessoas a encontrar o ponto de coleta de forma simplificada</Text>
                </View>
            </ImageBackground>
            <View style={styles.footer}>

                <TextInput 
                style={styles.input} 
                placeholder="Digite o Estado"
                value ={uf}
                maxLength={2}
                autoCapitalize="characters"// deixa todos os elementos em caixa auta 
                autoCorrect ={false} // desabilita a auto correcao 
                onChangeText = {setUf}
                />
                    

                <TextInput 
                style={styles.input} 
                placeholder = "Digite sua cidade"
                value = {city}
                autoCorrect={false}
                onChangeText={setCity}
                />
                 
        
                <RectButton style={styles.button} onPress={handleNavigatetoPoints} >
                    <View style={styles.buttonIcon} >
                        <Text>
                            <Icon name ="arrow-right" color ="#FFF" size ={24} ></Icon> 
                        </Text>
                    </View>
                    <Text style = {styles.buttonText}> Entrar </Text>
                </RectButton>
            </View>
        </KeyboardAvoidingView>    
        </View>
    );
      
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        
    },

    main: {
        flex: 1,
        justifyContent: 'center',
    },

    title: {
        color: '#322153',
        fontSize: 32,
        fontFamily: 'Ubuntu_700Bold',
        maxWidth: 270,
        marginTop: 64,
    },

    description: {
        color: '#6C6C80',
        fontSize: 16,
        marginTop: 16,
        fontFamily: 'Roboto_400Regular',
        maxWidth: 270,
        lineHeight: 24,
    },

    footer: {},

    select: {},

    input: {
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
    },

    button: {
        backgroundColor: '#34CB79',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
    },

    buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
    },
});
export default Home;