async function getData(url) {
  try {
    const res = await fetch(url, {
      method: "GET",
    }).then((data) => data.json());
    const data = await res;
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getSpacecraftsData() {
  try {
    let res = await getData("https://isro.vercel.app/api/spacecrafts");
    res = res.spacecrafts;
    let wrapper = document.getElementById("tbody");
    res.forEach((element) => {
      const child = document.createElement("tr");
      child.innerHTML = `
            <td>${element.id}</td>
            <td>${element.name}</td>
            `;
      wrapper.append(child);
    });
  } catch (error) {
    console.error(error);
  }
}

async function getLaunchersData() {
  try {
    let res = await getData("https://isro.vercel.app/api/launchers");
    res = res.launchers;
    let wrapper = document.getElementById("launcherParent");
    for (let i = 0; i < res.length; i++) {
      if (i % 3 == 0) {
        let childRow = document.createElement("div");
        childRow.setAttribute("class", "row gx-5");
        childRow.setAttribute(
          "style",
          "justify-content:center;align-items:center"
        );
        childRow.innerHTML = `
                <div class="col-md-3 p-3 border bg-light" style="align-text:center">${
                  res[i].id
                }</div>
                <div class="col-md-3 p-3 border bg-light" style="align-text:center">${
                  res[i + 1].id
                }</div>
                <div class="col-md-3 p-3 border bg-light" style="align-text:center">${
                  res[i + 2].id
                }</div>
                `;
        wrapper.append(childRow);
      }
    }
  } catch (error) {
    console.error(error);
  }
}

async function getSatelliteData() {
  try {
    let res = await getData("https://isro.vercel.app/api/customer_satellites");
    res = res.customer_satellites;
    let wrapper = document.getElementById("satelliteTbody");
    res.forEach((element) => {
      const child = document.createElement("tr");
      child.innerHTML = `
              <td>${element.id}</td>
              <td>${element.country}</td>
              <td>${element.launch_date}</td>
              <td>${element.mass}</td>
              <td>${element.launcher}</td>
              `;
      wrapper.append(child);
    });
  } catch (error) {
    console.error(error);
  }
}

async function getCentersData() {
  try {
    let res = await getData("https://isro.vercel.app/api/centres");
    res = res.centres;
    let wrapper = document.getElementById("centreTbody");
    res.forEach((element) => {
      const child = document.createElement("tr");
      child.innerHTML = `
              <td>${element.id}</td>
              <td>${element.name}</td>
              <td>${element.Place}</td>
              <td>${element.State}</td>
              `;
      wrapper.append(child);
    });
  } catch (error) {
    console.error(error);
  }
}
