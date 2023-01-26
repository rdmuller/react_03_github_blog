import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Posts } from "./pages/Posts";
import { Post } from "./pages/Posts/Post";

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/" element={<Posts />} />
				<Route path="/post/:number" element={<Post />} />
			</Route>
		</Routes>
	);
}