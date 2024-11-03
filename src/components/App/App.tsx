import { useEffect, useRef, useState } from "react";
import Loader from "../Loader/Loader";
import fetchImages from "../Api/api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import "./App.css";
import { Toaster } from "react-hot-toast";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { Image } from "../Api/Api.types";
import { ErrorMessage } from "formik";



const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]); //is initialized as an empty array because it will store the data fetched from the API and then show it in our Result Section
  const [loading, setLoading] = useState<boolean>(false); // lectioon 1 (50:28)
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>(""); //it will be used to store the input from the search bar (and that is also a string).
  const [selectedImage, setSelectedImage] = useState<Image | null>(null); // State for selected image
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  //1)HTTP-запити можна виконувати як за подією(при кліку на елементі чи відправці форми) або при монтажі компонента. 2-варіант - використовується ефект - оскільки компонент є в ДОМ і готовий оновлювати стан. Але Оскільки тепер користувач сам вводить рядок для пошуку статей, нам не потрібний ефект.
  //вся логіка запиту і обробки службового стейту (isLoading, error) виконуєится в useEffect з залежностями [query, page]
  //Використовуємо UseEffect тому що треба робити запит після рендерингу всього компонента.
  //Функція буде викликана кожен раз при зміні номера сторінки:

  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        setError(null); // при новому запиті помилка зникає
        setLoading(true);
        const data = await fetchImages(page, query);
        setLoading(false);
        setImages((prev) => [...prev, ...data]);
      } catch {
        setError("Failed to load images. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [page, query]);

  const handleChangePage = () => {
    setPage((prev) => prev + 1); //коли натискають на кнопку - збільшується state -  setPage
  };

  //Скидаємо збереженні сторінки і запити пошуку:
  const handleSetQuery = (topic: string) => {
    setQuery(topic);
    setImages([]);
    setPage(1); //скидання сторінок якщо ми шукаємо по іншій темі пошуку
  };

  const handleImageClick = (imageUrl: Image) => {
    setSelectedImage(imageUrl); // Update the selected image
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedImage(null); // Clear the selected image
  };

  return (
    <div>
      <SearchBar setQuery={handleSetQuery} />
      <Toaster position="top-right" reverseOrder={false} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleChangePage} />
      )}
      {isModalOpen && (
        <ImageModal
          imageUrl={selectedImage}
          onRequestClose={closeModal}
          isOpen={isModalOpen}
        />
      )}
    </div>
  );
};

export default App;

// Відображення номера сторінки для вибору !! Корисна відмальовка
/*  <div>
   {Array(10)
   .fill('')
   .map((_, i) =>(   //(item, index, array, _ означає що це не потрібно)
    <button key={i} onClick={() => setPage(i + 1)}> 
    {i+1}
    </button>
    ))
   }
   </div> */

/*   const handleSearch = async (topic) => {
    try {
      setImages([]);
      setError(false);
      setLoading(true);
      const data = await fetchImagesWithTopic(topic);
      setImages(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false)
    }
   }; */

/*    //вся логіка запиту і обробки службового стейту (isLoading, error) виконуєится в useEffect з залежностями [query, page]
  useEffect(() => {
    if (!query) return;
    //логіка запиту і його подальшої обробки
  }, [query, page]); */

//-----------

/*   Loader:
  1)Додали стейт
  2) Додали лоадер в функцію 
  3) Додали до розмітки з якої зробили окремий компонент і винисли в окрему папку а до розмітки додали тільки посилання  */
