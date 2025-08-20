<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

import ClientTable from "@/Components/Persons/PersonTable.vue";
import ClientForm from "@/Components/Persons/PersonForm.vue";
import {Head} from '@inertiajs/vue3';
</script>

<template>
    <Head title="Статистика"/>

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Статистика</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900 d-flex justify-center flex-wrap">
                        <!--                        <Chart
                                                    :size="{ width: 500, height: 400 }"
                                                    :data="chart"
                                                    :margin="margin"
                                                    :direction="direction">

                                                    <template #layers>
                                                        <Grid strokeDasharray="2,2" />
                                                        <Line :dataKeys="['name', 'pl']" />
                                                    </template>

                                                </Chart>-->
                        <template v-if="chart.length>0">
                            <h3 class="font-semibold text-xl text-gray-800 leading-tight my-3">Объем работы с
                                людьми</h3>
                            <table class="w-full border border-gray-300 text-sm">
                                <thead class="bg-gray-100">
                                <tr>
                                    <th
                                        @click="sortField('name')"
                                        class="border px-2 py-1 text-center">Пользователь
                                    </th>
                                    <th
                                        @click="sortField('persons_checked')"
                                        class="border px-2 py-1 text-center">Проверено
                                    </th>
                                    <th
                                        @click="sortField('persons_new')"
                                        class="border px-2 py-1 text-center">Новые
                                    </th>
                                    <th
                                        @click="sortField('persons_in_process')"
                                        class="border px-2 py-1 text-center">В процессе
                                    </th>
                                    <th
                                        @click="sortField('persons_not_ready')"
                                        class="border px-2 py-1 text-center">Не готовы
                                    </th>
                                    <th
                                        @click="sortField('persons_decline')"
                                        class="border px-2 py-1 text-center">Отклонено
                                    </th>
                                    <th
                                        @click="sortField('persons_success')"
                                        class="border px-2 py-1 text-center">Успех
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(row, idx) in chart" :key="idx" class="hover:bg-gray-50">
                                    <td class="border px-2 py-1">{{ row.name }}</td>
                                    <td class="border px-2 py-1 text-center">{{ row.checked }}</td>
                                    <td class="border px-2 py-1 text-center">{{ row.new }}</td>
                                    <td class="border px-2 py-1 text-center">{{ row.in_process }}</td>
                                    <td class="border px-2 py-1 text-center">{{ row.not_ready }}</td>
                                    <td class="border px-2 py-1 text-center">{{ row.decline }}</td>
                                    <td class="border px-2 py-1 text-center">{{ row.success }}</td>
                                </tr>
                                </tbody>
                            </table>


                        </template>


                        <template v-if="jobs.length>0">
                            <h3 class="font-semibold text-xl text-gray-800 leading-tight my-3">Объем загрузки задач</h3>
                            <table class="w-full border border-gray-300 text-sm">
                                <thead class="bg-gray-100">
                                <tr>
                                    <th
                                        @click="sortField('name')"
                                        class="border px-2 py-1 text-center cursor-pointer">Пользователь
                                    </th>
                                    <th
                                        @click="sortField('jobs_new')"
                                        class="border px-2 py-1 text-center cursor-pointer">Новые
                                    </th>
                                    <th
                                        @click="sortField('jobs_in_process')"
                                        class="border px-2 py-1 text-center cursor-pointer">В процессе
                                    </th>
                                    <th
                                        @click="sortField('jobs_completed')"
                                        class="border px-2 py-1 text-center cursor-pointer">Готовы
                                    </th>
                                    <th
                                        @click="sortField('jobs_error')"
                                        class="border px-2 py-1 text-center cursor-pointer">Отклонено
                                    </th>
                                    <th
                                        @click="sortField('persons_summary')"
                                        class="border px-2 py-1 text-center cursor-pointer">Собрано
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(row, idx) in jobs" :key="idx" class="hover:bg-gray-50">
                                    <td class="border px-2 py-1">{{ row.name }}</td>
                                    <td class="border px-2 py-1 text-center">{{ row.job_new }}</td>
                                    <td class="border px-2 py-1 text-center">{{ row.job_in_process }}</td>
                                    <td class="border px-2 py-1 text-center">{{ row.job_completed }}</td>
                                    <td class="border px-2 py-1 text-center">{{ row.job_error }}</td>
                                    <td class="border px-2 py-1 text-center">{{ row.summary_persons }}</td>
                                </tr>
                                </tbody>
                            </table>
                        </template>
                        <template v-if="jobs.length === 0 || chart.length=== 0">
                            <div class="d-flex justify-content-center align-items-center">
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                            <p class="my-3 text-center fw-bold">
                                Подготавливаем данные... Это займет какое-то время
                            </p>
                        </template>
                        <!--                        <Chart
                                                    v-if="loaded"
                                                    :size="{ width: 1000, height: 720 }"
                                                    :data="chart"
                                                    :margin="margin"
                                                    :direction="direction"
                                                    :axis="axis">

                                                    <template #layers>

                                                        <Grid strokeDasharray="2,2"/>
                                                        <Bar :dataKeys="['name', 'checked']" :barStyle="{ fill: '#ffe775' }"/>
                                                        <Bar :dataKeys="['name', 'new']" :barStyle="{ fill: '#54a375' }"/>
                                                        <Bar :dataKeys="['name', 'in_process']" :barStyle="{ fill: '#0ea9cb' }"/>
                                                        <Bar :dataKeys="['name', 'not_ready']" :barStyle="{ fill: '#d2ab65' }"/>
                                                        <Bar :dataKeys="['name', 'decline']" :barStyle="{ fill: '#ff0348' }"/>
                                                        <Bar :dataKeys="['name', 'success']" :barStyle="{ fill: '#00ff38' }"/>
                                                        <Marker :value="1000" label="Avg." color="#e76f51" strokeWidth="2"
                                                                strokeDasharray="6 6"/>
                                                    </template>

                                                    <template #widgets>
                                                        <Tooltip
                                                            borderColor="#48CAE4"
                                                            :config="tooltipConfig"
                                                        />
                                                    </template>

                                                </Chart>-->
                    </div>

                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
<script>

import {Chart, Grid, Line, Bar, Tooltip} from 'vue3-charts'

export default {
    components: {Chart, Grid, Line, Bar, Tooltip},
    data() {
        return {
            loaded: true,
            sort: {
                direction: 'desc',
                field: 'name'
            },
            tooltipConfig: {
                checked: {label: 'Взяты в работу', color: '#ffe775'},
                new: {label: 'Новые', color: '#54a375'},
                in_process: {label: 'В процесс', color: '#0ea9cb'},
                not_ready: {label: 'Не готовы \ думают', color: '#d2ab65'},
                decline: {label: 'Отказ', color: '#ff0348'},
                success: {label: 'Успех', color: '#00ff38'},
            },
            chart: [],
            jobs: [],
            direction: 'vertical',
            margin: {
                left: 0,
                top: 20,
                right: 20,
                bottom: 0
            },
            loading: false,
            selectedClient: null,
            axis: {
                primary: {
                    type: 'band'
                },
                secondary: {
                    domain: ['dataMin', 'dataMax + 100'],
                    type: 'linear',
                    ticks: 8
                }
            }
        }
    },
    mounted() {

        this.loadStatistic()
    },
    methods: {
        sortField(field) {
            if (field === this.sort.field)
                this.sort.direction = this.sort.direction === 'desc' ? "asc" : "desc"

            this.sort.field = field


            this.loadStatistic()
        },
        loadStatistic() {

            this.loaded = false
            this.$store.dispatch("loadStatistic", {
                dataObject: {
                    sort_field: this.sort.field,
                    sort_direction: this.sort.direction
                }
            }).then(resp => {
                this.chart = resp.persons || []
                this.jobs = resp.jobs || []
                this.loaded = true
            })
        }

    }
}
</script>
