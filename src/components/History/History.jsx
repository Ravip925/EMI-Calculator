import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  place-items: center;
  margin-bottom: 20px;
`;
const Wrapper = styled.div`
  width: 80%;
  height: 70vh;
  padding: 20px 0px;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const Right = styled.div`
width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;

  div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 16px;
  }
`;

const Title = styled.h2`
  text-align: start;
  font-family: "raleway", sans-serif;
  font-weight: 400;
  text-align: center;
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
    <Container>
      <Wrapper>
        <h2>Your EMI history</h2>
        <Right>
          {history && history.map((item, index) => (
            <div key={index}>
              <Detail>
                <Title>EMI</Title>
                <Desc>₹ {Number(item.emi).toFixed(2)}</Desc>
              </Detail>
              <Detail>
                <Title>Interest Payable</Title>
                <Desc>
                  ₹ {Number(item.totalPayment - loanAmount).toFixed(2)}
                </Desc>
              </Detail>
              <Detail>
                <Title>Total Payment</Title>
                <Desc>₹ {Number(item.totalPayment).toFixed(2)}</Desc>
              </Detail>
              <Detail>
                <Button onClick={() => setEMI_table(item.table)}>Show EMI</Button>
              </Detail>
            </div>
          ))}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default History;
