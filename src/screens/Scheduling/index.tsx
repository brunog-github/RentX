import React from 'react';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'react-native';

import ArrorwSvg from '../../assets/arrow.svg'
import { Button } from '../../components/Button';
import { BackButton } from '../../components/BackButton';
import { Calendar } from '../../components/Calendar';

import {
    Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
    Content,
    Footer,
} from './styles';

export function Scheduling(){
    const theme = useTheme()
    const navigation = useNavigation()

    function handleConfirmRental() {
        navigation.navigate('SchedulingDetails')
    }

    return (
        <Container>
            <Header>
                <StatusBar barStyle="light-content" translucent backgroundColor="transparent"/>

                <BackButton onPress={() => {}} color={theme.colors.shape}/>

                <Title>Escolha uma {"\n"}data de inicio e {"\n"}fim do aluguel</Title>

                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue selected={false}>18/05/2021</DateValue>
                    </DateInfo>

                    <ArrorwSvg/>

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue selected={false}>28/07/2021</DateValue>
                    </DateInfo>
                </RentalPeriod>
            </Header>

            <Content>
                <Calendar />
            </Content>

            <Footer>
                <Button title="Confirmar" onPress={handleConfirmRental}/>
            </Footer>
        </Container>
    );
}