import styled from 'styled-components';
import { FlexColumn, FlexRow } from '../layout';

export const BannerContainer = styled(FlexColumn)`
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    overflow: hidden;
    
`

export const BannerButtonGrid = styled(FlexRow)`
    width: 400px;
    position: relative;
    left: 25px;
    @media (max-width: 640px) {
        flex-direction: column;
        width: 60%;
        left: 0;
        margin: 0px auto;
    } ;
`
export const BannerButton = styled.a`
    width: 100%;
    color: white;
    text-align: center;
    border-radius: 10px;
    font-size: 25px;
    background-color: #0000ff;
    padding: 10px 0px;
    @media (max-width: 500px) {
        font-size: 1em;
    } ;
    
`
export const ImageContainer = styled(FlexColumn)`
    position: relative;
    
`
export const Image = styled.img`
    position: relative; 
    left: 25px;
    width: 544.5px;
    height: 126px;
    @media (max-width: 640px) {
        width: 272.25px;
        height: 63px;
        left: 0;
        margin: 0px auto;
    } ;
`
export const BannerText = styled.h2`
    font-size: 4em;
    width: 550px;
    margin-top: 10px;
    color: white;
    position: relative;
    left: 25px;
    text-shadow: 1px 1px black;
    @media (max-width: 640px) {
        width: 100%;
        font-size: 2em;
        padding: 0px 5px;
        left: 0;
        text-align: center;
    } ; 
`
export const Video = styled.video`
    bottom: 0;     
    min-width: ${ (props) => props.width || "100%"}; 
    min-height: ${ (props) => props.height || "100%"};
    width: auto; 
    height: auto; 
    overflow: hidden;
    
    position: absolute;
`
export const Source = styled.source`

`
export const OverlayContent = styled(FlexColumn)`
    position: relative;
    top: 300px;
    height: 100%;
    width: 100%;
    @media (max-width: 640px) {
        top: 200px;
    } ; 

`