<template>
    <div>
        <main>
        <section class="basket">
            <div class="container basket__container">
                <h1 class="basket__title">
                    Ваша корзина
                </h1>
                <ul class="basket__list">
                    <li class="basket__img">
                        <img src="img/basket-1.jpg">
                    </li>
                    <li class="basket__name">
                        Американо
                    </li>
                    <li class="basket__descr">
                        100% натуральная арабика, 30 мл
                    </li>
                    <li class="basket__price"> 
                        110 рублей
                    </li>
                    <li class="basket__sum">
                        1 шт. в корзине
                    </li>
                    <li class="basket__remove">
                        Удалить
                    </li>
                </ul>
                <ul class="basket__list">
                    <li class="basket__img">
                        <img src="img/basket-2.jpg">
                    </li>
                    <li class="basket__name">
                        Моккачино
                    </li>
                    <li class="basket__descr">
                        100% натуральная арабика, 30 мл
                    </li>
                    <li class="basket__price"> 
                        95 рублей
                    </li>
                    <li class="basket__sum">
                        1 шт. в корзине
                    </li>
                    <li class="basket__remove">
                        Удалить
                    </li>
                </ul>
                <ul class="basket__list">
                    <li class="basket__img">
                        <img src="img/basket-3.jpg">
                    </li>
                    <li class="basket__name">
                        Латте
                    </li>
                    <li class="basket__descr">
                        100% натуральная арабика, 30 мл
                    </li>
                    <li class="basket__price"> 
                        115 рублей
                    </li>
                    <li class="basket__sum">
                        1 шт. в корзине
                    </li>
                    <li class="basket__remove">
                        Удалить
                    </li>
                </ul>
                <div class="basket__pay">
                    <p class="basket__total">
                        Сумма к оплате: 320 рублей
                    </p>
                    <button class="basket__btn">
                        ОПЛАТИТЬ
                    </button>
                </div>
            </div>
        </section>
    </main>
    </div>
</template>

<style lang="css" scoped>
@import url("./../../public/styles/style-backet.css");
@import url("./../../public/styles/normalize.css");
</style>