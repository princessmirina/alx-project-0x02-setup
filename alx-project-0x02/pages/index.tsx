import Header from "../components/layout/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Welcome to My Next.js Project!</h1>
        <p className="mt-4">
          This project is built with Next.js, TypeScript, and Tailwind CSS.
        </p>
      </main>
    </div>
  );
}
