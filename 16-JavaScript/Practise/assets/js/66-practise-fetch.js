import { searchShow, getShow } from "./66-movies-api.js";

document.querySelector("#txtSearch").addEventListener("input", (e) => {
  const val = e.target.value;
  if (val.length < 3) return;

  searchShow(val, (shows) => {
    let htmlShows = "";

    // Cardların oluşturulduğu yer
    shows.forEach((item) => {
      //console.log(item);
      htmlShows += `
            <div class="col-md-6 col-lg-4 p-3">
                <div class="card" data-id="${item.show.id}">
                    <img src="${
                      item.show.image
                        ? item.show.image.medium
                        : "assets/img/no-image.png"
                    }" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">${item.show.name}</h5>
                    </div>
                </div>
            </div>
            `;
    });
    document.querySelector("#tvshows").innerHTML = htmlShows;

    // card lara event atandığı yer.
    document.querySelectorAll("#tvshows .card").forEach((item) => {
      item.addEventListener("click", (e) => {
        const id = e.target.closest(".card").getAttribute("data-id");

        getShow(id, (show) => {
          console.log(show);

            const htmlShow = `
            <div class="card-body">
                <div class="row">
                    <div class="col-md-3">
                            <img src="${show.image.medium}" alt="" class="img-fluid">
                    </div>
                    <div class="col-md-9">
                            <h1>${show.name}</h1>
                            <table>
                                <tr><th>Tür</th><td>${show.genres}</td></tr>
                                <tr><th>Dil</th><td>${show.language}</td></tr>
                                <tr><th>Gün</th><td>${show.schedule.days}</td></tr>
                                <tr><th>Saat</th><td>${show.schedule.time}</td></tr>
                                <tr><th>Durum</th><td>${show.status}</td></tr>
                            </table>
                    </div>
                </div>
            </div>
            `
            document.querySelector("#showDetail").innerHTML = htmlShow;
            document.querySelector("#showDetail").classList.remove("d-none");

        });
      });
    });

  });
});

console.log(document.querySelectorAll("#tvshows .card").length);
