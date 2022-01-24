import React from "react";

function Main() {
    return(
        <main>
        <section class="profile page__wrapper">
          <button class="profile__avatar" type="button" aria-label="edit-avatar">
            <img class="profile__avatar-button" alt="edit-avatar" />
          </button>
          <div class="profile__info">
            <div class="profile__info-name">
              <h1 class="profile__name"></h1>
              <button class="profile__edit-button" type="button" aria-label="edit-profile"></button>
            </div>
            <p class="profile__profession"></p>
          </div>
          <button class="profile__add-button" type="button" aria-label="add-profile"></button>
        </section>
        <section class="places page__wrapper">
          <ul class="places__list">
          </ul>
        </section>
      </main>
    );
}

export default Main;
