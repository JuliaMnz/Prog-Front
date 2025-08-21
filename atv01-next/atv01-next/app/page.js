import Profile from "../components/Profile";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6">
        Site criado para a disciplina Programação Front-End
      </h1>
      <Profile />
    </div>
  );
}