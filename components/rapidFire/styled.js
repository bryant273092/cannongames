import { FlexColumn, FlexRow } from '../layout';
import styled from 'styled-components';

export const RapidFireContainer = styled(FlexColumn)`
    width: 100%;
    margin: 0px auto;
    border-radius: 10px;
    
    
`
export const MediaContainer = styled(FlexRow)`
    align-items: center;
    min-height: 90vh;
    padding: 50px 10px;
    @media (max-width: 1024px){
        flex-direction: column;
        height: auto;
    }
    background-color: ${(props) => props.color || 'rgba(0,0,0,.5)' };
    
`
export const Video = styled.video`
    width: 90%;
    height: auto;
    margin: 0px auto;
    margin-bottom: 50px;
`
export const Element = styled.div`
    display: flex;
    width: 50%;
    max-height: 100%;
    flex-direction: column;
    align-items: center;
    margin: 0px auto;
    @media (max-width: 1024px) {
        width: 100%;
    }
    background-image: ${(props) => props.image || 'none'};
`
export const Description = styled.p`
    color: ${(props) => props.color || 'black'};
    width: 80%;
    margin: 0px auto;
    font-size: 20px;
    font-family: 'JetBrains Mono', monospace;
    @media (max-width: 1024px) {
        width: 90%;
        margin: 25px auto;
    }
`
export const Image = styled.img`
    width: 60%;
    border-radius: 10px;
    margin-right: 25px;
    height: 80%;
    @media (max-width: 1024px) {
        width: 90%;
        margin: 25px auto;
    }
`