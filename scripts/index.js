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
const newPostForm = newPostModal.querySelector(".modal__form");
const postImageInput = newPostModal.querySelector("#post-image-input");
const postCaptionInput = newPostModal.querySelector("#post-caption-input");

// Profile Elements
const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

// --- REUSABLE MODAL FUNCTIONS ---
function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

// Optional: close modal on Escape key
document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    const openModalEl = document.querySelector(".modal_is-opened");
    if (openModalEl) closeModal(openModalEl);
  }
});

// --- EDIT PROFILE MODAL ---
// Open modal and pre-fill form
editProfileBtn.addEventListener("click", () => {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  openModal(editProfileModal);
});

// Close modal
editProfileCloseBtn.addEventListener("click", () => {
  closeModal(editProfileModal);
});

// Handle form submission
function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
}

// Add form submit listener
editProfileForm.addEventListener("submit", handleEditProfileFormSubmit);

// --- NEW POST MODAL ---
// Open modal
newPostBtn.addEventListener("click", () => {
  openModal(newPostModal);
});

// Close modal
newPostCloseBtn.addEventListener("click", () => {
  closeModal(newPostModal);
});

// Handle New Post form submission
function handleNewPostFormSubmit(evt) {
  evt.preventDefault();
  console.log("Image URL:", postImageInput.value);
  console.log("Caption:", postCaptionInput.value);
  closeModal(newPostModal);
}

// Add form submit listener
newPostForm.addEventListener("submit", handleNewPostFormSubmit);
