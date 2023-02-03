import styled from "styled-components";

export const WholePageCSS = styled.section`
  width: 100%;
  background-color: rgb(241, 241, 241);
  padding: 10px 0px 65px 0px ;
 `;
export const BoxCSS = styled.div`
    height: ${(props) => props.height};
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 6px #dddddd;
    margin: 10px;
    .topDesp {
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
  .alldesp{
    display: flex;
    flex-wrap: wrap;
  }
  .singleData{
    width: 40%;
    padding: 5px 20px;
    /* background: #000; */
  }
  span {
    width: 20%;
  }
  .heading {
    font-weight: 800;
  }
  .button {
    padding: 10px 20px;
    border-radius: 20px;
    border: 0px;
    background-color: #3b71ca;
    color: white;
    font-size: 15px;
    cursor: pointer;
  }
  .desp{
    padding: 10px 20px;
  }
`;

export const ButtonsDiv = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  bottom: 0;
  width: 100vw;
  position: fixed;
  background-color: #fff;
`;
