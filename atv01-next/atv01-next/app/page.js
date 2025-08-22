import { Profile } from "@/components/Profile";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Site criado para a disciplina Programação Front-End
      </h1>
      <Profile />
    </div>
  );
}