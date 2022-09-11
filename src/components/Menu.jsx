import { useState } from 'react';
import Icone from "./Icone";
import Nav from './Nav';

export default function Menu() {
  const [visivel, setVisivel] = useState(false);
  return(
    <nav className="absolute z-20 w-full">
      <Icone visivel={ visivel } setVisivel={ setVisivel } />
      <Nav visivel={visivel} />
    </nav>
  );
}