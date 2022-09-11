export default function Icone(props) {
  const { setVisivel, visivel } = props;
  return(
    <div
      className={`flex flex-col fixed top-0 right-0 z-40 p-5`}
      onClick={ () => setVisivel(!visivel) }
    >
      <div className={`${visivel && "rotate-45 translate-y-2"} h-1 w-8 mb-1 bg-white transition duration-500`} />
      <div className={`${visivel && "rotate-_45"}  h-1 w-8 mb-1 bg-white transition duration-500`} />
      <div className={`${visivel ? "hidden" : "flex"} h-1 w-8 mb-1 bg-white transition duration-500`} />
    </div>
  );
}