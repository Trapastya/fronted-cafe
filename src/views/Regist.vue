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
                        <input class="registr__mail" type="email">
                        <label class="registr__label">
                            Имя и фамилия
                        </label>
                        <input class="registr__name" type="text">
                        <label class="registr__label">
                            Пароль
                        </label>
                        <input class="registr__password" type="password">
                        <button class="register__btn" type="submit">
                            СОЗДАТЬ
                        </button>
                    </form>
                </div>
            </section>
        </main>
    </div>
</template>

<style lang="css">
@import url("./../../public/styles/style-registr.css");
@import url("./../../public/styles/normalize.css");
</style>
