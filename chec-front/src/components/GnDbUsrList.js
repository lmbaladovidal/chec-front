import { useState, useEffect } from "react";

import GnDbSidebar from "./GnDbSidebar";


function GnDbUsrList() {
  const urlUsers = "http://localhost:3001/api/users";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("Mount Component users desde GnDbPrdList", "color:red");
    fetch(urlUsers, { mode: "cors" })
      .then((response) => response.json())

      .then((response) => {
        console.log("USERS desde USERS");
        console.log(response.data.users);
        setUsers(response.data.users);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log(
      "%cse actualizó el componente users desde GnDbPrdList",
      "color:green"
    );
  }, [users]);

  return (
    <div className="d-flex" id="content-wrapper">
      <GnDbSidebar />

      <div className="w-100">
        

        <div>
          <h2 className="my-3 mx-3"> Lista de usuarios </h2>
        </div>

        <div className="container">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Apellido</th>
                <th scope="col">Nombre</th>
                <th scope="col">Email</th>
                
              </tr>
            </thead>
            <tbody>
              {users.length === 0 && <p>Cargando</p>}
              {users.map((user, i) => {
                return (
                  <tr key={i}>
                    <td className="td-user">{user.id}</td>
                    <td className="td-user">{user.name}</td>
                    <td className="td-user">{user.name}</td>
                    <td className="td-user">{user.mail}</td>
                    <td className="td-user">
                      <img src={users.avatar} width="30px" alt="avatar"></img>
                    </td>
                    
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default GnDbUsrList;
