import styled from 'styled-components';
import {FlexRow, FlexColumn } from '../layout';

export const GameBannerContainer = styled(FlexColumn)`
    width: 100%;
    background-image: url(https://uploads-ssl.webflow.com/5f7fa16d7e69dda1a196d991/5faaf1082bc78508e5d95f16_main-qimg-c5a69e2769af2a0886ff2749c569bc95.jpeg);
    height: 500px;
    background-position: center;
    align-items: center;
`
export const GameLogo = styled.img`
    width: 50%;
    margin-top: 100px;
    
`
export const ButtonGrid = styled(FlexRow)`
    width: 50%;
    margin-top: 50px;
    @media (max-width: 1025px){
        flex-direction: column;
    }
`