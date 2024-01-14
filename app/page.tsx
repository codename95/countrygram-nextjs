import CountryItem from "./components/CountryItem";

async function getCountries() {
  const res = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags');
  const data = await res.json();
  return data as any[];
}
export default async function Home() {
  const countries = await getCountries();

  return (
    <main className="container mt-5">
      <h2>Countries</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {
          countries?.map((country) => {
            return <CountryItem key={country.cca2} country={country} />
          })
        }
      </div>
    </main>
  );
}
