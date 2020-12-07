import styled from 'styled-components';
import { FlexColumn, FlexRow, Grid } from '../layout';


export const GridContainer = styled(FlexColumn)`
    width: 90%;
    margin: 50px auto;
`
export const GameGrid = styled(Grid)`
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    grid-template-rows: auto;
    
`
export const GameContainer = styled(FlexColumn)`
    width: 350px;
    margin: 0px auto;
    align-items: center;
    @media (max-width: 500px){
        height: 250px;
        width: 300px;
        
    }
    
    // background-image: ${(props) => props.image || "url(/background.webp)"};
    // background-size: cover;
    // background-repeat: no-repeat;
`
export const Heading = styled.h1`
    text-align: center;
    color: white;
    padding: 30px 0;
`
export const Image = styled.img`
    height: 300px;
    width: 450px;
    margin-top: 20px;
    border-radius: 10px;
    @media (max-width: 500px){
        width: 250px;
        height: 150px
    }
`
export const LogoImage = styled.img`
    width: 300px;
    height: 80px;
    
    @media (max-width: 500px){
        width: 150px;
    }
`