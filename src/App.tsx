import Site from "./Site";
import { sites } from "./_data";

export default function LandingPage() {
  return (
    <main>
      {sites.map((site) => (
        <Site key={site.url} {...site} />
      ))}
    </main>
  );
}
