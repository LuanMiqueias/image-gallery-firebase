import React from 'react';
import { deletePhoto } from '../../services/photos';
import { IPhoto } from '../../types/photos';
import Loading from '../loading';
import * as P from './photo.styles';

interface IProps {
  name: string;
  url: string;
  photos: IPhoto[];
  changePhotos: (newPhotosList: IPhoto[]) => void;
}
const PhotoItem: React.FC<IProps> = ({ name, url, photos, changePhotos }) => {
  console.log(name)
  const [loading, setLoading] = React.useState(false);
  const [updating, setUpdating] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
  }, [])
  async function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, name: string) {
    setUpdating(true);
    e.preventDefault();
    const result = await deletePhoto(name);
    if (!result) {
      return
    } else {
      const newPhotosList = photos.filter((item) => {
        return item.name !== result
      })
      changePhotos(newPhotosList)
    }
    setUpdating(false);
  }
  return (
    <P.Photo>
      {updating ?
        <Loading />
        : <>
          <div className="image">
            {loading && <div className="loading-container">
              <Loading />
            </div>
            }

            <img src={url} onLoad={() => setLoading(false)} className={!loading ? 'show' : ''} />
          </div>
          <p>{name}</p>
          <div className="delete">
            <button onClick={(e) => handleClick(e, name)}>Delete</button>
          </div></>}
    </P.Photo>
  )
}
export default PhotoItem