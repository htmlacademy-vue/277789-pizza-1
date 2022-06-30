<template>
  <div>
    <header class="header">
      <div class="header__logo">
        <a class="logo" href="index.html">
          <img
            alt="V!U!E! Pizza logo"
            height="40"
            src="@/assets/img/logo.svg"
            width="90"
          />
        </a>
      </div>
      <div class="header__cart">
        <a href="cart.html">0 ₽</a>
      </div>
      <div class="header__user">
        <template v-if="user">
          <a href="user-data.html">
            <picture>
              <source
                type="image/webp"
                :srcset="
                  addExtension(avatarUrlWithoutExtension, '.webp') +
                  ' 1x,' +
                  addExtension(avatarUrlWithoutExtension, '@2x.webp') +
                  ' 2x'
                "
              />
              <img
                :src="addExtension(avatarUrlWithoutExtension, '.jpg')"
                :srcset="addExtension(avatarUrlWithoutExtension, '@2x.jpg')"
                :alt="user.name"
                width="32"
                height="32"
              />
            </picture>
            <span>{{ user.name }}</span>
          </a>
          <a href="#" class="header__logout"><span>Выйти</span></a>
        </template>
        <a v-else class="header__login" href="#"><span>Войти</span></a>
      </div>
    </header>

    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>

          <div class="content__dough">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите тесто</h2>

              <div class="sheet__content dough">
                <label
                  v-for="(dough, index) in formattedDoughes"
                  :key="index"
                  class="dough__input"
                  :class="`dough__input--${dough.type}`"
                >
                  <input
                    :checked="index === 0"
                    class="visually-hidden"
                    name="dought"
                    type="radio"
                    :value="dough.type"
                  />
                  <b>{{ dough.name }}</b>
                  <span>{{ dough.description }}</span>
                </label>
              </div>
            </div>
          </div>

          <div class="content__diameter">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите размер</h2>

              <div class="sheet__content diameter">
                <label
                  v-for="(size, index) in formattedSizes"
                  :key="index"
                  class="diameter__input"
                  :class="`diameter__input--${size.type}`"
                >
                  <input
                    class="visually-hidden"
                    name="diameter"
                    type="radio"
                    :value="size.type"
                    :checked="index === 1"
                  />
                  <span>{{ size.name }}</span>
                </label>
              </div>
            </div>
          </div>

          <div class="content__ingredients">
            <div class="sheet">
              <h2 class="title title--small sheet__title">
                Выберите ингредиенты
              </h2>

              <div class="sheet__content ingredients">
                <div class="ingredients__sauce">
                  <p>Основной соус:</p>

                  <label
                    v-for="(sauce, index) in formattedSauces"
                    :key="index"
                    class="radio ingredients__input"
                  >
                    <input
                      :checked="index === 0"
                      name="sauce"
                      type="radio"
                      :value="sauce.type"
                    />
                    <span>{{ sauce.name }}</span>
                  </label>
                </div>

                <div class="ingredients__filling">
                  <p>Начинка:</p>

                  <ul class="ingredients__list">
                    <li
                      v-for="(item, index) in formattedIngredients"
                      :key="index"
                      class="ingredients__item"
                    >
                      <span class="filling" :class="`filling--${item.type}`">{{
                        item.name
                      }}</span>

                      <div class="counter counter--orange ingredients__counter">
                        <button
                          class="counter__button counter__button--minus"
                          disabled
                          type="button"
                        >
                          <span class="visually-hidden">Меньше</span>
                        </button>
                        <input
                          class="counter__input"
                          name="counter"
                          type="text"
                          value="0"
                        />
                        <button
                          class="counter__button counter__button--plus"
                          type="button"
                        >
                          <span class="visually-hidden">Больше</span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="content__pizza">
            <label class="input">
              <span class="visually-hidden">Название пиццы</span>
              <input
                name="pizza_name"
                placeholder="Введите название пиццы"
                type="text"
              />
            </label>

            <div class="content__constructor">
              <div class="pizza pizza--foundation--big-tomato">
                <div class="pizza__wrapper">
                  <div class="pizza__filling pizza__filling--ananas"></div>
                  <div class="pizza__filling pizza__filling--bacon"></div>
                  <div class="pizza__filling pizza__filling--cheddar"></div>
                </div>
              </div>
            </div>

            <div class="content__result">
              <p>Итого: 0 ₽</p>
              <button class="button" disabled type="button">Готовьте!</button>
            </div>
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import misc from "@/static/misc.json";
import pizza from "@/static/pizza.json";
import user from "@/static/user.json";
import { getUrlWithoutExtension, addItemType } from "@/common/helpers";

export default {
  name: "Index",
  data() {
    return {
      misc,
      pizza,
      user,
    };
  },
  computed: {
    avatarUrlWithoutExtension() {
      return getUrlWithoutExtension(this.user.avatar);
    },
    formattedDoughes() {
      return this.pizza.dough.map(addItemType);
    },
    formattedSizes() {
      return this.pizza.sizes.map(addItemType);
    },
    formattedSauces() {
      return this.pizza.sauces.map(addItemType);
    },
    formattedIngredients() {
      return this.pizza.ingredients.map(addItemType);
    },
  },
  methods: {
    addExtension(url, extension) {
      return url + extension;
    },
  },
};
</script>

<style lang="scss" scoped></style>
