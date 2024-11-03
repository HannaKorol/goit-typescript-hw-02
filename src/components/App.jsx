import { useEffect, useState } from "react";
import Loader from "./Loader/Loader.jsx";
import ErrorMessage from "./ErrorMessage/ErrorMessage.jsx";
import fetchImages from "../services/api.jsx";
import SearchBar from "./SearchBar/SearchBar.jsx";
import ImageGallery from "./ImageGallery/ImageGallery.jsx";
import "./App.css";
import { Toaster } from "react-hot-toast";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "./ImageModal/ImageModal.jsx";

export default function App() {
  const [images, setImages] = useState([]); //is initialized as an empty array because it will store the data fetched from the API and then show it in our Result Section
  const [loading, setLoading] = useState(false); // lectioon 1 (50:28)
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(""); //it will be used to store the input from the search bar (and that is also a string).
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image
  const [isModalOpen, setIsModalOpen] = useState(false);

  //1)HTTP-запити можна виконувати як за подією(при кліку на елементі чи відправці форми) або при монтажі компонента. 2-варіант - використовується ефект - оскільки компонент є в ДОМ і готовий оновлювати стан. Але Оскільки тепер користувач сам вводить рядок для пошуку статей, нам не потрібний ефект.
  //вся логіка запиту і обробки службового стейту (isLoading, error) виконуєится в useEffect з залежностями [query, page]
  //Використовуємо UseEffect тому що треба робити запит після рендерингу всього компонента.
  //Функція буде викликана кожен раз при зміні номера сторінки:
  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        setError(false); // при новому запиті помилка зникає
        setLoading(true);
        const data = await fetchImages(page, query);
        setLoading(false);
        setImages((prev) => [...prev, ...data]);
      } catch {
        setError(true);
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
  const handleSetQuery = (topic) => {
    setQuery(topic);
    setImages([]);
    setPage(1); //скидання сторінок якщо ми шукаємо по іншій темі пошуку
  };

  const handleImageClick = (imageUrl) => {
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
      {error && <ErrorMessage />}
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
}

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
