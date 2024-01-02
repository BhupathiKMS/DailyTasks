async function getUsers() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json",
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
let userData = Array.from(
  getUsers().then((data) => {
    userData.push(data);
  })
);
setTimeout(() => {
  for (let i = 0; i < userData[0].length; i++) {
    const d = document.createElement("div");
    d.setAttribute("class", "card");
    const p = document.createElement("p");
    const span1 = document.createElement("span");
    span1.innerText = `${userData[0][i].id}. `;
    p.appendChild(span1);
    const span2 = document.createElement("span");
    span2.innerText = `${userData[0][i].name}`;
    p.appendChild(span2);
    const br = document.createElement("br");
    p.append(br);
    const span3 = document.createElement("span");
    span3.innerText = `${userData[0][i].email}`;
    p.appendChild(span3);
    d.appendChild(p);
    document.getElementById("card-container").append(d);
  }
}, 2000);

//script.js
setTimeout(() => {
  const cardsPerPage = 12; // Number of cards to show per page
  const dataContainer = document.getElementById("data-container");
  const pagination = document.getElementById("pagination");
  const firstButton = document.getElementById("first");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const lastButton = document.getElementById("last");
  const pageNumbers = document.getElementById("page-numbers");
  const pageLinks = document.querySelectorAll(".page-link");

  const cards = Array.from(dataContainer.getElementsByClassName("card"));

  // Calculate the total number of pages
  const totalPages = Math.ceil(cards.length / cardsPerPage);
  let currentPage = 1;

  // Function to display cards for a specific page
  function displayPage(page) {
    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    cards.forEach((card, index) => {
      if (index >= startIndex && index < endIndex) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  // Function to update pagination buttons and page numbers
  function updatePagination() {
    pageNumbers.textContent = `Page ${currentPage} of ${totalPages}`;
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
    pageLinks.forEach((link) => {
      const page = parseInt(link.getAttribute("data-page"));
      link.classList.toggle("active", page === currentPage);
    });
  }

  // Event listener for "First" button
  firstButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage = 1;
      displayPage(currentPage);
      updatePagination();
    }
  });

  // Event listener for "Previous" button
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      displayPage(currentPage);
      updatePagination();
    }
  });

  // Event listener for "Next" button
  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      displayPage(currentPage);
      updatePagination();
    }
  });

  // Event listener for "Last" button
  lastButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage = totalPages;
      displayPage(currentPage);
      updatePagination();
    }
  });

  // Event listener for page number buttons
  pageLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = parseInt(link.getAttribute("data-page"));
      if (page !== currentPage) {
        currentPage = page;
        displayPage(currentPage);
        updatePagination();
      }
    });
  });

  pagination.addEventListener("click", () => {
    if ((currentPage > 1) || (currentPage < totalPages)) {
      document.getElementById("page-link1").innerText = currentPage - 1;
      document.getElementById("page-link2").innerText = currentPage;
      document.getElementById("page-link3").innerText = currentPage + 1;
    }
  });

  // Initial page load
  displayPage(currentPage);
  updatePagination();
  
}, 2000);
