import { SectContainer, User, CompanyLogo, UserRole, UserName } from './styled';

const Users = require('../../data/contributors.json')
export const UserCredits = () => {
    return (
        <SectContainer>
            <CompanyLogo src={'/cannon_logo.webp'} />

            {Users.map((user) => (
                <User key={user.name}>
                    <UserRole key={user.role}>{user.role + " :   "}</UserRole>
                    <UserName key={user.name}>{"  " + user.name}</UserName>
                </User>
            ))}
        </SectContainer>
    )
}