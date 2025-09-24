//Update pages/home.tsx to use Card

import Header from "../components/layout/Header";
import Card from "../components/common/Card";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-8 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Home Page</h1>
        <Card title="Card 1" content="This is the first card content." />
        <Card title="Card 2" content="This is the second card content." />
      </main>
    </div>
  );
}
