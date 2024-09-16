export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4">
      <h1 className="text-3xl font-bold">Taiteilija</h1>
      <img 
        src="/pics/muusikko.png"img
        alt="muusikko"
        className="w-[60vw]"/>
      <div className="w-[60vw] mt-8">
        <p>Mitä tähän laitettaisiin? Tähän esittely taiteilijasta. Kuvaus kaikesta mitä haluaa kertoa. Plaaplaaplaa.</p>
      </div>
    </div>
  );
}
