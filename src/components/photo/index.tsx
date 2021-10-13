import React from 'react';
import { IPhoto } from '../../types/photos';
import Loading from '../loading';
import * as P from './photo.styles';

interface IProps {
  name: string
  url: string
}
const PhotoItem: React.FC<IProps> = ({ name, url }) => {
  console.log(name)
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
  }, [])
  return (
    <P.Photo>
      <div className="image" >
        {loading && <div className="loading-container">
          <Loading />
        </div>
        }

        <img src={url} onLoad={() => setLoading(false)} className={!loading ? 'show' : 'hide'} />
      </div>
      <p>{name}</p>
    </P.Photo>
  )
}
export default PhotoItem