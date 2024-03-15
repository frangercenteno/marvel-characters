import { fetchData } from "@/shared/lib/fetch";
import CharacterHero from "@/shared/components/features/CharacterHero";
import ComicsContainer from "@/shared/components/features/ComicsContainer";
import ErrorMessage from "@/shared/components/ui/ErrorMessage";
import MainLayout from "@/shared/layouts/MainLayout";
import type { Character, Comic } from "@/shared/types";
import { GET_CHARACTER_BY_ID } from "@/shared/services/getCharacterById";
import { GET_ALL_COMICS_BY_CHARACTER } from "@/shared/services/getAllComicsByCharacter";

async function getData(characterId: string): Promise<
  | {
      character: Character;
      comics: Comic[];
    }
  | Error
> {
  try {
    const characterPromise = fetchData(GET_CHARACTER_BY_ID(characterId));
    const comicsPromise = fetchData(GET_ALL_COMICS_BY_CHARACTER(characterId));

    const [characterResponse, comicsResponse] = await Promise.all([
      characterPromise,
      comicsPromise,
    ]);

    return {
      character: characterResponse.data.results[0],
      comics: comicsResponse.data.results,
    };
  } catch (error) {
    throw new Error(error as string);
  }
}

export default async function Character({
  params,
}: {
  params: { characterId: string };
}) {
  const result = await getData(params.characterId as string);

  if (result instanceof Error) {
    return <ErrorMessage message={result.message} />;
  }

  const { character, comics } = result;
  return (
    <MainLayout>
      <main>
        <CharacterHero character={character} />
        <ComicsContainer comics={comics} />
      </main>
    </MainLayout>
  );
}
