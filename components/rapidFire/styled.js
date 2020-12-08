import { FlexColumn, FlexRow } from '../layout';
import styled from 'styled-components';

export const RapidFireContainer = styled(FlexColumn)`
    width: 90%;
    margin: 0px auto;
    border-radius: 10px;
    background-color: rgba(0,0,0,.5);
    
`
export const MediaContainer = styled(FlexRow)`
    align-items: center;
    height: 75vh;
    @media (max-width: 700px){
        flex-direction: column;
    }
`
export const Video = styled.video`
    width: 80%;
    height: auto;
    margin: 0px auto;
    margin-bottom: 50px;
`
export const Element = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
`
export const Description = styled.p`
    color: white;
    width: 70%;
    margin: 0px auto;
    font-family: 
`
export const Image = styled.img`
    width: 60%;
    border-radius: 10px;
    margin-right: 25px;
    height: 80%;
`