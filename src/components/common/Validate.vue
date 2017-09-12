<template>
    <div class="column">

    <button @click="changeLocale">Изменить язык</button>

        <div>
        <label class="label" for="email">Email</label>
        <p :class="{ 'control': true }">
            <input v-model="email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" placeholder="Email">
            <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
        </p>
        </div>

        <div>
            <label class="label" for="name">Name</label>
            <p :class="{ 'control': true }">
                <input v-model="name" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('name') }" name="name" type="text" placeholder="name">
                <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
            </p>
        </div>

        <div>
            <label class="label" for="phone">Phone</label>
            <p :class="{ 'control': true }">
                <input v-model="phone" v-validate="'required|numeric'" :class="{'input': true, 'is-danger': errors.has('phone') }" name="phone" type="text" placeholder="phone">
                <span v-show="errors.has('phone')" class="help is-danger">{{ errors.first('phone') }}</span>
            </p>
        </div>
        <button>Сохранить</button>
    </div>
    
</template>


<script>
    import Vue from 'vue';
    import VeeValidate, { Validator } from 'vee-validate';
    import messagesRU from '../../../node_modules/vee-validate/dist/locale/ru';


    Vue.use(VeeValidate, { locale: 'en' });

    export default {
        name: 'Validate',
        data: function() {
            return  {
                email: '',
                name: '',
                phone: ''
            }
        },
        
        methods: {
            changeLocale() {
                this.locale = this.$validator.locale === 'ru' ? 'en' : 'ru';
                this.$validator.setLocale(this.locale);
            }
        },
        created() {
            this.$validator.updateDictionary({
                ru: {
                        messages: messagesRU.messages
                    }
            });
        }
    }
</script>

<style scoped>
    .column {
        margin-top: 50px;
    }
    .column label {
        display: block;
        margin-top: 15px;
    }
    .column input {
        width: 300px;
        height: 30px;
        margin-top: 10px;
        padding: 0px 5px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
</style>