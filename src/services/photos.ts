import { storage } from "../libs/firebase";
import { IPhoto } from "../types/photos";
import { ref, listAll, getDownloadURL, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
export const getAll = async () => {
  const imagensFolder = ref(storage, 'images'); // Entra dentro da pasta chamada 'images'
  const photoList = await listAll(imagensFolder); // Pega tudo que existe na pasta imagens
  const list = [] as IPhoto[];

  for (let i in photoList.items) {
    const photoURL = await getDownloadURL(photoList.items[i]) as string; // URL do item
    list.push({
      name: photoList.items[i].name,
      url: photoURL
    } as IPhoto)
  }
  return list;
}

export const insert = async (file: File) => {
  if (['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
    const randomName = v4();
    const newFile = ref(storage, `images/${randomName}`);

    const upload = await uploadBytes(newFile, file);
    const photoUrl = await getDownloadURL(upload.ref);

    return { name: upload.ref.name, url: photoUrl }
  }
  else {
    return new Error('Tipo de arquivo não permitido')
  }
}