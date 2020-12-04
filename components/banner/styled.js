import styled from 'styled-components';
import {FlexColumn, FlexRow} from '../layout';

export const BannerContainer = styled(FlexColumn)`
    width: 100%;
    height: auto;
    background-image: url(https://uploads-ssl.webflow.com/5f7fa16d7e69dda1a196d991/5f84f6ffc0babdb176d65448_new-transcode.webm);
    background-size: cover;
    background-attachment: fixed;
    background-position: bottom left;
    @media (max-width: 1024px) {
        background-position: center center;
        background-attachment: scroll;
    } ;
`
export const BannerHeader = styled.h1`
    width: auto;
    color: white;
    margin-top: ${(props) => props.topMargin|| "7.5%"};
    text-align: center;
    border-radius: 20px;
    font-size: 3.2em;
    @media (max-width: 640px) {
        font-size: 2em;
        
    } ;
`
export const BannerText = styled(BannerHeader)`
    font-size: 2em;
    margin-top: 0px;
    color: white;
    text-shadow: 1px 1px black;
    @media (max-width: 640px) {
        font-size: 1.2em;
        padding: 0px 5px;
    } ;
    
`
export const BannerButtonGrid = styled(FlexRow)`
    width: 55%;
    margin: 15px auto;
    @media (max-width: 640px) {
        flex-direction: column;
        width: 60%
    } ;
`
export const BannerButton = styled.a`
    width: 100%;
    margin: 10px 5px; 
    color: white;
    text-align: center;
    border-radius: 10px;
    font-size: 25px;
    background-color: rgba(238, 151, 28, 0.7);
    padding: 10px 0px;
    @media (max-width: 500px) {
        font-size: 1em;
    } ;
`
export const ImageFilter = styled.div`
    width: 100%;
    height: inherit;
    background-color: rgba(0, 0, 0, 0.65);
`
export const ImageContainer = styled(FlexColumn)`
    width: 100%;
    margin: 0px auto;
`
export const Image = styled.img`
    width: 50%;
    height: 50%;
    margin: 10% auto 0 auto;
    @media (min-width: 640px) {
        width: 324px;
        height: 307px;
    } ;
`