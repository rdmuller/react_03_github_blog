import axios from "axios";

export const apiGithubUsers = axios.create({
	baseURL: "https://api.github.com/users"
});