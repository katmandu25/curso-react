import './App.css';

import { useCatImage } from './hooks/useCatImage';
import { useCatFact } from './hooks/useCatFact';
import { Otro } from './components/Otro';

export function App() {
  // const [fact, setFact] = useState(); Lo saco al CUSTOM_HOOK
  // const [imageUrl, setImageUrl] = useState(); Lo saco al CUSTOM_HOOK
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  // Para recuperar la cita al cargar la página. Lo sacamos a un CUSTOM_HOOK
  /*  useEffect(() => {
    console.log('BEFORE-', fact);
    /* Me quedo to loco. Esto:
     getRandomFact().then(setFact);
       es lo mismo que esto.
    getRandomFact().then((response)=>
      setFact(response);
    });
    Aun así es mala práctica. Mejor esto
    
    getRandomFact().then((newFact) => setFact(newFact));
    console.log('AFTER- ', fact);
  }, []); */

  // Para recuperar la imagen cada vez que tenemos una cita nueva. Losacamos a un CUSTOM_HOOK
  /* useEffect(() => {
    if (!fact) return;
    /*
        const firstWord = fact.split(' ')[0];
        console.log(firstWord);
        // Si me piden las tres primeras seria así
        
    const threeFirstWords = fact.split(' ').slice(0, 3).join(' ');
    
        const threeFirstWordsMejor = fact.split(' ', 3).join(' ');
        console.log(threeFirstWords);
        console.log(threeFirstWordsMejor);
        
    fetch(
      `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        const { url } = response;
        setImageUrl(url);
        console.log(response);
      });
  }, [fact]); */

  const handleClick = () => {
    /* getRandomFact().then((response) => {
      setFact(response);
      console.log('RESPONSE', response); */
    refreshFact();
  };

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new Fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Imagen obtenida a partir de la api de gatos y el texto ${fact}`}
        />
      )}
      <Otro />
      <Otro />
      <Otro />
      <Otro />
      <Otro />
    </main>
  );
}
