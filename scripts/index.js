const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".popup__close-btn");
const editProfileForm = editProfileModal.querySelector(".popup__form");
const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");
const editProfileDescriptionInput = editProfileModal.querySelector("#profile-description-input");

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".popup__close-btn");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

// Open Edit Profile Modal
editProfileBtn.addEventListener("click", () => {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  editProfileModal.classList.add("popup_opened");
});

// Close Edit Profile Modal
editProfileCloseBtn.addEventListener("click", () => {
  editProfileModal.classList.remove("popup_opened");
});

// Open New Post Modal
newPostBtn.addEventListener("click", () => {
  newPostModal.classList.add("popup_opened");
});

// Close New Post Modal
newPostCloseBtn.addEventListener("click", () => {
  newPostModal.classList.remove("popup_opened");
});

// Handle Edit Profile form submission
function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("popup_opened");
}

// Add form listener
editProfileForm.addEventListener("submit", handleEditProfileFormSubmit);
