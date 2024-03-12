import CharacterHero from "@/shared/components/features/CharacterHero";
import ComicsContainer from "@/shared/components/features/ComicsContainer";
import MainLayout from "@/shared/layouts/MainLayout";

const comicsData = [
  {
    id: 1,
    image: "/assets/Comics_photo.jpg",
    title: "The Amazing spider",
    age: "1992",
  },
  {
    id: 2,
    image: "/assets/Comics_photo.jpg",
    title: "The Amazing spider",
    age: "1992",
  },
  {
    id: 3,
    image: "/assets/Comics_photo.jpg",
    title: "The Amazing spider",
    age: "1992",
  },
  {
    id: 4,
    image: "/assets/Comics_photo.jpg",
    title: "The Amazing spider",
    age: "1992",
  },
  {
    id: 5,
    image: "/assets/Comics_photo.jpg",
    title: "The Amazing spider",
    age: "1992",
  },
  {
    id: 6,
    image: "/assets/Comics_photo.jpg",
    title: "The Amazing spider",
    age: "1992",
  },
  {
    id: 7,
    image: "/assets/Comics_photo.jpg",
    title: "The Amazing spider",
    age: "1992",
  },
  {
    id: 8,
    image: "/assets/Comics_photo.jpg",
    title: "The Amazing spider",
    age: "1992",
  },
  {
    id: 9,
    image: "/assets/Comics_photo.jpg",
    title: "The Amazing spider",
    age: "1992",
  },
  {
    id: 10,
    image: "/assets/Comics_photo.jpg",
    title: "The Amazing spider",
    age: "1992",
  },
  {
    id: 11,
    image: "/assets/Comics_photo.jpg",
    title: "The Amazing spider",
    age: "1992",
  },
];

export default function Character() {
  return (
    <MainLayout>
      <main>
        <CharacterHero
          id={1}
          name="Spiderman"
          image="/assets/Character.png"
          description="Created by the Enclave to be part of a race of super humans who would abolish war, illness, and crime, Adam Warlock is a unique being who uses his immense and formidable powers to safeguard the universe."
          isFavorite={true}
        />
        <ComicsContainer comics={comicsData} />
      </main>
    </MainLayout>
  );
}
