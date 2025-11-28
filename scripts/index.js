// --- Initial Cards Array ---
const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

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

// Cards
const cardsList = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template");

// Image Preview Modal
const imagePreviewModal = document.querySelector("#image-preview-modal");
const previewImageEl = imagePreviewModal.querySelector(".modal__image");
const previewCaptionEl = imagePreviewModal.querySelector(".modal__caption");
const imagePreviewCloseBtn =
  imagePreviewModal.querySelector(".modal__close-btn");

// --- REUSABLE MODAL FUNCTIONS ---
function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

// Close modal on Escape key
document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    const openModalEl = document.querySelector(".modal_is-opened");
    if (openModalEl) {
      closeModal(openModalEl);
    }
  }
});

// --- CARD CREATION ---

function getCardElement(data) {
  // Clone the template content
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  // Select elements inside the card
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  // Set content
  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  // Like button: toggle active modifier
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  // Delete button: remove the card
  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  // Image click: open preview modal
  cardImage.addEventListener("click", () => {
    previewImageEl.src = data.link;
    previewImageEl.alt = data.name;
    previewCaptionEl.textContent = data.name;
    openModal(imagePreviewModal);
  });

  return cardElement;
}

// Render initial cards
initialCards.forEach((item) => {
  const cardElement = getCardElement(item);
  cardsList.prepend(cardElement);
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

  const cardData = {
    name: postCaptionInput.value,
    link: postImageInput.value,
  };

  const newCard = getCardElement(cardData);
  cardsList.prepend(newCard);

  newPostForm.reset();
  closeModal(newPostModal);
}

newPostForm.addEventListener("submit", handleNewPostFormSubmit);

// --- IMAGE PREVIEW MODAL CLOSE ---
imagePreviewCloseBtn.addEventListener("click", () => {
  closeModal(imagePreviewModal);
});
