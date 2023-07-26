import Galeria from "../components/Galeria";

const Favoritos = () => {
  return (
    <div>
      <h2>Fotos Favoritas</h2>
      <Galeria showOnlyFavoritos={true} />
    </div>
  );
};

export default Favoritos;