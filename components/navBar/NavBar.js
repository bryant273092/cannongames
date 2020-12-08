import {
    NavBarContainer,
    NavBarLogo,
    NavBarItems,
    NavBarButton,
    HamburgerIconDiv,
    NavBarItem,
    DropDownItem,
    MobileListContainer,
    PlayButton
} from './styled';
import links from '../../data/nav_links.json'
import { useState } from 'react';
import Image from 'next/image'
export const NavBar = () => {
    //hook to control opening/closing dropdown menu when user clicks on hamburger icon
    const [display, setDisplay] = useState('none');
    const teamLogo = "";
    //alternates display property for mobile drop down menu
    const changeDisplay = () => {
        if (display == 'none') {
            setDisplay('flex');
        } else {
            setDisplay('none');
        }
    };
    return (
        <NavBarContainer>
            {/* toggles mobile dropdown list when user clicks on hamburger icon */}
            <HamburgerIconDiv onClick={changeDisplay}>
                <Image height="50px" width="50px" src={"/hamburgerIcon.svg"} />
            </HamburgerIconDiv>
            <MobileListContainer display={display}>
                {links.map((link) => (
                    <DropDownItem key={link.name} title={"Go To " + link.name } href={link.href}>
                        {link.name}
                    </DropDownItem>
                ))}
            </MobileListContainer>
            <NavBarLogo>
                <Image width='100px' height='50px' alt="An image of Cannon Games Logo" src={"/cannon_logo.webp"} />
            </NavBarLogo>
            <NavBarItems>
                {links.map((link) => (
                    <NavBarItem key={link.name}>
                        <NavBarButton title={"Go To " + link.name} key={link.name} href={link.href}>
                            {link.name}
                        </NavBarButton>
                    </NavBarItem>
                ))}
            </NavBarItems>
            <PlayButton href={'/games/rapidfire'}>
                Play Now
            </PlayButton>
        </NavBarContainer>
    );
};
