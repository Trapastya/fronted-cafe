<template>
    <div>
        <main class="main">
            <section class="registr">
                <div class="container registr__container">
                    <h1 class="registr__title">
                        Регистрация
                    </h1>
                    <form class="registr__form">
                        <label class="registr__label">
                            Электронная почта
                        </label>
                        <input class="registr__mail" type="email" v-model="email">
                        <label class="registr__label">
                            Имя и фамилия
                        </label>
                        <input class="registr__name" type="text" v-model="name">
                        <label class="registr__label">
                            Пароль
                        </label>
                        <input class="registr__password" type="password" v-model="password">
                        <button class="register__btn" @click.prevent="signup()">
                            СОЗДАТЬ
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
import { mapState } from 'vuex'
export default {
    computed: mapState({
        user: state => state.user,
    }),
    data() {
        return {
            email: "",
            name: "",
            password: ""
        }
    },
    
    methods: {
        async signup() {
            let result = await axios.post(CONSTANTS.VUE_APP_API_URL + '/users/registation', {
                email: this.email, password: this.password, name: this.name
            });

            if (result.data.success) {
                localStorage.setItem("auth_token", result.data.token)
                localStorage.setItem("username", result.data.username);
                this.user.name = result.data.username;
                this.$router.push({ name: 'Menu' });
            } else {
                this.$root.showNotification({text: result.data.message});
            }
        }
    }
}
</script>

<style lang="css">
@import url("./../../public/styles/style-registr.css");
@import url("./../../public/styles/normalize.css");
</style>
