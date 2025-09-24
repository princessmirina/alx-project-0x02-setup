import Header from "../components/layout/Header";
import Button from "@/components/common/Button";

export default function About() {
  return (
    <div>
      <Header />
      <main className="p-8 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">About Page</h1>
        <div className="flex gap-4">
          <Button size="small" shape="rounded-sm">
            Small
          </Button>
          <Button size="medium" shape="rounded-md">
            Medium
          </Button>
          <Button size="large" shape="rounded-full">
            Large
          </Button>
        </div>
      </main>
    </div>
  );
}
