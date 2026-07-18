import axios from "axios";

const username = "Manthanrd";

export const getGithubProfile = async () => {
  const response = await axios.get(
    `https://api.github.com/users/${username}`
  );

  return response.data;
};

export const getRepositories = async () => {
  const response = await axios.get(
    `https://api.github.com/users/${username}/repos?sort=updated`
  );

  return response.data;
};