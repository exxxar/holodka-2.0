
<template>

    <div class="row mb-3">
        <div class="col-md-6 col-12">
            <button type="button" class="btn btn-dark rounded-0" @click="resetForm">Очистить форму
            </button>
        </div>
    </div>
    <form action="" v-on:submit.prevent="submit">

        <div class="row">

            <div class="col-md-6 col-12">
                <div class="form-floating">
                    <select class="form-select" v-model="form.status" id="status"
                            aria-label="Floating label select example">
                        <option :value="null">Не выбрано</option>
                        <option :value="item.value" v-for="item in statuses">{{ item.title || 'Не указано' }}</option>
                    </select>
                    <label for="status">Тип контрагента</label>
                </div>
            </div>
            <div class="col-md-6 col-12">
                <div class="form-floating mb-3">
                    <input type="text" v-model="form.title" class="form-control" id="client-title" required>
                    <label for="client-title">Наименование компании</label>
                </div>
            </div>
            <div class="col-md-6 col-12">
                <div class="form-floating mb-3">
                    <input type="text" v-model="form.fio" class="form-control" id="client-title">
                    <label for="fio">ФИО представителя компании</label>
                </div>
            </div>

            <div class="col-6">
                <div class="form-floating mb-3">
                    <div class="form-floating">
                        <textarea class="form-control rounded-0 border-secondary" v-model="form.law_address"
                                  placeholder="Leave a comment here" id="law_address"></textarea>
                        <label for="law_address">Юридический адрес</label>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-12">
                <div class="form-floating mb-3">
                    <input type="email" v-model="form.email" class="form-control" id="client-email">
                    <label for="client-email">Электронная почта</label>
                </div>
            </div>

            <div class="col-md-6 col-12">
                <div class="form-floating mb-3">
                    <input type="text" v-model="form.phone" v-mask="'+7(###)###-##-##'" class="form-control"
                           id="client-phone">
                    <label for="client-phone">Телефон</label>
                </div>
            </div>

            <div class="col-md-12 col-12">
                <div class="form-floating mb-3">
                    <div class="form-floating">
                        <textarea class="form-control rounded-0 border-secondary" v-model="form.comment"
                                  placeholder="Leave a comment here" id="comment"></textarea>
                        <label for="comment">Комментарий</label>
                    </div>
                </div>
            </div>


            <div class="col-md-6 col-12">
                <div class="form-floating mb-3">
                    <input type="text" maxlength="9" v-model="form.kpp" class="form-control" id="client-kpp">
                    <label for="client-kpp">КПП</label>
                </div>
            </div>

            <div class="col-md-6 col-12">
                <div class="form-floating mb-3">
                    <input type="text" maxlength="15" v-model="form.ogrn" class="form-control" id="client-ogrn">
                    <label for="client-ogrn">ОГРН</label>
                </div>
            </div>
            <div class="col-md-6 col-12">
                <div class="form-floating mb-3">
                    <input type="text" v-model="form.okpo" maxlength="10" class="form-control" id="client-okpo">
                    <label for="client-okpo">ОКПО</label>
                </div>
            </div>


        </div>





        <div class="row mt-5">
            <div class="col-12 d-flex justify-content-center">
                <button class="btn btn-dark rounded-0">
                    <i class="fa-regular fa-floppy-disk mr-1" v-if="!loading"></i>
                    <span class="spinner-border spinner-border-sm  text-success" role="status" v-else></span>
                    Сохранить клиента
                </button>
                <button v-if="!loading" type="button" @click="resetForm"
                        class="btn btn-outline-secondary rounded-0 ml-2">
                    <i class="fa-solid fa-xmark mr-1"></i>
                    Очистить клиента
                </button>

            </div>
        </div>
    </form>


 </template>
<script>

import { mapGetters } from "vuex";

export default {
    components: {},

    props: ["item"],
    data() {
        return {
            messages: [],
            userSearchModal: null,
            loading: false,
            link_for_document: null,
            statuses: [],
            form: {
                id: null,
                status: null,
                phone: null,
                email: null,
                fact_address: null,
                comment: null,

                user: null,
                user_id: null,
                title: null,
                fio: null,
                law_address: null,
                inn: null,
                kpp: null,
                ogrn: null,
                okpo: null,
                requisites: []

            }
        }
    },

    mounted() {

        if (this.item)
            this.$nextTick(() => {
                this.form = {
                    id: this.item.id || null,
                    status: this.item.status || null,
                    phone: this.item.phone || null,
                    email: this.item.email || null,
                    fact_address: this.item.fact_address || null,
                    comment: this.item.comment || null,

                    user_id: this.item.user_id || null,
                    user: this.item.user || null,
                    title: this.item.title || null,
                    fio: this.item.fio || null,
                    law_address: this.item.law_address || null,
                    inn: this.item.inn || null,
                    kpp: this.item.kpp || null,
                    ogrn: this.item.ogrn || null,
                    okpo: this.item.okpo || null,
                    requisites: this.item.requisites || [],

                }
            })
    },
    methods: {
        resetForm() {
            const fields = {
                id: null,
                status: null,
                phone: null,
                email: null,
                fact_address: null,
                comment: null,
                user_id: null,
                title: null,
                fio: null,
                law_address: null,
                inn: null,
                kpp: null,
                ogrn: null,
                okpo: null,
                requisites: [],
            }

            this.form = fields

            this.$emit("callback")

        },

        submit() {
            let data = new FormData();
            Object.keys(this.form)
                .forEach(key => {
                    const item = this.form[key] || ''
                    if (typeof item === 'object')
                        data.append(key, JSON.stringify(item))
                    else
                        data.append(key, item)
                });


            this.$store.dispatch("storeClient", {
                clientForm: data
            }).then((response) => {
                this.$emit("callback")
                this.resetForm()
            }).catch(error => {

            })


        }
    }
}
</script>
