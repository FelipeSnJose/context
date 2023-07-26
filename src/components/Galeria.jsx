import { useContext } from "react";
import "../assets/css/galeria.css";
import MyContext from "../contexts/MyContext";
import Heart from "./Heart"

const Galeria = ({ showOnlyFavoritos }) => {
  const { data, setData } = useContext(MyContext);

  const setLiked = (id) => {
    setData((prevData) => ({
      ...prevData,
      photos: prevData.photos.map((photo) =>
        photo.id === id ? { ...photo, liked: !photo.liked } : photo
      ),
    }));
  };

  const filteredPhotos = showOnlyFavoritos ? data.photos.filter((photo) => photo.liked) : data.photos;

  return (
    <div className="galeria grid-columns-5 p-3">
      {filteredPhotos.map((photo) => (
        <div
          onClick={() => setLiked(photo.id)}
          key={photo.id}
          className="foto"
          style={{ backgroundImage: `url(${photo.src.original})` }}
        >
          <Heart filled={photo.liked} />
          <span>{photo.alt}</span>
        </div>
      ))}
    </div>
  );
};

export default Galeria;