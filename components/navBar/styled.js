import styled from 'styled-components';

import { FlexColumn, FlexRow } from '../../components/layout'

export const NavBarContainer = styled(FlexRow)`
    width: 100%;
    height: 60px;
    padding: 0px 25px;
    align-items: left;
    background-image: url('/nav_img.webp');
    background-size: contain;
    position: sticky;
    top: 0;
    justify-content: space-between;
    z-index: 100;
`;
export const NavBarLogo = styled(FlexRow)`
    height: 50px;
    margin: 5px 0;
`;
export const NavBarItems = styled(FlexRow)`
    width: 65%;
    justify-content: space-between;
    align-self: center;
    @media (max-width: 1024px) {
        display: none;
    } ;
`;
export const NavBarItem = styled(FlexRow)`
    width: 100%;
    flex-direction: column;
`;
export const NavBarButton = styled.a`
    color: white;
    font-size: 17px;
    text-align: center;
    text-decoration: none;
    margin: auto;
    border-bottom: 2px solid transparent;
    ${NavBarItem}:hover & {
        border-bottom: 2px solid #00a1ff;
        font-size: 19px;
    } ;
`;

export const HamburgerIconDiv = styled(NavBarButton)`
    margin: 0px;
    align-self: center;
    @media (min-width: 1025px) {
        display: none;
    } ;
`;
export const DropDownItems = styled(FlexColumn)`
    display: none;
    background-color: background;
    position: absolute;
    width: 65%;
    top: 50px;
    left: 150px;
    ${NavBarItem}:hover & {
        display: flex;
    }
`;
export const DropDownItem = styled(NavBarButton)`
    color: white;
    padding: 10px;
    margin: auto 0px;
    text-align: left;
    padding-left: 10%;
    position: relative;
`;
export const MobileListContainer = styled(FlexColumn)`
    background-color: black;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0px;
    right: 0px;
    width: 100%;
    display: ${(props) => props.display || 'none'};
    @media (min-width: 1025px) {
        display: none;
    } ;
`;
export const PlayButton = styled(NavBarButton)`
    width: 90px;
    height: 100%;
    background-color: rgb(0, 0, 255, .75);
    padding: auto 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: .8px .5px 10px #fffafa;
    margin: 0px;
`