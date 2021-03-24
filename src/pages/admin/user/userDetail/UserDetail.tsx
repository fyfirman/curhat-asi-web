import React from "react";
import { useParams } from "react-router-dom";

const ShowUser = () => {
  const { id } = useParams<{ id: string }>();

  return <div>User id : {id}</div>;
};

export default ShowUser;
