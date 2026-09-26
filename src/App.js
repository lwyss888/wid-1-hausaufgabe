import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/*Dein Code unter dieser Zeile  */}
    <h1>Fachhochschule Nordwestschweiz</h1>

    <div className="Box">
      <div>
        <p>Die <strong>Fachhochschule Nordwestschweiz</strong> (FHNW) ist eine <a href="https://de.wikipedia.org/wiki/Fachhochschule" target="_blank">Fachhochschule</a> {" "}  
        in der <a href="https://de.wikipedia.org/wiki/Schweiz" target="_blank">Schweiz</a> und ist in der Lehre, Forschung, Weiterbildung und Dienstleistung tätig. Sie ist eine interkantonale öffentlich-rechtliche Anstalt mit eigener Rechtspersönlichkeit.[4] 
        Träger sind die Kantone Aargau, Basel-Landschaft, Basel-Stadt und Solothurn. Die FHNW umfasst folgende zehn Hochschulen, die auf die Standorte Basel, Brugg-Windisch, Muttenz und Olten konzentriert sind: 
        Angewandte Psychologie, Architektur, Bau und Geomatik, Gestaltung und Kunst, Informatik, Life Sciences, Musik, Lehrerinnen- und Lehrerbildung, Soziale Arbeit, Technik und Umwelt sowie Wirtschaft. Der Hauptsitz ist in Windisch.</p>
      </div>
      <div id="R1">
        <h2>Fachhochschule Nordwestschweiz</h2>
        <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/FHNW_Logo.svg/500px-FHNW_Logo.svg.png?utm_source=de.wikipedia.org&utm_camp"
        width={200}/>
        <div className="Box2">
          <div className="T1">
            <div className="Links">Gründung</div>
            <div className="Rechts">1. Januar 2006</div>
            </div>
          <div className="T1">
            <div className="Links">Trägerschaft</div>
            <div className="Rechts">Kantone Aargau, Basel-Landschaft, Basel-Stadt, Solothurn</div>
            </div>
          <div className="T1">
            <div className="Links">Ort</div>
            <div className="Rechts">Windisch AG, Muttenz, Olten, Basel</div>
            </div>
        </div>
        </div>
        </div>

        {/*Dein Code über dieser Zeile  */}
    </div>
  );
}
