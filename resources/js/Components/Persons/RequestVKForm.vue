<template>

    <form v-on:submit.prevent="submit" class="mb-2">
        <div class="form-floating mb-3">
            <input type="text"
                   class="form-control"
                   v-model="form.group"
                   id="floatingInput" placeholder="name@example.com" required>
            <label for="floatingInput">Группа</label>
        </div>

        <div class="alert alert-info rounded-0">
            Количество постов, которые можно охватить. Чем больше глубина тем дольше время ожидания обработки.
            Рекомендуемое значение от 30 до 100 в зависимости от числа подписчиков в группе. Чем больше подписчиков тем
            ниже должна быть глубина обработки.
        </div>
        <div class="form-floating mb-3">
            <input type="number"
                   class="form-control"
                   v-model="form.max_post_count"
                   max="100"
                   id="floatingInput" placeholder="name@example.com" required>
            <label for="floatingInput">Глубина обработки страницы</label>
        </div>

        <div class="alert alert-light my-2" v-if="!user.is_active_token">
            Ваш тоукен недействительный! Обновите его!
        </div>
        <div class="d-flex w-100 justify-center">
            <button
                :disabled="!user.is_active_token"
                class="btn btn-primary rounded-0">Добавить задачу
            </button>
        </div>

    </form>

    <div class="d-flex w-100 justify-center mb-2">

        <a
            class="btn btn-success  rounded-0"
            v-if="link"
            :href="link">Запустить процесс</a>
    </div>

</template>
<script>
export default {
    data() {
        return {
            form: {
                group: null,
                max_post_count: 30,
            }
        }
    },
    computed: {
        user() {
            return window.user
        }
    },
    watch: {
        'form.group': {
            handler: function (newValue) {
                if (this.form.group.indexOf("http") !== -1) {
                    let lastIndex = this.form.group.lastIndexOf("/") + 1
                    this.form.group = this.form.group.substring(lastIndex);
                }

            },
            deep: true
        }
    },
    methods: {
        submit() {
            this.$store.dispatch("addWork", this.form)
                .then(resp => {
                    const customEvent = new CustomEvent('jobs-reload-event');
                    document.dispatchEvent(customEvent)
                })
        }
    }
}
</script>
