import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  place-items: center;
  margin-bottom: 20px;
  ${mobile({
    padding: "20px",
  })}
`;
const Wrapper = styled.div`
  width: 80%;
  height: auto;
  padding: 20px 0px;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  ${mobile({
    width: "100%",
  })}
  .heading_1 {
    margin-bottom: 40px;
    ${mobile({
      marginBottom: "10px",
    })}
  }
`;
const Right = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  ${mobile({
    marginTop: "20px",
  })}

  div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 16px;
    ${mobile({
      flexDirection: "column",
      gap: "20px",
    })}
  }
`;

const Title = styled.h2`
  text-align: start;
  font-family: "raleway", sans-serif;
  font-weight: 400;
  text-align: center;
  ${mobile({
    fontSize: "1rem",
  })}
`;
const Desc = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: #008ec7;
`;
const Button = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  color: white;
  border-radius: 8px;
  background-color: #17838d;
  cursor: pointer;
`;
const Detail = styled.div`
  display: flex;
  flex-direction: column;
`;
const History = ({ history, loanAmount, setEMI_table }) => {
  return (
    <>
      {history.length > 0 && (
        <Container>
          <Wrapper>
            <h2 className="heading_1">Your EMI Details</h2>
            <Right>
              {history.map((item, index) => (
                <div key={index}>
                  <Detail>
                    <Title>EMI</Title>
                    <Desc>₹ {Number(item.emi).toFixed(2)}</Desc>
                  </Detail>
                  <Detail>
                    <Title>Interest Payable</Title>
                    <Desc>₹ {Number(item.interest).toFixed(2)}</Desc>
                  </Detail>
                  <Detail>
                    <Title>Total Payment</Title>
                    <Desc>₹ {Number(item.totalPayment).toFixed(2)}</Desc>
                  </Detail>
                  <Detail>
                    <Button onClick={() => setEMI_table(item.table)}>
                      Show EMI
                    </Button>
                  </Detail>
                </div>
              ))}
            </Right>
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default History;
