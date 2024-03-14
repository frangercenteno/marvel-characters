import CharactersContainer from "@/shared/components/features/CharactersContainer";
import ErrorMessage from "@/shared/components/ui/ErrorMessage";

import { CharacterProvider } from "@/shared/contexts/CharactersContext";
import MainLayout from "@/shared/layouts/MainLayout";
import { fetchData } from "@/shared/lib/fetch";
import { GET_ALL_CHARACTERS } from "@/shared/services/getAllCharacters";
import { type Character } from "@/shared/types";

async function getData(): Promise<Character[] | Error> {
  try {
    const res = await fetchData(GET_ALL_CHARACTERS);
    return res.data.results;
  } catch (error) {
    throw new Error(error as string);
  }
}

export default async function Home() {
  const response = await getData();

  if (response instanceof Error) {
    return <ErrorMessage message={response.message} />;
  }

  return (
    <MainLayout>
      <CharacterProvider charactersProps={response}>
        <CharactersContainer />
      </CharacterProvider>
    </MainLayout>
  );
}
