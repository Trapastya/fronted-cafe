<template>
        <div>
            <section class="hero-menu">
            <div class="container hero__container">
                <h2 class="hero__title">
                    Встал ради чашки кофе, а&nbsp;потом не&nbsp;заметил, как день прошёл
                </h2>
                <button class="hero__btn" @click.prevent="$router.push({name: 'Basket'})">
                    СДЕЛАТЬ ЗАКАЗ
                </button>
            </div>
        </section>
        <main>
        <section class="menu">
            <div class="container menu__container">
                <h3 class="menu__title">
                    Сладкое меню
                </h3>
                <ul class="menu__list">
                    <li class="menu__item" v-for="item in this.sweet_foods" :key="item.id">
                        <img :src="'./img/'+item.filename" class="image" />
                        <article class="menu__card">
                            <p class="menu__name">
                                {{item.name}}, {{item.cost}} руб.
                                <img src="../../public/img/plus-flat.png"  style="width: 30px; height: 30px; align: center; top: 7px; right: 1px; position: relative;"
                                @click.prevent="addItemToCart(item)"
                                />
                            </p>
                            <p class="menu__descr">
                                {{item.description}}
                            </p>
                        </article>
                    </li>
                </ul>
            </div>
        </section>
        <section class="menu">
            <div class="container menu__container">
                <h3 class="menu__title">
                    Холодные напитки
                </h3>
                <ul class="menu__list">
                    <li class="menu__item" v-for="item in this.cold_drinks" :key="item.id">
                        <img :src="'./img/'+item.filename" class="image" />
                        <article class="menu__card">
                            <p class="menu__name">
                                {{item.name}}, {{item.cost}} руб.
                                <img src="../../public/img/plus-flat.png"  style="width: 30px; height: 30px; align: center; top: 7px; right: 1px; position: relative;"
                                @click.prevent="addItemToCart(item)"
                                />
                            </p>
                            <p class="menu__descr">
                                {{item.description}}
                            </p>
                        </article>
                    </li>
                </ul>
            </div>
        </section>
        <section class="menu">
            <div class="container menu__container">
                <h3 class="menu__title">
                    Горячий кофе
                </h3>
                <ul class="menu__list">
                    <li class="menu__item" v-for="item in this.coffee" :key="item.id">
                        <img :src="'./img/'+item.filename" class="image">
                        <article class="menu__card">
                            <p class="menu__name">
                                {{item.name}}, {{item.cost}} руб.
                                <img src="../../public/img/plus-flat.png"  style="width: 30px; height: 30px; align: center; top: 7px; right: 1px; position: relative;"
                                @click.prevent="addItemToCart(item)"
                                />
                            </p>
                            <p class="menu__descr">
                                {{item.description}}
                            </p>
                        </article>
                    </li>
                </ul>
            </div>
        </section>
        <section class="menu">
            <div class="container menu__container">
                <h3 class="menu__title">
                    Выпечка собственного производства
                </h3>
                <ul class="menu__list">
                    <li class="menu__item" v-for="item in this.pastery" :key="item.id">
                        <img :src="'./img/'+item.filename" class="image">
                        <article class="menu__card">
                            <p class="menu__name">
                                {{item.name}}, {{item.cost}} руб.
                                <img src="../../public/img/plus-flat.png"  style="width: 30px; height: 30px; align: center; top: 7px; right: 1px; position: relative;"
                                @click.prevent="addItemToCart(item)"
                                />
                            </p>
                            <p class="menu__descr">
                                {{item.description}}
                            </p>
                        </article>
                    </li>
                </ul>
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
            sweet_foods: [],
            cold_drinks: [],
            coffee: [],
            pastery: []
        }
    },
    async mounted() {
        let result = await axios.post(CONSTANTS.VUE_APP_API_URL + '/products/getWithFilters', {
        filters: [{ name: "type_product", value: 'SWEET_FOOD' }]
        });
        this.sweet_foods = result.data.products.rows;

        result = await axios.post(CONSTANTS.VUE_APP_API_URL + '/products/getWithFilters', {
        filters: [{ name: "type_product", value: 'COLD_DRINKS' }]
        });
        this.cold_drinks = result.data.products.rows;

        result = await axios.post(CONSTANTS.VUE_APP_API_URL + '/products/getWithFilters', {
        filters: [{ name: "type_product", value: 'COFFEE' }]
        });
        this.coffee = result.data.products.rows;

        result = await axios.post(CONSTANTS.VUE_APP_API_URL + '/products/getWithFilters', {
        filters: [{ name: "type_product", value: 'PASTERY' }]
        });
        this.pastery = result.data.products.rows;
    },

    methods: {
        addItemToCart(product){
            this.$root.showNotification({title: "Добавлено в корзину!", text: `Продукт: ${product.name}, цена: ${product.cost}`});
        }
    }
}
</script>

<style lang="css" scoped>
@import url("./../../public/styles/style-menu.css");
@import url("./../../public/styles/normalize.css");
</style>