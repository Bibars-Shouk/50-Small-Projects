const APIURL = "https://api.github.com/users/";
const form = document.querySelector("#form");
const search = document.querySelector("#search");
const main = document.querySelector("#main");

async function getUser(username) {
  username = username.replace(" ", "-");
  try {
    const { data } = await axios(APIURL + username);
    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard(`We couldn't find a profile for the user "${username}"`);
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created");
    addReposToCard(data);
  } catch (err) {
    createErrorCard(`Something went wrong while fetching repos!`);
  }
}

function createUserCard(user) {
  const cardHTML = `
    <div class="card">
        <div>
          <img
            src="${user.avatar_url}"
            alt="${user.name} avatar"
            class="avatar"
          />
        </div>
        <div class="user-info">
          <h2>${user.name}</h2>
          <p>
            ${user.bio !== null ? user.bio : "No Bio"}
          </p>
          <ul>
            <li>${user.followers}<strong>Followers</strong></li>
            <li>${user.following}<strong>Following</strong></li>
            <li>${user.public_repos}<strong>Repos</strong></li>
          </ul>

          <div id="repos">
            
          </div>
        </div>
      </div>    
    `;
  main.innerHTML = cardHTML;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;

  if (user) {
    getUser(user);
    search.value = "";
  }
});

function createErrorCard(msg) {
  const cardHTML = `
    <div class="card" style='text-align:center;'>
        <h1>${msg}</h1>
    </div>
    `;

  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.querySelector("#repos");

  repos.slice(0, 10).forEach((repo) => {
    const repoLink = document.createElement("a");
    repoLink.classList.add("repo");
    repoLink.href = repo.html_url;
    repoLink.target = "_blank";
    repoLink.innerText = repo.name;
    reposEl.appendChild(repoLink);
  });
}
