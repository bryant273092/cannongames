import styled from 'styled-components';
import {FlexRow, FlexColumn } from '../layout';

export const GameBannerContainer = styled(FlexColumn)`
    width: 100%;
    background-image: ${(props) => props.background || "url(/map_paris.png)"} ;
    height: 500px;
    background-position: bottom;
    background-size: cover;
    background-attachment: fixed;
    align-items: center;
`
export const GameLogo = styled.img`
    width: 50%;
    margin-top: 100px;
    
`
export const ButtonGrid = styled(FlexRow)`
    width: 50%;
    margin: 0px auto;
    margin-top: 50px;
    @media (max-width: 1025px){
        flex-direction: column;
    }
`