
export default function Nav(props) {
  const { visivel } = props;
  return(
    <div className="flex relative">
      <ul className={`${visivel ? "w-full sm:w-48" : "w-0"} transition-width duration-500 flex flex-col font-bold h-screen fixed pt-20 right-0 bg-half-transparent justify-center items-center`}>
        <li className={`${visivel ? 'flex' : 'hidden'} text-white hover:text-salmon w-full sm:w-32 m-1 p-5 justify-center`}>
          Início
        </li>
        <li className={`${visivel ? 'flex' : 'hidden'} text-white hover:text-salmon w-full sm:w-32 m-1 p-5 justify-center`}>
          Categorias
        </li>
        <li className={`${visivel ? 'flex' : 'hidden'} text-white hover:text-salmon w-full sm:w-32 m-1 p-5 justify-center`}>
          Filtros
        </li>
        <li className={`${visivel ? 'flex' : 'hidden'} text-white hover:text-salmon w-full sm:w-32 m-1 p-5 justify-center`}>
          Sobre
        </li>
        <li className={`${visivel ? 'flex' : 'hidden'} text-white hover:text-salmon w-full sm:w-32 m-1 p-5 justify-center`}>
          FAQ
        </li>
      </ul>
    </div>
  );
}