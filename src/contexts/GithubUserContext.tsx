import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { __gitUser } from "../config";
import { apiGithub } from "../lib/axios";

interface GithubUser {
	login: string;
    name: string;
    company: string;
    bio: string;
    followers: number;
    avatar_url: string;
	html_url: string;
}

interface GithubUserContextType {
    user: GithubUser;
}

interface GithubUserProviderProps {
    children: ReactNode;
}

export const GithubUserContext = createContext({} as GithubUserContextType);

export function GithubUserProvider({ children, }: GithubUserProviderProps) {
	const [user, setUser] = useState<GithubUser>({} as GithubUser);

	const fetchUser = useCallback(async (userLogin: string) => {
		const response = await apiGithub.get(`users/${userLogin}`, {});
		setUser(response.data);
	}, []);

	useEffect(() => {
		fetchUser(__gitUser);
	}, [fetchUser]);

	return (
		<GithubUserContext.Provider value={ { user } }>
			{children}
		</GithubUserContext.Provider>
	);
}