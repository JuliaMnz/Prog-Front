import { Profile } from "@/components/Profile";

export default function Home() {
  return (
    <div>
      <h1 className="frase">
        Site criado para a disciplina Programação Front-End
      </h1>
      <hr />
      <Profile />
    </div>
  );
}