import styled from "styled-components";
import { mobile } from "../Responsive";
import "./Table.css";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  place-items: center;
`;
const Wrapper = styled.div`
  width: 80%;
  height: auto;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  ${mobile({
    width: "100%",
    padding: "20px",
  })}
`;

const Table = ({ EMI_table }) => {
  return (
    <>
      {EMI_table.length > 0 && (
        <Container>
          <Wrapper>
            <table>
              <thead>
                <tr className="thead">
                  <th scope="col">Month</th>
                  <th scope="col">EMI</th>
                </tr>
              </thead>
              <tbody>
                {EMI_table.map((item, index) => (
                  <tr key={index}>
                    <td data-label="Name">{item.month}</td>
                    <td data-label="Title">{Number(item.EMI).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default Table;
