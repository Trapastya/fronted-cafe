<template>
<div>
    <section class="hero-main">
        <div class="container hero__container">
            <h2 class="hero__title">
                Все началось со&nbsp;скромной концепции: создать удивительный кофе
            </h2>
            <button class="hero__btn" @click.prevent="$router.push({name: 'Basket'})">
                СДЕЛАТЬ ЗАКАЗ
            </button>
        </div>
    </section>
    <main>
        <section class="news">
            <div class="container news__container">
                <h3 class="news__title">
                    Откройте для себя вкус настоящего кофе
                </h3>
                <ul class="news__list">
                    <li class="news__item news__item-bg-1">
                        <p class="news__descr">
                            Каждую пятницу скидка 10%
                        </p>
                    </li>
                    <li class="news__item news__item-bg-2">
                        <p class="news__descr">
                            Неповторимые ароматы кофе
                        </p>
                    </li>
                </ul>
            </div>
        </section>
        <section class="products">
            <div class="container products__container">
                <h3 class="products__title">
                    Наши лучшие товары
                </h3>
                <ul class="products__list">
                    <li class="products__item" v-for="item in this.favorite_products" :key="item.id">
                        <img :src="'./img/'+item.filename" class="image" />
                        <article class="products__card">
                            <p class="products__name">
                                {{item.name}} {{item.cost}} руб.
                                <img src="../../public/img/plus-flat.png"  style="width: 30px; height: 30px; align: center; top: 7px; right: 1px; position: relative;"
                                @click.prevent="addItemToCart(item)"
                                />
                            </p>
                            <p class="products__descr">
                                {{item.description}}
                            </p>
                        </article>
                    </li>
                </ul>
            </div>
        </section>
        <section class="contacts">
            <div class="container contacts__container">
                <h3 class="contacts__title">
                    Связаться с нами
                </h3>
                <div class="contacts__info-top">
                    <div class="contacts__info-left">
                        <h4 class="contacts__info-title">
                            Рабочие часы
                        </h4>
                        <ul class="contacts__list-time">
                            <li class="contacts__item-time">
                               <p class="contacts__item-day">
                                Понедельник 
                               </p> 
                               <p class="contacts__item-descr">
                                Закрыто
                               </p>
                            </li>
                            <li class="contacts__item-time">
                                <p class="contacts__item-day">Вторник — суббота </p>
                                <p class="contacts__item-descr">
                                    6:00 до 20:00
                                </p>
                            </li>
                            <li class="contacts__item-time">
                                <p class="contacts__item-day">Воскресенье</p>
                                <p class="contacts__item-descr">
                                    Закрыто
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div class="contacts__info-center">
                        <h4 class="contacts__info-title">
                            Мы находимся
                        </h4>
                        <p class="contacts__info-address">
                            Ул. Октябрьская, д. 283, главный вход со стороны продуктового
                        </p>
                    </div>
                    <div class="contacts__info-right">
                        <h4 class="contacts__info-title">
                            Контакты
                        </h4>
                        <a class="contacts__info-phone">
                            +7 938 627 62 84
                        </a>
                        <a href="#" class="contacts__info-mail">
                            procoffee@gmail.ru
                        </a>
                    </div>
                </div>
                <div class="contacts__info-bottom">
                    <div class="contacts__info-left-bottom">
                        <p class="contacts__info-register">
                            Зарегистрируйся для получения скидок
                        </p>
                    </div>
                    <div class="contacts__info-right-bottom">
                        <form class="contacts__form">
                            <input class="contacts__input" type="email" placeholder="Введите свою электронную почту" required>
                            <button class="contacts__btn" type="submit" click.>
                                ОТПРАВИТЬ
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </div>
</template>

<script>
import axios from "axios";
import CONSTANTS from "./../CONSTANTS";
export default {
    data() {
        return {
            favorite_products: []
        }
    },
    async mounted() {
        const result = await axios.post(CONSTANTS.VUE_APP_API_URL + '/products/getWithFilters', {
        filters: [
        {
            name: "favorite",
            value: true
        }
        ]
        });
        this.favorite_products = result.data.products.rows;
    },
    methods:{
        async addItemToCart(item){
            const result = await axios.patch(CONSTANTS.VUE_APP_API_URL + '/cart/update', item);
            console.log(result);
        }
    }
}
</script>

<style lang="css" scoped>
@import url("./../../public/styles/style-main.css");
@import url("./../../public/styles/normalize.css");
</style>
