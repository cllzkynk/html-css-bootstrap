const apiURL = "https://api.tvmaze.com";
const searchShow = (show, cb) => {
  fetch(`${apiURL}/search/shows?q=${show}`)
    .then((resp) => resp.json())
    .then((data) => {
      cb(data);
    });
};
const getShow = (id, cb) => {
  fetch(`${apiURL}/shows/${id}`)
    .then((resp) => resp.json())
    .then((data) => {
      cb(data);
    });
};
const getEpisodes = (id, cb) => {
  fetch(`${apiURL}/shows/${id}/episodes`)
    .then((resp) => resp.json())
    .then((data) => {
      cb(data);
    });
};
export { searchShow, getShow, getEpisodes };