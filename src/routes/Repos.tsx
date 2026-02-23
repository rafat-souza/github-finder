import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { type RepoProps } from "../types/repo";

import BackBtn from "../components/BackBtn";
import Loader from "../components/Loader";

import classes from "./Repos.module.css";

const Repos = () => {
  const { username } = useParams();

  const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadRepos = async (username: string) => {
      setIsLoading(true);

      const res = await fetch(`https://api.github.com/users/${username}/repos`);

      const data = await res.json();

      setIsLoading(false);
    };

    if (username) {
      loadRepos(username);
    }
  }, []);

  return (
    <div>
      <BackBtn />
    </div>
  );
};

export default Repos;
