import { useState } from "react";
import Swal from "sweetalert2";
import styled from "styled-components";
import History from "../History/History";
import { mobile } from "../Responsive";
import Table from "../Table/Table";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  place-items: center;
  ${mobile({
    marginTop: "40px",
  })}
`;
const Wrapper = styled.div`
  width: 80%;
  height: 70vh;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  ${mobile({
    width: "100%",
    padding: "0 20px",
  })}
`;
const TextContainer = styled.div`
  width: 100%;
  p {
    font-weight: 500;
    margin-top: 5px;
  }
`;
const BoxContainer = styled.div`
  width: 100%;
  height: 80%;
  margin-top: 20px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 10px;
`;
const Left = styled.div`
  flex: 1;
  height: 100%;
  padding: 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({})}
`;
const FormContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  ${mobile({})}
`;

const Input = styled.input`
  border: 1px solid gray;
  width: 20rem;
  height: 35px;
  border-radius: 6px;
  padding: 0px;
  font-size: 17px;
  text-align: center;
  &:focus {
    outline: none;
  }
`;
const Label = styled.label`
  width: 100%;
  font-size: 16px;
  font-weight: 600;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  color: white;
  border-radius: 8px;
  background-color: #5e5ebf;
  margin-top: 20px;
  cursor: pointer;
`;

const Content = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [rate, setRate] = useState("");
  const [duration, setDuration] = useState("");
  const [EMI_table, setEMI_table] = useState([]);
  const [history, setHistory] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loanAmount === "" && rate === "" && duration === "") {
      Swal.fire(`Please Enter Field's`);
    } else {
      let r = rate / (12 * 100);
      let emi =
        (loanAmount * r * (1 + r) ** duration) / ((1 + r) ** duration - 1);
      let table = [];
      for (let i = 1; i <= duration; i++) {
        table.push({ month: i, EMI: emi });
      }

      const totalPayment = emi * duration;
      const interest = totalPayment - loanAmount;
      setEMI_table(table);
      setHistory([
        ...history,
        { emi, interest, totalPayment, rate, duration, table },
      ]);
      localStorage.setItem("EMI_history", JSON.stringify(history));
    }
  };

  return (
    <Container>
      <Wrapper>
        <TextContainer>
          <h2>
            Easy EMI Calculator for Home loans, Personal Loans and Vehicle
            Loans.
          </h2>
          <p>
            Know your EMI, Loan amount, Tenure and Interest rates with our
            easy-to-use calculators
          </p>
        </TextContainer>
        <BoxContainer>
          <Left>
            <form onSubmit={handleSubmit}>
              <FormContainer>
                <Label>Loan Amount*</Label>
                <Input
                  type={"number"}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                />
                <Label>Annual Interest Rate (%)*</Label>
                <Input
                  type={"number"}
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
                <Label>Tenure (in Months)*</Label>
                <Input
                  type={"number"}
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
                <Button type="submit" value="Submit">
                  SUBMIT
                </Button>
              </FormContainer>
            </form>
          </Left>
        </BoxContainer>
      </Wrapper>
      <Table EMI_table={EMI_table} />
      <History
        history={history}
        loanAmount={loanAmount}
        setEMI_table={setEMI_table}
      />
    </Container>
  );
};

export default Content;
