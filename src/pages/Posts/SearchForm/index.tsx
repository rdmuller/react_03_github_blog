import { SearchFormContainer } from "./styles";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface SearchFormProps {
	QtyPosts: number;
	setSearchText: (value: string) => void;
}

const searchFormSchema = z.object({
	query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm ({QtyPosts, setSearchText}:SearchFormProps) {
	const { register, watch, handleSubmit } = useForm<SearchFormInputs>({
		resolver: zodResolver(searchFormSchema),
	});

	function handleSearchIssues() {
		const searchText = watch("query");
		setSearchText(searchText);
	}

	return (
		<SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
			<div>
				<h3>Publicações</h3>
				<span>{QtyPosts + (QtyPosts === 1 ? " publicação" : " publicações")}</span>
			</div>

			<input 
				type="text" 
				placeholder="Buscar conteúdo" 
				{...register("query")} 
			/>
			
		</SearchFormContainer>
	);
}