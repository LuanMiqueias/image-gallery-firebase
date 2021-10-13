import React, { FormEvent } from 'react';
import * as C from './app.styles';
import Loading from './components/loading';
import PhotoItem from './components/photo';
import * as Photos from './services/photos';
import { IPhoto } from './types/photos';

const App = () => {
  const [uploading, setUploading] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [photos, setPhotos] = React.useState<IPhoto[]>([]);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    (async () => {
      setLoading(true)
      setPhotos(await Photos.getAll());
      setLoading(false)
    })()
  }, [])
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File;

    if (file && file.size > 0) {
      setUploading(true);
      const result = await Photos.insert(file);
      if (result instanceof Error) {
        setError(result.message)
      } else {
        const newPhotoList = [...photos];
        newPhotoList.unshift(result)
        setPhotos([...newPhotoList]);
      }
      setUploading(false);
    }
    else {
      setError('Envie pelo menos uma imagem')

    }
  }
  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>
        <C.UploadPhoto method="POST" onSubmit={handleSubmit} onChange={() => setError('')}>
          <label htmlFor="image">
            <input type="file" name="image" id="image" />
          </label>
          <button type="submit">
            {uploading ? <Loading /> : 'Enviar'}
          </button>
        </C.UploadPhoto>
        <small style={{ padding: '12px', color: '#d3354f', fontWeight: 600 }}>{error && `*${error}`}</small>

        <C.PhotosList>

          {loading &&
            <Loading />
          }
          <div className="content">
            {!loading && photos.length &&

              photos.map((item) => {
                return <PhotoItem name={item.name} url={item.url} key={item.name} />
              })
            }
          </div>
          {!loading && photos.length === 0 &&
            <C.ScreenWarning>
              <div className="emoji">😔</div>
              <div>Não existem fotos cadastradas</div>
            </C.ScreenWarning>
          }
        </C.PhotosList>
      </C.Area>
    </C.Container>
  )
}
export default App