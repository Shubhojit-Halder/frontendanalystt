import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Box from "./Box";
import worldMapData from "city-state-country";
import { BoxCSS, ButtonsDiv, WholePageCSS } from "./styles/box.module";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Pagination from "@mui/material/Pagination";
import zipState from "zip-state";
const Main = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const listOfStates = [];
  var numbers = [];
  const maxPageNo = Math.ceil(data.length / 5);
  console.log(`maxPageNo${maxPageNo}`);
  for (let i = 0; i < maxPageNo; i++) {
    numbers.push(i);
  }
  console.log(maxPageNo);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      listOfStates.push(await worldMapData.searchCity(data.data[0].address.city));
      console.log(data.data);
      setData(data.data);
      console.log(numbers);
    };
    getData();
    console.log(listOfStates);
  }, [page]);

  return (
    <WholePageCSS>
      {data.map((data, index) => {
        if (index < page * 5 + 5 && index >= page * 5) {
          return (
            <Box
              key={index}
              company={data.company.name}
              name={data.name}
              city={data.address.city}
              state={"Unknown"}
              desp={data.company.catchPhrase}
              suite={data.address.suite}
              street={data.address.street}
              email={data.email}
              phone={data.phone}
              country={'Unknown'}
            />
          );
        }
      })}
      <ButtonsDiv>
        <Pagination
          count={maxPageNo}
          onChange={(event, value) => {
            setPage(value - 1);
          }}
          color="primary"
          className="footer"
        />
      </ButtonsDiv>
    </WholePageCSS>
  );
};

export default Main;
