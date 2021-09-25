import React from 'react';
import { useNavigation } from '@react-navigation/native'

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import SpeedSvg from '../../assets/speed.svg'
import AccelerationSvg from '../../assets/acceleration.svg'
import ForceSvg from '../../assets/force.svg'
import GasolineSvg from '../../assets/gasoline.svg'
import ExchangeSvg from '../../assets/exchange.svg'
import PeopleSvg from '../../assets/people.svg'

import {
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    About,
    Accessories,
    Footer
} from './styles';
import { Button } from '../../components/Button';

export function CarDetails(){
    const navigation = useNavigation()

    function handleConfirmRental() {
        navigation.navigate('Scheduling')
    }

    return (
        <Container>
            <Header>
                <BackButton onPress={() => {}}/>
            </Header>

            <CarImages>
                <ImageSlider imagesUrl={["https://www.webmotors.com.br/imagens/prod/348271/LAMBORGHINI_HURACAN_5.2_V10_GASOLINA_LP_640_EVO_LDF_34827115572963915.png?s=fill&w=236&h=135&q=70&t=true"]}/>
            </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand>Lamborghini</Brand>
                        <Name>Huracan</Name>
                    </Description>

                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 580</Price>
                    </Rent>
                </Details>
                
                <Accessories>
                    <Accessory name="380Km/h" icon={SpeedSvg}/>
                    <Accessory name="3.2s" icon={AccelerationSvg}/>
                    <Accessory name="800 HP" icon={ForceSvg}/>
                    <Accessory name="Gasolina" icon={GasolineSvg}/>
                    <Accessory name="Auto" icon={ExchangeSvg}/>
                    <Accessory name="2 pessoas" icon={PeopleSvg}/>
                </Accessories>

                <About>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, similique ab tempora facere sit, corporis aut iste enim quam commodi eos eum dolorem. Sint obcaecati assumenda eligendi placeat, tempora impedit?
                </About>
            </Content>

            <Footer>
                <Button title="Escolher período do aluguel" onPress={handleConfirmRental}/>
            </Footer>
            
        </Container>
    );
}