<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {Head} from '@inertiajs/vue3';
import RequestVKForm from "@/Components/Persons/RequestVKForm.vue";
import JobsTable from "@/Components/Persons/JobsTable.vue";
</script>

<template>
    <Head title="Панель управления"/>

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Панель управления</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="row p-3">
                        <div class="col-4">
                            <div class="card rounded-0">
                                <div class="card-body">
                                    <h6 class="my-2 fw-bold">Профиль пользователя</h6>
                                    <ul class="list-group rounded-0" v-if="user">
                                        <li class="list-group-item">
                                            {{ user.name || 'Без имени' }}
                                        </li>
                                        <li class="list-group-item">
                                            {{ user.email || 'Без почты' }}
                                        </li>
                                        <li class="list-group-item">
                                            <p v-if="user.vk_access_token!=null&&user.is_active_token">Тоукен успешно
                                                установлен</p>
                                            <p v-else>Тоукен не задан</p>
                                        </li>
                                        <li class="list-group-item">
                                            <p v-if="user.vk_token_expired_at!=null">{{ user.vk_token_expired_at }}</p>
                                            <p v-else>Тоукен не задан</p>
                                        </li>
                                        <!--                                        <li class="list-group-item">
                                                                                   <h6 class="my-2">Ключ компании</h6>

                                                                                    <div class="alert alert-info rounded-0" v-if="!company||company.length<6">
                                                                                        Внимание! Вы должны указать текстовый ключ вашей компании (команды). Это может быть или специально сгенерированный ключ или произвольный ключ длиной от 6 (сейчас {{(company||'').length}}) символов.
                                                                                    </div>

                                                                                    <div class="input-group ">
                                                                                        <div class="form-floating">
                                                                                            <input type="text"
                                                                                                   minlength="6"
                                                                                                   v-model="company"
                                                                                                   class="form-control">
                                                                                            <label for="">Ключ компании</label>
                                                                                        </div>
                                                                                        <span
                                                                                            v-if="user.company"
                                                                                            @click="storeCompany"
                                                                                            class="input-group-text rounded-0 bg-primary border-black">
                                                                                            <button class="btn text-white"><i class="bi bi-arrow-repeat"></i></button>
                                                                                        </span>
                                                                                    </div>

                                                                                    <button
                                                                                        @click="storeCompany"
                                                                                        v-if="!user.company"
                                                                                        :disabled="!company || (company||'').length<6"
                                                                                        class="btn btn-primary rounded-0 p-3 my-2 w-100">Сохранить</button>

                                                                                </li>-->
                                    </ul>

                                    <!--                                    <button
                                                                            type="button"
                                                                            @click="fillVK"
                                                                            :disabled="!user.is_active_token"
                                                                            class="btn btn-outline-primary w-100 mt-2">Заполнить автоматически профиль в вк</button>-->


                                    <a
                                        class="btn btn-success mt-2 w-100 rounded-0 p-3"
                                        v-if="link&&user.company"
                                        :href="link">Получить токен</a>

                                    <hr class="my-2">
                                    <div class="alert alert-success mb-2 rounded-0" v-for="message in messages">
                                        Собраны данные по группе {{ message.group }} (#{{ message.jobId }})
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-8">
                            <RequestVKForm></RequestVKForm>
                        </div>
                    </div>

                    <div class="row p-3">
                        <div class="col-12">
                            <h6 class="my-2 fw-bold">Задачи в очереди</h6>
                            <JobsTable></JobsTable>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
<script>
export default {
    data() {
        return {
            link: null,
            company: null,
            messages: []
        }
    },

    mounted() {
        this.requestToken()

        this.company = this.user.company || null

        let channel = pusher.subscribe('my-channel');
        channel.bind('my-event', (data) => {
            if (data.userId === this.user.id) {
                this.messages.push(data)

                setTimeout(() => {
                    window.location.reload()
                }, 4000)

                this.$notify({
                    title: 'Внимание!',
                    text: 'Ваше задание #' + data.jobId + " успешно выполнено!",
                    type: 'success'
                })
            }

        });

    },
    computed: {
        logo() {
            return window.logo
        },
        user() {
            return window.user
        }
    }, methods: {
        fillVK() {
            this.$store.dispatch("fillVK")
                .then(resp => {

                })
        },
        storeCompany() {
            this.$store.dispatch("storeCompany", {
                company: this.company
            })
                .then(resp => {
                    window.location.reload()
                })
        },
        requestToken() {
            this.$store.dispatch("requestVKToken", this.form)
                .then(resp => {
                    this.link = resp
                })
        }
    }
}
</script>
