import Card from "@/components/Card";

export default function Home() {
  return (
    <main>
      <div>
        <div className="container mt-6 has-text-centered">
          <h2 className="title is-4">Pick your favorite song:</h2>
          <div className="columns is-justify-content-center">
            <Card title="one" />
            <Card title="two" />
          </div>
        </div>
      </div>
    </main>
  );
}
