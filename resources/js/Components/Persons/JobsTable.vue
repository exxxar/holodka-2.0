<script setup>
import Pagination from "@/Components/Pagination.vue";

</script>
<template>

    <div class="row" v-if="jobs.length>0">
        <div class="col-12">
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Группа</th>
                    <th scope="col">Максимальный охват</th>
                    <th scope="col">Собрано пользователей</th>
                    <th scope="col">Статус</th>
                    <th scope="col">Дата добавления</th>
                    <th scope="col">Действие</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in jobs">
                    <th scope="row">{{index+1}}</th>
                    <td>{{item.group}}</td>
                    <td>{{item.max_post_count}}</td>
                    <td>{{item.result_count}}</td>
                    <td>
                        <span v-if="item.completed_at==null">В обработке</span>
                        <span v-else>Завершено</span>
                    </td>
                    <td>{{item.created_at}}</td>
                    <td>
                        <button
                            @click="removeJob(item)"
                            class="btn btn-danger">Удалить</button>
                    </td>
                </tr>

                </tbody>
            </table>
        </div>
    </div>
    <div class="alert alert-light" v-else>
        Вы еще не добавили задачи в очередь!
    </div>
    <div class="row mb-3" v-if="jobs.length>0">
        <div class="col-12">
            <Pagination
                v-on:pagination_page="loadJobs"
                v-if="pagination"
                :pagination="pagination"/>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
    data() {
        return {
            current_page: 0,
            jobs: [],
            pagination: null,
        }
    },
    computed: {
        // mix the getters into computed with object spread operator
        ...mapGetters([
            'getJobs',
            'getJobsPaginateObject',
            // ...
        ])
    },
    mounted() {
        this.loadJobs()

        document.addEventListener('jobs-reload-event', (event) => {
            this.loadJobs()
        });

    },

    methods: {
        removeJob(item){
            this.$store.dispatch("removeJob", {
                id: item.id
            }).then(resp => {
               this.loadJobs()
            })
        },
        loadJobs(page = 0) {
            this.current_page = page
            this.$store.dispatch("loadJobs", {
                page: this.current_page
            }).then(resp => {
                this.jobs = this.getJobs
                this.pagination = this.getJobsPaginateObject
            })
        }
    }
}
</script>
