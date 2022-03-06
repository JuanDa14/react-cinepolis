export const getAnimeById = async (id) => {
  const URL = `https://api.jikan.moe/v4/anime/${id}`;
  try {
    const resp = await fetch(URL);
    const { data } = await resp.json();
    const film = {
      title: data.title,
      image: data.images.webp.large_image_url,
      id: data.mal_id,
      status: data.status,
      aired: data.aired.string,
      score: data.score,
      duration: data.duration,
      episodes: data.episodes,
      synopsis: data.synopsis,
    };
    return film;
  } catch (err) {
    console.log(err);
  }
};
