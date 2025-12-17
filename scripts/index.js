// --- INITIAL CARDS ---
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
// Profile
const profileEditBtn = document.querySelector(".profile__edit-btn");
const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

// Modals
const editProfileModal = document.querySelector("#edit-profile-modal");
const newPostModal = document.querySelector("#new-post-modal");
const imagePreviewModal = document.querySelector("#image-preview-modal");

// Forms
const editProfileForm = editProfileModal.querySelector(".modal__form");
const newPostForm = newPostModal.querySelector(".modal__form");

// Inputs
const profileNameInput = document.querySelector("#profile-name-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const postImageInput = document.querySelector("#post-image-input");
const postCaptionInput = document.querySelector("#post-caption-input");

// Buttons
const newPostBtn = document.querySelector(".profile__add-btn");

// Close buttons
const editProfileCloseBtn =
  editProfileModal.querySelector(".modal__close-button");
const newPostCloseBtn =
  newPostModal.querySelector(".modal__close-button");
const imagePreviewCloseBtn =
  imagePreviewModal.querySelector(".modal__close-button");

// Cards
const cardsList = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template");

// Image preview
const previewImage = imagePreviewModal.querySelector(".modal__image");
const previewCaption = imagePreviewModal.querySelector(".modal__caption");

// --- MODAL FUNCTIONS ---
function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

// Close on Escape
document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_is-opened");
    if (openedModal) {
      closeModal(openedModal);
    }
  }
});

// Close on overlay click
document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("mousedown", (evt) => {
    if (evt.target === evt.currentTarget) {
      closeModal(modal);
    }
  });
});

// --- CARD CREATION ---
function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;

  // Like toggle
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  // Delete card
  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  // Image preview
  cardImage.addEventListener("click", () => {
    previewImage.src = data.link;
    previewImage.alt = data.name;
    previewCaption.textContent = data.name;
    openModal(imagePreviewModal);
  });

  return cardElement;
}

// Render initial cards
initialCards.forEach((card) => {
  cardsList.prepend(getCardElement(card));
});

// --- EDIT PROFILE MODAL ---
profileEditBtn.addEventListener("click", () => {
  profileNameInput.value = profileNameEl.textContent;
  profileDescriptionInput.value = profileDescriptionEl.textContent;
  openModal(editProfileModal);
});

editProfileCloseBtn.addEventListener("click", () =>
  closeModal(editProfileModal)
);

editProfileForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileNameEl.textContent = profileNameInput.value;
  profileDescriptionEl.textContent = profileDescriptionInput.value;
  closeModal(editProfileModal);
});

// --- NEW POST MODAL ---
newPostBtn.addEventListener("click", () => openModal(newPostModal));

newPostCloseBtn.addEventListener("click", () =>
  closeModal(newPostModal)
);

newPostForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newCard = {
    name: postCaptionInput.value,
    link: postImageInput.value,
  };
  cardsList.prepend(getCardElement(newCard));
  newPostForm.reset();
  closeModal(newPostModal);
});

// --- IMAGE PREVIEW MODAL ---
imagePreviewCloseBtn.addEventListener("click", () =>
  closeModal(imagePreviewModal)
);
