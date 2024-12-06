<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

import ClientTable from "@/Components/Persons/PersonTable.vue";
import ClientForm from "@/Components/Persons/PersonForm.vue";
import {Head} from '@inertiajs/vue3';
</script>

<template>
    <Head title="Клиенты"/>

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Клиенты</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">
<!--                        <ClientForm
                            v-if="!loading"
                            :item="selectedClient"
                            v-on:callback="callbackClientForm"></ClientForm>
                        <hr class="hr my-5"/>-->
                        <ClientTable
                            v-on:select="selectClient"
                            v-if="!loading"></ClientTable>
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
            loading: false,
            selectedClient: null,
        }
    },
    methods: {
        selectClient(item) {
            this.selectedClient = item;
         /*   this.loading = true
            this.$nextTick(() => {
                this.loading = false
            })*/
        },
        callbackClientForm() {
            this.loading = true
            this.selectedClient = null
            this.$nextTick(() => {
                this.loading = false
            })
        }
    }
}
</script>
