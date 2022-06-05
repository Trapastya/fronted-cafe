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
                <input class="registr__mail" type="email" id="email_input">
                <label class="registr__label">
                    Пароль
                </label>
                <input class="registr__password" type="password" id="password_input">
                <button class="register__btn" id="loginButton" onclick="login">
                    ВОЙТИ
                </button>
            </form>
        </div>
    </section>
</main>
</div>
</template>

<style lang="css" scoped>
@import url("./../../public/styles/style-login.css");
@import url("./../../public/styles/normalize.css");
</style>