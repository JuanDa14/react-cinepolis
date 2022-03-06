export const convertFilm = (film) => ({
  title: film.title,
  image: film.images.webp.large_image_url,
  id: film.mal_id,
});
