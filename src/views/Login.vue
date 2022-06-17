<template>
<div>
<main class="main">
    <section class="registr">
        <div class="container registr__container">
            <h1 class="registr__title">
                Авторизация
            </h1>
            <form class="registr__form">
                <label class="registr__label">
                    Электронная почта
                </label>
                <input class="registr__mail" type="email" id="email_input" v-model="email">
                <label class="registr__label">
                    Пароль
                </label>
                <input class="registr__password" type="password" id="password_input" v-model="password">
                <button class="register__btn" id="loginButton" @click.prevent="loginFunc()">
                    ВОЙТИ
                </button>
            </form>
        </div>
    </section>
</main>
</div>
</template>

<script>

import axios from 'axios';
import CONSTANTS from "./../CONSTANTS";

export default {
    data() {
        return {
            email: null,
            password: null
        }
    },
    methods: {
        async loginFunc(){
            const result = await axios.post(CONSTANTS.VUE_APP_API_URL + '/users/login', {
                email: this.email, password: this.password 
            });

            if (result.data.success) {
                localStorage.setItem("auth_token", result.data.token)
                this.$router.push({ name: 'Menu' });
            }
        }
    }
}
</script>

<style lang="css" scoped>
@import url("./../../public/styles/style-login.css");
@import url("./../../public/styles/normalize.css");
</style>