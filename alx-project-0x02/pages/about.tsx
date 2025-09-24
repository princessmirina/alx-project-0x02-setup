import Header from "../components/layout/Header";

export default function About() {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-2xl font-bold">About Page</h1>
        <p className="mt-2">This is the about page.</p>
      </main>
    </div>
  );
}
