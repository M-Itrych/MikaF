import AdminGoTo from "./AdminGoTo";
import axios from "axios";
import config from '../../config.json'

const AdminAddNews = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const authKey = sessionStorage.getItem('token');
        const formData = new FormData(event.target);

        const url = formData.get("url");
        const alt = formData.get("alt");
        const title = formData.get("title");
        const desc = formData.get("description");
        const content = formData.get("content");

        try {
            const response = await axios.post(
                `${config.apiUrl}/api/add/news`,
                {
                    url: url,
                    alt: alt,
                    title: title,
                    description: desc,
                    text: content
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: authKey
                    }
                }
            );

            if (response.status === 200) {
                alert("Aktualność dodana poprawnie!")
            }
        } catch (error) {
            alert(error.response.data.error);
        }
    };

    return (
        <main className='admin-main'>
            <form id="admin-news-add-form" onSubmit={handleSubmit}>
                <h2>Dodawanie Aktualności</h2>
                <AdminGoTo path={"/Admin/dashboard/"} />
                <label htmlFor='url'>
                    <span>Link do zdjęcia</span>
                    <input type='text' name='url' id='url' placeholder="https://imgur.com/" />
                </label>
                <label htmlFor='alt'>
                    <span>Krótki opis zdjęcia</span>
                    <input type='text' name='alt' id='alt' placeholder="np: zdjecie przedstawiajace rury" />
                </label>
                <label htmlFor='title'>
                    <span>Tytuł</span>
                    <input type='text' name='title' id='title' placeholder="Nowoczesne rozwiązania w instalacjach wodno-kanalizacyjnych" />
                </label>
                <label htmlFor='description'>
                    <span>Krótki Opis</span>
                    <textarea name='description' id='description' placeholder="Odkryj innowacyjne rozwiązania dla efektywnych instalacji wodno-kanalizacyjnych!" />
                </label>
                <label htmlFor='content'>
                    <span>Text w aktualności</span>
                    <textarea name='content' id='content' />
                </label>
                <button type='submit' className='submit'>
                    Dodaj
                </button>
            </form>
        </main>
    );
};

export default AdminAddNews;
