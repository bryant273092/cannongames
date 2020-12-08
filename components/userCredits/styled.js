import styled from 'styled-components';
import {FlexColumn, FlexRow } from '../layout';

export const SectContainer = styled(FlexColumn)`
    width: 100%;
    align-items: center;
`
export const User = styled(FlexRow)`
    width: 50%;
    background-color: black;
    border-radius: 10px;
    margin: 10px;
    @media (max-width: 925px) {
        width: 65%
    }
    @media (max-width: 825px) {
        width: 75%
    }
    @media (max-width: 615px) {
        width: 90%
    }
`
export const CompanyLogo = styled.img`
    width: 30%;
    margin: 50px 0px;
`
export const UserRole = styled.h3`
    color: rgb(0, 0, 255);
    text-align: right;
    width: 50%;
    padding: 10px;
    @media (max-width: 615px) {
        font-size: 12px;
    }
    
`
export const UserName = styled.h4`
    color: white;
    width: 50%;
    text-align: left;
    padding: 10px;
    @media (max-width: 615px) {
        font-size: 11px;
    }
    
`