import { useCatImage } from '../hooks/useCatImage';

export function Otro() {
  const { imageUrl } = useCatImage({ fact: 'cat strange fight' });

  return <>{imageUrl && <img src={imageUrl} />}</>;
}
