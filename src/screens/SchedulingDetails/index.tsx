import React from 'react';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

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
    Accessories,
    Footer,
    RentalPeriod,
    CalendarIcon,
    DateInfo,
    DateTitle,
    DateValue,
    RentalPrice,
    RentalPriceLabel,
    RentalPriceDetails,
    RentalPriceQuota,
    RentalPriceTotal
} from './styles';

export function SchedulingDetails(){
    const theme = useTheme()

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

                <RentalPeriod>
                    <CalendarIcon>
                        <Feather
                            name="calendar"
                            size={RFValue(24)}
                            color={theme.colors.shape}
                        />
                    </CalendarIcon>

                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue>25/05/2021</DateValue>
                    </DateInfo>
                    
                    <Feather
                        name="chevron-left"
                        size={RFValue(24)}
                        color={theme.colors.shape}
                    />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue>25/05/2021</DateValue>
                    </DateInfo>
                </RentalPeriod>
            
                <RentalPrice>
                    <RentalPriceLabel>TOTAL</RentalPriceLabel>
                    
                    <RentalPriceDetails>
                        <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
                        <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>
            </Content>

            <Footer>
                <Button title="Confirmar"/>
            </Footer>
            
        </Container>
    );
}