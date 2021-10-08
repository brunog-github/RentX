import React from 'react';
import LottieView from 'lottie-react-native';

import loadingCar from '../../assets/load_animated.json';

import {
    Container
} from './style';

export function LoadAnimation(){
    return (
        <Container>
            <LottieView 
                source={loadingCar}
                style={{ height: 350 }}
                resizeMode='contain'
                autoPlay
                loop
            />
        </Container>
    );
}