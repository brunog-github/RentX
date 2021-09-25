import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

import {
    Container,
    Header,
    TotalCars,
    HeaderContent,
    CardList
} from './styles';

export function Home(){
    const navigation = useNavigation()

    const carData = {
        name: "RS5 Coupé",
        brand: "Audi",
        rent: {
            period: "Ao dia",
            price: 120
        },
        thumbnail: "https://www.webmotors.com.br/imagens/prod/348415/AUDI_RS5_2.9_V6_TFSI_GASOLINA_SPORTBACK_QUATTRO_STRONIC_34841515593745747.png?s=fill&w=236&h=135&q=70&t=true"
    }

    function handleCarDetails() {
        navigation.navigate('CarDetails')
    }

    return (
        <Container>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

            <Header>
                <HeaderContent>
                    <Logo 
                        width={RFValue(108)} 
                        height={RFValue(12)}
                    />

                    <TotalCars>Total de 12 Carros</TotalCars>
                </HeaderContent>
            </Header>

            <CardList
                data={[1,2,3,4,5,6,7,8,9,10]}
                keyExtractor={item => String(item)}
                renderItem={({ item }) => <Car data={carData} onPress={handleCarDetails}/>
            }
            />
            
        </Container>
    );
}