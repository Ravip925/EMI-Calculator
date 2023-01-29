import styled from "styled-components";
import jwt_decode from "jwt-decode";
import LogoutIcon from "@mui/icons-material/Logout";

const Container = styled.div`
  height: 65px;
  text-decoration: none;
  user-select: none;
  background-color: #010101;
  color: white;
  background-position: bottom;
`;
const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  width: 100px;
  height: 65px;
  padding: 14px 0;
`;
const Image = styled.img`
  width: 100px;
  background-size: cover;
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
  padding-right: 2rem;
`;
const MenuItems = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
`;
const List = styled.li`
  cursor: pointer;
  font-size: 1em;
  position: relative;
`;
const NavBar = ({ token }) => {
  const user_token = token;
  const user = jwt_decode(user_token);
  const data = {
    name: user.fname,
    lname: user.lname,
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Logo>
              <Image src="https://www.liblogo.com/img-logo/em8262e485-emi-logo-emi-telco-media-logo-birchman.png" />
            </Logo>
          </Left>
          <Center>
            <h2>EMI CALCULATOR</h2>
          </Center>
          <Right>
            <MenuItems>
              <List>
                <b>
                  Hi, {data.name} {data.lname}
                </b>
              </List>
              <List onClick={handleLogout}>
                Logout{" "}
                <LogoutIcon
                  sx={{
                    fontSize: "1.3rem",
                    position: "absolute",
                    top: "-1px",
                    margin: "0 5px",
                  }}
                />
              </List>
            </MenuItems>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default NavBar;
