import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;

    align-items: center;

    background-color: ${({theme}) => theme.colors.background_primary};
`;

export const Header = styled.View`
    width: 100%;
    height: 325px;

    justify-content: center;
    padding: 25px;

    padding-top: 30px;

    background-color: ${({theme}) => theme.colors.header};
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_600};
    font-size: ${RFValue(30)}px;
    color: ${({theme}) => theme.colors.shape};

    margin-top: 24px;
`;

export const SubTitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_400};
    font-size: ${RFValue(15)}px;
    color: ${({theme}) => theme.colors.shape};

    margin-top: 24px;
`;

export const Content = styled.View`
    flex: 1;
    width: 100%;

    padding: 0 16px;
`;

export const Appointments = styled.View`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 24px 0px;
`;

export const AppointmentsTitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;
    color: ${({theme}) => theme.colors.text};
`;

export const AppointmentsQuantity = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;
    color: ${({theme}) => theme.colors.title};
`;