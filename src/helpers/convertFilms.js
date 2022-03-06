export const convertFilms = (films = []) => {
  const filmsConvert = films.map((film) => ({
    image: film.images.webp.large_image_url,
    title: film.title,
    id: film.mal_id,
  }));
  return filmsConvert;
};
