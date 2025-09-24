import Header from "../components/layout/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-2xl font-bold">Home Page</h1>
        <p className="mt-2">Welcome to the home page!</p>
      </main>
    </div>
  );
}
