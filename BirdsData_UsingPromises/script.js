function getBirdData(birdsUrl) {
  try {
    const data = fetch(birdsUrl, {
      method: "GET",
    })
      .then((x) => {
        return x.json();
      })
      .then((x) => {
        return x.recordings;
      });
    return data;
  } catch (error) {
    console.error(error);
  }
}
let countriesList = [];
const startData = (
  birdsUrl = "https://xeno-canto.org/api/2/recordings?query=?"
) => {
  let data = [];

  let wrapper = document.getElementById("d1");
  getBirdData(birdsUrl)
    .then((x) => {
      data = [...data, ...x];
    })
    .then(() => {
      data.forEach((x) => {
        !countriesList.includes(x.cnt) ? countriesList.push(x.cnt) : "";
        let child = document.createElement("div");
        child.setAttribute("class", "card");
        child.setAttribute("style", "width: 16rem; height:24rem");
        child.innerHTML = `
        <iframe src="https://xeno-canto.org/${x.id}/embed?simple=1"></iframe>
        <div class="card-body">
          <h5 class="card-title">${x.en}</h5>
          <p class="card-text">City:  ${x.loc} <br/>Country:  ${x.cnt}</p>
          <div style="position: absolute;bottom: 2em; width: 100%;">
            <div style="width:85%; text-align:center;">
            <hr>
              <a href="https://en.wikipedia.org/wiki/${x.en}" target="_blank" class="btn btn-info" style="width:60%">Know more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
              <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707"/>
            </svg></a>
            </div>
          </div>
        </div>
        `;
        wrapper.append(child);
        
        document.getElementById("countryList").innerHTML = `
        <option selected disabled>Select a country to Filter</option>`;
        countriesList.forEach((x) => {
          let ele = document.createElement("option");

          ele.innerHTML = x;
          document.getElementById("countryList").append(ele);
        });
      });
    })
    .catch((error) => console.log(error));
};
function calltest(x) {
  console.log("working fine", x);
}
startData();

let selectElement = document.getElementById("countryList");
selectElement.addEventListener("change", (event) => {
  document.getElementById("d1").innerHTML = ``;
  startData(
    `https://xeno-canto.org/api/2/recordings?query=cnt:${event.target.value}`
  );
});
