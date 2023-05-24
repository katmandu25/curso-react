const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact';

export const getRandomFact = () => {
  return fetch(CAT_ENDPOINT_FACT)
    .then((res) => res.json())
    .then((data) => {
      const { fact } = data; // Recupero el texto
      console.log('RETORNO-', fact)
      return fact;
    })
};
