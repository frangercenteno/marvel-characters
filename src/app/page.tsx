import CharactersContainer from "@/shared/components/features/CharactersContainer";
import SearchIcon from "@/shared/components/ui/Icons/SearchIcon";
import Label from "@/shared/components/ui/Label";
import TextField from "@/shared/components/ui/TextField";
import MainLayout from "@/shared/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <main className="container">
        <TextField
          placeholder="Search a character..."
          id="search"
          role="search"
          Icon={<SearchIcon />}
        />
        <Label text="50 Results" />
        <CharactersContainer characters={[1, 2, 3, 4, 5, 6]} />
      </main>
    </MainLayout>
  );
}
