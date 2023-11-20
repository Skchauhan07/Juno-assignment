import React, { useState } from "react";
import { Table } from "reactstrap";
import "../css_files/Table.css"

let pendingData = require("../data/MOCK_DATA.json");

function MyTable() {
  const [risk, setRisk] = useState("");
  const [reason, setReason] = useState("");
  const [query, setQuery] = useState("");

  const [datas, setData] = useState(pendingData);

  return (
      <>
      <div className="table">
      <div className="forSearch row">
        <div className="col-4">
          <input
            type="text"
            placeholder="Search"
            onChange={(event) => setQuery(event.target.value)}
            />
        </div>
        <div className="col-2">
          <select
            class="form-control form-control-lg"
            onChange={(e) => {
                setRisk(e.target.value);
            }}
          >
            <option>Risk Level</option>
            <option>low</option>
            <option>medium</option>
            <option>high</option>
          </select>
        </div>
        <div className="col-2">
          <select
            class="form-control form-control-lg"
            onChange={(e) => {
                setReason(e.target.value);
            }}
            >
            <option>Reason</option>
            <option>ipaddress</option>
            <option>fifo</option>
          </select>
        </div>
      </div>

      <div>
        <Table>
          <thead>
            <tr>
              <th>User</th>
              <th>Risk Level</th>
              <th>Trigger Reason</th>
              <th>In Queue For</th>
              <th>Data Added On</th>
              <th>Previously Reviewed</th>
            </tr>
          </thead>
          <tbody>
            {datas
              ?.filter((data) => {
                  // if (
                      //   data.username
                      //     .toLocaleLowerCase()
                      //     .includes(query.toLocaleLowerCase())
                      // ) {
                          //   return data;
                          // } else if (
                              //   data.email
                              //     .toLocaleLowerCase()
                //     .includes(query.toLocaleLowerCase())
                // ) {
                    //   return data;
                    // } else 
                    if (reason === "" || risk === "") {
                        return data;
                    } else if (
                        data.risk.toLowerCase().includes(risk.toLowerCase()) &&
                        data.reason.toLowerCase().includes(reason.toLowerCase())
                        ) {
                            return data;
                        }
                    })
                    .map((data) => {
                console.log(data);
                return (
                  <tr>
                    <th scope="row">
                      {data.username} <br />
                      {data.email}
                    </th>
                    <td>{data.risk}</td>
                    <td>{data.reason}</td>
                    <td>{data.queue}</td>
                    <td>{data.added}</td>
                    <td>
                      {data.reviewed ? "Yes" : "No"} <br />
                      {data.reviewed ? data.reviewed_date : ""}
                    </td>
                  </tr>
                );
            })}
          </tbody>
        </Table>
      </div>
      </div>
    </>
  );
}

export default MyTable;
