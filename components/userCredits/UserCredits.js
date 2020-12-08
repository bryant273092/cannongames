import { SectContainer, User, CompanyLogo, UserRole, UserName } from './styled';

const Users = require('../../data/contributors.json')
export const UserCredits = () => {
    return (
        <SectContainer>

            {Users.map((user) => (
                <User key={user.name}>
                    <UserRole key={user.role}>{user.role + " :   "}</UserRole>
                    <UserName key={user.name}>{"  " + user.name}</UserName>
                </User>
            ))}



            <CompanyLogo src={'/cannon_logo.webp'} />
        </SectContainer>
    )
}