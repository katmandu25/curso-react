import { Square } from './Square';
import { TURNOS } from '../constants';

export function Turnos({ turn }) {
  return (
    <section className='turn'>
      <Square isSelected={turn === TURNOS.X}>{TURNOS.X}</Square>
      <Square isSelected={turn === TURNOS.O}>{TURNOS.O}</Square>
    </section>
  );
}
