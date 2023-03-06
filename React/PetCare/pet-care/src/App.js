import "./App.css";

function App() {
  return (
    <div>
      {" "}
      <header>
        <nav>
          <section class="logo">
            <img src="./images/logo.png" alt="logo" />
          </section>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
            <li>
              <a href="#">Create Postcard</a>
            </li>
            <li>
              <a href="#">Logout</a>
            </li>
          </ul>
        </nav>
      </header>
      <main id="content">
        <section class="welcome-content">
          <article class="welcome-content-text">
            <h1>We Care</h1>
            <h1 class="bold-welcome">Your Pets</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </article>
          <article class="welcome-content-image">
            <img src="./images/header-dog.png" alt="dog" />
          </article>
        </section>

        <section id="loginPage">
          <form class="loginForm">
            <img src="./images/logo.png" alt="logo" />
            <h2>Login</h2>

            <div>
              <label for="email">Email:</label>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="steven@abv.bg"
                value=""
              />
            </div>

            <div>
              <label for="password">Password:</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="********"
                value=""
              />
            </div>

            <button class="btn" type="submit">
              Login
            </button>

            <p class="field">
              <span>
                If you don't have profile click <a href="#">here</a>
              </span>
            </p>
          </form>
        </section>

        <section id="registerPage">
          <form class="registerForm">
            <img src="./images/logo.png" alt="logo" />
            <h2>Register</h2>
            <div class="on-dark">
              <label for="email">Email:</label>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="steven@abv.bg"
                value=""
              />
            </div>

            <div class="on-dark">
              <label for="password">Password:</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="********"
                value=""
              />
            </div>

            <div class="on-dark">
              <label for="repeatPassword">Repeat Password:</label>
              <input
                id="repeatPassword"
                name="repeatPassword"
                type="password"
                placeholder="********"
                value=""
              />
            </div>

            <button class="btn" type="submit">
              Register
            </button>

            <p class="field">
              <span>
                If you have profile click <a href="#">here</a>
              </span>
            </p>
          </form>
        </section>

        <section id="dashboard">
          <h2 class="dashboard-title">Services for every animal</h2>
          <div class="animals-dashboard">
            <div class="animals-board">
              <article class="service-img">
                <img class="animal-image-cover" src="./images/cat2.jpg" />
              </article>
              <h2 class="name">Athena</h2>
              <h3 class="breed">American Curl</h3>
              <div class="action">
                <a class="btn" href="#">
                  Details
                </a>
              </div>
            </div>

            <div class="animals-board">
              <article class="service-img">
                <img class="animal-image-cover" src="./images/dog2.jpg" />
              </article>
              <h2 class="name">Apollo</h2>
              <h3 class="breed">Pug</h3>
              <div class="action">
                <a class="btn" href="#">
                  Details
                </a>
              </div>
            </div>

            <div class="animals-board">
              <img class="animal-image-cover" src="./images/guinea-pig.jpg" />
              <h2 class="name">Chibi</h2>
              <h3 class="breed">Teddy guinea pig</h3>
              <div class="action">
                <a class="btn" href="#">
                  Details
                </a>
              </div>
            </div>

            <div class="animals-board">
              <article class="service-img">
                <img class="animal-image-cover" src="./images/Shiba-Inu.png" />
              </article>
              <h2 class="name">Max</h2>
              <h3 class="breed">Shiba Inu</h3>
              <div class="action">
                <a class="btn" href="#">
                  Details
                </a>
              </div>
            </div>
            <div>
              <p class="no-pets">No pets in dashboard</p>
            </div>
          </div>
        </section>

        <section id="createPage">
          <form class="createForm">
            <img src="./images/cat-create.jpg" />
            <div>
              <h2>Create PetPal</h2>
              <div class="name">
                <label for="name">Name:</label>
                <input name="name" id="name" type="text" placeholder="Max" />
              </div>
              <div class="breed">
                <label for="breed">Breed:</label>
                <input
                  name="breed"
                  id="breed"
                  type="text"
                  placeholder="Shiba Inu"
                />
              </div>
              <div class="Age">
                <label for="age">Age:</label>
                <input name="age" id="age" type="text" placeholder="2 years" />
              </div>
              <div class="weight">
                <label for="weight">Weight:</label>
                <input
                  name="weight"
                  id="weight"
                  type="text"
                  placeholder="5kg"
                />
              </div>
              <div class="image">
                <label for="image">Image:</label>
                <input
                  name="image"
                  id="image"
                  type="text"
                  placeholder="./image/dog.jpeg"
                />
              </div>
              <button class="btn" type="submit">
                Create Pet
              </button>
            </div>
          </form>
        </section>

        <section id="editPage">
          <form class="editForm">
            <img src="./images/editpage-dog.jpg" />
            <div>
              <h2>Edit PetPal</h2>
              <div class="name">
                <label for="name">Name:</label>
                <input name="name" id="name" type="text" value="Max" />
              </div>
              <div class="breed">
                <label for="breed">Breed:</label>
                <input name="breed" id="breed" type="text" value="Shiba Inu" />
              </div>
              <div class="Age">
                <label for="age">Age:</label>
                <input name="age" id="age" type="text" value="2 years" />
              </div>
              <div class="weight">
                <label for="weight">Weight:</label>
                <input name="weight" id="weight" type="text" value="5kg" />
              </div>
              <div class="image">
                <label for="image">Image:</label>
                <input
                  name="image"
                  id="image"
                  type="text"
                  value="./image/dog.jpeg"
                />
              </div>
              <button class="btn" type="submit">
                Edit Pet
              </button>
            </div>
          </form>
        </section>

        <section id="detailsPage">
          <div class="details">
            <div class="animalPic">
              <img src="./images/Shiba-Inu.png" />
            </div>
            <div>
              <div class="animalInfo">
                <h1>Name: Max</h1>
                <h3>Breed: Shiba Inu</h3>
                <h4>Age: 2 years</h4>
                <h4>Weight: 5kg</h4>
                <h4 class="donation">Donation: 0$</h4>
              </div>
              <div class="actionBtn">
                <a href="#" class="edit">
                  Edit
                </a>
                <a href="#" class="remove">
                  Delete
                </a>
                <a href="#" class="donate">
                  Donate
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>Pet Care 2022©</footer>
    </div>
  );
}

export default App;
