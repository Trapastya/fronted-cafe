<template>
    <div>
    <vue-modaltor :visible="open" @hide="open=false" bgPanel="#fff" defaultWidth="30%">
      <template #header>
          <center><h3>Подтверждение заказа</h3></center>
            <br>
      </template>

      <template #body style="margin-bottom:30px;">
        <center>
        <p>
              Укажите адрес в предоставленном ниже поле:
        </p>
        <br>
            <div><input v-model="address" style="width:80%;border-bottom-style:none" placeholder="Введите адрес доставки"></div>
            <br>
            <button  @click.prevent="open=false;" style="margin-right:15px; ">
                ОТМЕНА
            </button>
            <button  @click.prevent="sumbitOrder">
                СФОРМИРОВАТЬ СЧЁТ
            </button>
            <br><br>
            <div>
                <p><b>В открытом новом окне оплатите и ожидайте заказ!</b></p>
            </div>
             <br>
          </center>
        </template>
    </vue-modaltor>
        <main>
        <section class="basket">
            <div class="container basket__container">
                <h1 class="basket__title">
                    Ваша корзина
                </h1>
                <ul class="basket__list" v-for="item of this.items" :key="item.id">
                    <li class="basket__img">
                        <img :src="item.filename">
                    </li>
                    <li class="basket__name">
                        {{item.name}}
                    </li>
                    <li class="basket__descr">
                        {{item.description}}
                    </li>
                    <li class="basket__price"> 
                        {{item.price}} руб.
                    </li>
                    <li class="basket__sum">
                        {{item.sum}} шт. в корзине
                    </li>
                    <li class="basket__remove" @click.prevent="removeFromBasket(item)">
                        Удалить
                    </li>
                </ul>
                <div class="basket__pay">
                    <p class="basket__total">
                        Сумма к оплате: {{sumOfBasket}} руб.
                    </p>
                    <button class="basket__btn" @click.prevent="open=true">
                        ОПЛАТИТЬ
                    </button>
                </div>
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
            open: false,
            sumOfBasket: 0,
            address: null,
            items: [
                {
                    id: "5e5b17ea-9973-474a-b9df-3a069bc8b966",
                    name: "Американо",
                    description: "100% натуральная арабика, 250  мл",
                    filename: "img/basket-1.jpg",
                    price: 110,
                    sum: 1
                },
                {
                    id: "d83aa6bc-e4e9-4f77-91d8-bc2df4c8b836",
                    name: "Моккачино",
                    description: "100% натуральная арабика, 250  мл",
                    filename: "img/basket-2.jpg",
                    price: 95,
                    sum: 1
                },
                {
                    id: "de043317-e39b-42fb-8fb7-4da21492b485",
                    name: "Латте",
                    description: "100% натуральная арабика, 250  мл",
                    filename: "img/basket-3.jpg",
                    price: 115,
                    sum: 1
                },

            ]
        }
    },
    mounted() {
        let sum = 0;
        for(let item of this.items){
            console.log(item);
            sum += item.price;
        }
        this.sumOfBasket = sum;
    },
    methods: {
        removeFromBasket(product){
            let filteredArray = this.items.filter(item => item.id != product.id);
            this.items = filteredArray;
            let sum = 0;
            for(let item of this.items){
                sum += item.price;
            }
            this.sumOfBasket = sum;
        },
        async sumbitOrder(){
            const result = await axios.post(CONSTANTS.VUE_APP_API_URL + '/orders/add', {
                productsIds: this.items,
                address: this.address,
                user_id: "46a5e0f5-becb-42d0-a800-9cc5fc727fb3",
            });
            console.log(result.data);
            if (result.data.success){
                window.open(result.data.createdBillOrder.payUrl ,"_blank");
            }
        }
    }
}
</script>

<style lang="css" scoped>
@import url("./../../public/styles/style-backet.css");
@import url("./../../public/styles/normalize.css");

::-webkit-input-placeholder {
  text-align:center;
  }
  
  :-moz-placeholder { /* Firefox 18- */
     text-align:center;  
  }
  
  ::-moz-placeholder {  /* Firefox 19+ */
     text-align:center;  
  }
  
  :-ms-input-placeholder {  
     text-align:center; 
  }

  ::-webkit-input-placeholder {
   text-align: center;
}

:-moz-placeholder { /* Firefox 18- */
   text-align: center;  
}

::-moz-placeholder {  /* Firefox 19+ */
   text-align: center;  
}

:-ms-input-placeholder {  
   text-align: center; 
}
input{
   text-align:center;
}
</style>