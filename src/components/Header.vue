 <template>
    <div>
    <header class="header header__top">
        <div class="container header__container-top">
            <a class="header__logo" aria-label="ProCoffee">
                <img class="header__logo-img" src="img/ProCoffee.svg" aria-label="Логотип ProCoffee">
            </a>
            <div class="header__account">
                <a class="header__login"><router-link to="/login">Войти</router-link></a>
                <a class="header__register"><router-link to="/registr">Зарегистрироваться</router-link></a>
            </div>
        </div>
    </header>
    <header class="header header__bottom">
        <div class="container header__container-bottom">
            <p class="header__user">
                Здравствуйте, Антон Пушкин
            </p>
            <nav class="header__nav">
                <ul class="header__list">
                    <li class="header__item">
                        <a class="header__link">      
                            <router-link to="/main">Главная</router-link>
                        </a>
                    </li>
                    <li class="header__item">
                        <a class="header__link">
                            <router-link to="/menu">Меню</router-link>
                        </a>
                    </li>
                    <li class="header__item">
                        <a class="header__link">
                            <router-link to="/about">О нас</router-link>
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="header__basket">
                <span>320 рублей</span>
                <a>
                    <router-link to="/basket">
                    <svg width="38" height="30" viewbox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M29.2425 24.091C30.9091 24.091 32.2728 25.4545 32.2728 26.9697C32.2728 28.6362 30.9093 30 29.2425 30C27.5759 30 26.3638 28.6365 26.3638 26.9697C26.3638 25.4545 27.5759 24.091 29.2425 24.091ZM16.2125 24.091C17.8791 24.091 19.2429 25.4545 19.2429 26.9697C19.2429 28.6362 17.8793 30 16.2125 30C14.546 30 13.1822 28.6365 13.1822 26.9697C13.1822 25.4545 14.5458 24.091 16.2125 24.091ZM33.3333 16.0606C33.3333 16.5152 33.0303 16.6666 32.5758 16.6666H12.2729L13.9395 20.9089H32.121V22.4241H12.8788C10.1516 15.6058 7.4245 8.63619 4.84847 1.66656H0V0H5.90894L7.5755 4.54529H36.8175C37.4234 4.54529 37.7264 5.15127 37.575 5.60587L33.3327 16.0603L33.3333 16.0606ZM11.667 15.0001H32.1213L35.606 6.06096H8.18212L11.6668 15.0001H11.667ZM16.2123 25.6059C16.9699 25.6059 17.5759 26.2118 17.5759 26.9694C17.5759 27.727 16.9699 28.333 16.2123 28.333C15.4548 28.333 14.8488 27.727 14.8488 26.9694C14.8488 26.2118 15.4548 25.6059 16.2123 25.6059ZM29.2423 25.6059C29.9998 25.6059 30.6058 26.2118 30.6058 26.9694C30.6058 27.727 29.9998 28.333 29.2423 28.333C28.4847 28.333 27.8787 27.727 27.8787 26.9694C27.8787 26.2118 28.4847 25.6059 29.2423 25.6059Z"
                            fill="#352B2B" />
                    </svg></router-link>

                </a>
            </div>
        </div>
    </header>
    </div>
</template>

<style>
@import url("./../../public/styles/normalize.css");
@import url("./../../public/styles/normalize.css");
</style>