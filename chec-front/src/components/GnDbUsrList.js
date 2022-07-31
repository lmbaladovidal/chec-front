import { useState, useEffect } from "react";

import GnDbSidebar from "./GnDbSidebar";
import GnDbNavbar from "./GnDbNavbar";

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

      <div className="w-100 bg-white">
      <GnDbNavbar />
        <ul class="list-group">
          <li className="list-group-item2 active col-lg-12 my-2 color-white" aria-current="true"> Lista de usuarios </li>
        </ul>
        <div>
          <h2 className="my-2  list-group-item2.active">  </h2>
        </div>

        <div className="container ">
          <table className="table table-hover ">
            <thead>
              <tr className="">
                <th scope="col">#</th>
                <th scope="col">Apellido</th>
                <th scope="col">Nombre</th>
                <th scope="col">Email</th>
                <th scope="col">Avatar</th>
                
              </tr>
            </thead>
            <tbody>
              {users.length === 0 && <p>Cargando</p>}
              {users.map((user, i) => {
                return (
                  <tr className="col-9" key={i}>                    
                    <td className="td-user col-1">{user.id}</td>
                    <td className="td-user col-2" >{user.lastName}</td>
                    <td className="td-user col-2">{user.name}</td>
                    <td className="td-user col-2">{user.email}</td>
                    <td className="td-user col-2">
                      <img src={user.avatar} width="30px" alt="avatar"></img>
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
