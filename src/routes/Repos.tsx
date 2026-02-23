import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import BackBtn from "../components/BackBtn";

import classes from "./Repos.module.css";

const Repos = () => {
  const { username } = useParams();

  return (
    <div>
      <BackBtn />
    </div>
  );
};

export default Repos;
