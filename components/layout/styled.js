import styled from 'styled-components';

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`;
export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
`
export const Container = styled(FlexColumn)`
    width: 90%;
    margin: 0 auto;
    background-color: ${(props) => props.color|| "rgba(0,0,0, 0.6)"};
    border-radius: 25px;
`
export const HeaderOne = styled.h1`
    color: ${(props) => props.color|| "white"};
    width: 100%;
    text-align: center;
`
export const HeaderTwo = styled.h2`
    color: white;
    width: 100%;
    text-align: center;
`
export const HeaderThree = styled.h3`
    color: #ee971c;
    width: 100%;
    text-align: center;
`
export const Button = styled.a`
    width: 50%;
    margin: 15px auto; 
    color: white;
    text-align: center;
    border-radius: 10px;
    font-size: 25px;
    background-color: rgba(238, 151, 28, 0.7);
    padding: ${(props) => props.padding|| "10px 0px"};
    @media (max-width: 850px) {
        font-size: 1em;
        width: 45%;
    } ;
    @media (max-width: 480px) {
        width: 80%;
        
    } ;
`
export const Image = styled.img`
    width: 50%;
    height: 50%;
    margin: 0px auto;
`
export const Text = styled.p`
    color: ${(props) => props.color|| "white"};
    text-align: center;
    font-size: ${(props) => props.size|| "15px"};
    width: 80%;
    margin: 0px auto;
    text-decoration: ${(props) => props.decoration|| "underline"};
    @media (max-width: 850px) {
        width: 50%;
        
    } ;
    
`
export const Grid = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    margin: 0px auto;
    padding: 0px 5px;
    grid-column-gap: 7px;
`
export const Content = styled(FlexColumn)`
    height: 100%;
    margin: auto 0px;
    justify-content: center;
`