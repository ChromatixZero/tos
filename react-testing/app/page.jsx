import Kiffer from "./kiffer";

function HeaderP({ p1 }) {
  return <h1>{p1 ? p1 : "Default cock size"}</h1>;
}

function HeaderZ(z) {
  return (
    <h1>
      {z.p1} <br /> et <br /> {z.p2}
    </h1>
  );
}

export default function HomePage() {
  const pornoWords = [
    "Périné Audacieux",
    "Scrotum Divinorum",
    "Pourtour Anorectal",
  ];

  return (
    <div>
      <HeaderZ p1="React" p2="Cock" />
      <HeaderP />
      <HeaderP p1="BONJOULE!" />

      <p>Cette liste comporte des termes sexuels excitants:</p>

      <ul>
        {pornoWords.map((q) => (
          <li key={q}>{q}</li>
        ))}
      </ul>
      <Kiffer />
    </div>
  );
}
