const API_KEY = "33443659-5d835de587e8c602875123faf";
const BASE_URL = "https://pixabay.com/api/";

export const getImages  = (searchText, page) => {
    return fetch(`${BASE_URL}?q=${searchText}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        //.then((res) => res.json())
        
}
//const API_KEY = "33443659-5d835de587e8c602875123faf";
//BASE_URL = "https://pixabay.com/api/";
//https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12