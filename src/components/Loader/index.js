import { Overlay } from './styles';
import Spinner from '../Spinner';

export default function Loader() {
  return (
    <Overlay>
      <Spinner size={90} />
    </Overlay>
  );
}
