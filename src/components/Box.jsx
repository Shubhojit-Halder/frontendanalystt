import React, { useState } from "react";
import { BoxCSS, ButtonsDiv } from "./styles/box.module";
import zipState from "zip-state";

const Box = (props) => {
  const [view, setView] = useState(false);
  return (
    <>
      <BoxCSS height={view ? "350px" : "90px"}>
        <div className="topDesp">
          <span>
            <div className="data">{props.company}</div>
          </span>
          <span>
            <div className="heading">CONTACT</div>
            <div className="data">{props.name}</div>
          </span>
          <span>
            <div className="heading">CITY</div>
            <div className="data">{props.city}</div>
          </span>
          <span>
            <div className="heading">STATE</div>
            <div className="data">{props.state}</div>
          </span>
          <button className="button" onClick={() => setView(!view)}>
            view all
          </button>
        </div>
        <div className="viewPart">
          {view ? (
            <>
              <div className="desp">
                <div className="heading">Description</div>
                <div>{props.desp}</div>
              </div>
              <div className="alldesp">
                <span className="singleData">
                  <div className="heading">Contact Person</div>
                  <div className="data">{props.name}</div>
                </span>
                <span className="singleData">
                  <div className="heading">Address</div>
                  <div className="data">{props.suite},{props.street},{props.city} </div>
                </span>
                <span  className="singleData">
                  <div className="heading">Designation</div>
                  <div className="data">Owner</div>
                </span>
                <span  className="singleData">
                  <div className="heading">City</div>
                  <div className="data">{props.city}</div>
                </span>
                <span  className="singleData">
                  <div className="heading">Emails</div>
                  <div className="data">{props.email}</div>
                </span>
                <span  className="singleData">
                  <div className="heading">State</div>
                  <div className="data">{props.state}</div>
                </span>
                <span  className="singleData">
                  <div className="heading">Phones</div>
                  <div className="data">{props.phone}</div>
                </span>
                <span  className="singleData">
                  <div className="heading">Country</div>
                  <div className="data">{props.country}</div>
                </span>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </BoxCSS>
    </>
  );
};

export default Box;
