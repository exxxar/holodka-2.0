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
                    <div class="p-6 text-gray-900 d-flex justify-center">
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

                        <Chart
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

                        </Chart>
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
            loaded:true,
            tooltipConfig:{
                checked: { label:'Взяты в работу', color: '#ffe775' },
                new: {  label:'Новые', color: '#54a375' },
                in_process: {  label:'В процесс', color: '#0ea9cb' },
                not_ready: {  label:'Не готовы \ думают', color: '#d2ab65' },
                decline: {  label:'Отказ', color: '#ff0348' },
                success: { label:'Успех',  color: '#00ff38' },
            },
            chart: [
                {name: 'Гукай А.', checked: 1000, new: 500, in_process: 300, not_ready: 1235, decline: 1235, success: 1235,},
                {name: 'Русина А.', checked: 2000, new: 900, in_process: 400, not_ready: 1235, decline: 1235,success: 1235,},
                {name: 'Иванов И.', checked: 400, new: 400, in_process: 500, not_ready: 1235, decline: 1235,success: 1235,},
                {name: 'Петров А.', checked: 6000, new: 1300, in_process: 700, not_ready: 1235, decline: 1235,success: 1235,},
                {name: 'Семенов Е.', checked: 200, new: 100, in_process: 200, not_ready: 1235, decline: 1235,success: 1235,},
                {name: 'Данилов Д.', checked: 600, new: 400, in_process: 300, not_ready: 1235, decline: 1235,success: 1235,},
                {name: 'Кириченко В.', checked: 500, new: 90, in_process: 100, not_ready: 1235, decline: 1235,success: 1235,}
            ],
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
        loadStatistic() {
            this.loaded = false
            this.$store.dispatch("loadStatistic").then(resp => {
                this.chart = resp
                this.loaded = true
            })
        }

    }
}
</script>
