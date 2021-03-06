import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { FlatList } from 'react-native';
import { CarDTO } from '../../dtos/CarDTO'
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;

    background-color: ${({ theme }) => theme.colors.background_primary};
`;


export const Header = styled.View`
    width: 100%;
    height: 113px;
    
    justify-content: flex-end;
    
    padding: 32px 24px;
    
    background-color: ${({ theme }) => theme.colors.header};
`;

export const HeaderContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TotalCars = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.text};
`;

export const CardList = styled(FlatList as new () => FlatList<CarDTO>).attrs({
    contentContainerStyle: {
        padding: 24
    },
    showsVerticalScrollIndicator: false
})`
`;