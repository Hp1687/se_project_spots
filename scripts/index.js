// --- SELECT ELEMENTS ---

// Edit Profile Modal
const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

// New Post Modal
const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

// Profile Elements
const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

// --- EDIT PROFILE MODAL ---
// Open modal and pre-fill form
editProfileBtn.addEventListener("click", () => {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  editProfileModal.classList.add("modal_opened");
});

// Close modal
editProfileCloseBtn.addEventListener("click", () => {
  editProfileModal.classList.remove("modal_opened");
});

// Handle form submission
function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal_opened");
}

// Add form submit listener
editProfileForm.addEventListener("submit", handleEditProfileFormSubmit);

// --- NEW POST MODAL ---
// Open modal
newPostBtn.addEventListener("click", () => {
  newPostModal.classList.add("modal_opened");
});

// Close modal
newPostCloseBtn.addEventListener("click", () => {
  newPostModal.classList.remove("modal_opened");
});

// Handle New Post form submission
const newPostForm = newPostModal.querySelector(".modal__form");
const postImageInput = newPostModal.querySelector("#post-image-input");
const postCaptionInput = newPostModal.querySelector("#post-caption-input");

function handleNewPostFormSubmit(evt) {
  evt.preventDefault();
  console.log("Image URL:", postImageInput.value);
  console.log("Caption:", postCaptionInput.value);
  newPostModal.classList.remove("modal_opened");
}

// Add form submit listener
newPostForm.addEventListener("submit", handleNewPostFormSubmit);
