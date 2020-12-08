import styled from 'styled-components';
import { FlexColumn, FlexRow, Grid } from '../layout';


export const GridContainer = styled(FlexColumn)`
    width: 100%;
    margin-top: 50px;
    
`
export const GameGrid = styled(FlexRow)`
    @media (max-width: 1025px) {
        flex-direction: column;
    }
`
export const GameContainer = styled(FlexColumn)`
    width: 450px;
    margin: 40px auto;
    align-items: center;
    @media (max-width: 500px){
        width: 90%;
        
    }
`
export const Heading = styled.h1`
    text-align: center;
    color: white;
    padding: 30px 0;
`
export const Image = styled.img`
    width: 450px;
    margin-top: 20px;
    border-radius: 10px;
    @media (max-width: 500px){
        width: 100%;
        height: 100%;
    }
`
export const LogoImage = styled.img`
    width: 300px;
    
    @media (max-width: 500px){
        width: 60%;
        height: 100%;
    }
`