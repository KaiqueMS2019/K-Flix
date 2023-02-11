const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'ba3e0105dece88fa090f18aa96fa920d',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;