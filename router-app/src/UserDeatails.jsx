import React from "react";
import { useParams } from "react-router-dom";

function UserDeatails() {
  //user/lavi 
  //lavi - id :id
  const param = useParams();
  return <div>UserDeatails : {param?.id}</div>;
}

export default UserDeatails;
