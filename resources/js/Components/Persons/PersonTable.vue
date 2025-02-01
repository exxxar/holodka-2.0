<script setup>
import Pagination from "@/Components/Pagination.vue";

</script>
<template>

    <div class="alert alert-light my-2 rounded-0">
        <div class="d-flex w-100 flex-wrap align-items-center">
            <h6 class="mr-2">Отображаемые поля: </h6>
            <template v-for="(item,index) in visible_fields">
               <span class="badge m-0 cursor-pointer"
                     @click="changeFieldStatus(index)"
                     v-bind:class="{'bg-primary':item.active, 'bg-secondary text-white':!item.active}"
               >{{ item.title }} </span>,
            </template>
        </div>
    </div>


    <div class="alert alert-light my-2 rounded-0">
        <div class="d-flex w-100 flex-wrap align-items-center">
            <h6 class="mr-2">Фильтры статуса: </h6>
            <template v-for="(item,index) in statuses">
               <span class="badge m-0 cursor-pointer"
                     @click="changeStatusFilter(index)"
                     v-bind:class="{'bg-primary':sort.filters.statuses.indexOf(index)!==-1, 'bg-secondary text-white':sort.filters.statuses.indexOf(index)===-1}"
               >{{ item }} </span>,
            </template>
        </div>
    </div>

    <div class="alert alert-light my-2 rounded-0" v-if="loaded_cities">

        <div class="d-flex w-100 flex-wrap align-items-center">
            <h6 class="mr-2">Фильтры городов: </h6>
            <span class="badge m-0 cursor-pointer"
                  @click="changeCityFilter('Без города')"
                  v-bind:class="{'bg-primary':sort.filters.cities.indexOf('Без города')!==-1, 'bg-secondary text-white':sort.filters.cities.indexOf('Без города')===-1}">
            Без города
        </span>,
            <template v-for="(item,index) in selectedCities">
               <span class="badge m-0 cursor-pointer"
                     @click="changeCityFilter(item)"
                     v-bind:class="{'bg-primary':sort.filters.cities.indexOf(item)!==-1, 'bg-secondary text-white':sort.filters.cities.indexOf(item)===-1}"
               >{{ item }} </span>,
            </template>

            <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#city-modal">
                Выбрать города
            </button>
        </div>
    </div>

    <div class="alert alert-light my-2 rounded-0">

        <div class="d-flex w-100 flex-wrap align-items-center">
            <h6 class="mr-2">Тип профиля: </h6>
            <span class="badge m-0 cursor-pointer"
                  @click="changeMessageType(null)"
                  v-bind:class="{'bg-primary':sort.filters.is_message_closed == null, 'bg-secondary text-white':sort.filters.is_message_closed != null}">
            Не учитывать тип профиля
        </span>,

            <span class="badge m-0 cursor-pointer"
                  @click="changeMessageType(0)"
                  v-bind:class="{'bg-primary':sort.filters.is_message_closed === 0, 'bg-secondary text-white':sort.filters.is_message_closed !== 0}">
            Открытый
        </span>,

            <span class="badge m-0 cursor-pointer"
                  @click="changeMessageType(1)"
                  v-bind:class="{'bg-primary':sort.filters.is_message_closed === 1, 'bg-secondary text-white':sort.filters.is_message_closed !== 1}">
            Закрытый
        </span>

        </div>
    </div>

    <div class="alert alert-light my-2 rounded-0" v-if="loaded_groups">

        <div class="d-flex w-100 flex-wrap align-items-center">
            <h6 class="mr-2">Фильтры групп: </h6>
            <span class="badge m-0 cursor-pointer"
                  @click="changeGroupFilter('Не указана')"
                  v-bind:class="{'bg-primary':sort.filters.groups.indexOf('Не указана')!==-1, 'bg-secondary text-white':sort.filters.groups.indexOf('Не указана')===-1}">
            Не указана
        </span>,
            <template v-for="(item,index) in selectedGroups">
               <span class="badge m-0 cursor-pointer"
                     @click="changeGroupFilter(item)"
                     v-bind:class="{'bg-primary':sort.filters.groups.indexOf(item)!==-1, 'bg-secondary text-white':sort.filters.groups.indexOf(item)===-1}"
               >{{ item }} </span>,
            </template>
            <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#group-modal">
                Выбрать группу
            </button>
        </div>
    </div>

    <div class="alert alert-light mb-2 rounded-0">
        <div class="d-flex w-100 flex-wrap align-items-center">
            <h6 class="mr-2">Фильтр возраста: </h6>
            <div class="form-floating mr-2">
                <input type="number"
                       min="0"
                       v-model="sort.filters.age.from"
                       class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Начальное значение</label>
            </div>

            <div class="form-floating">
                <input type="number"
                       max="200"
                       v-model="sort.filters.age.to"
                       class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Конечное значение</label>
            </div>
        </div>
    </div>


    <form class="row">
        <div class="col-12">

            <div class="input-group">
                <div class="form-floating">
                    <input type="search"
                           v-model="search"
                           class="form-control" id="search-persons">
                    <label

                        for="search-persons">Поиск по клиентам</label>
                </div>
                <button type="button"
                        @click="loadPersons(0)"
                        class="btn btn-outline-secondary rounded-0">
                    <i class="fa-solid fa-magnifying-glass"></i> Применить фильтры
                </button>
                <button type="button"
                        @click="resetFilters"
                        class="btn btn-outline-danger rounded-0">
                    Сбросить
                </button>
            </div>


        </div>
    </form>

    <div class="d-flex w-100 flex-wrap align-items-center mt-2">
        <button type="button"
                @click="filterAndLoad"
                class="btn btn-primary rounded-0">
            Скачать эксель
        </button>
    </div>

    <!--    <div class="d-flex w-100">
            <button type="button"
                    @click="sortAndLoad('id')"
                    class="btn btn-primary rounded-0">
                Применить фильтры
            </button>
        </div>-->

    <p class="mt-3 mb-0" v-if="paginate_object">Всего найдено: <span
        class="fw-bold">{{ paginate_object.meta.total || 0 }}</span></p>
    <div class="d-flex scrollable-area py-5 mb-3" v-if="loaded">
        <table class="table table-responsive" v-if="items.length>0">
            <thead>
            <tr>
                <th
                    v-if="isFieldActive('id')"
                    scope="col" class="cursor-pointer" @click="sortAndLoad('id')">#
                    <span v-if="sort.direction === 'desc'&&sort.column === 'id'"><i
                        class="fa-solid fa-caret-down"></i></span>
                    <span v-if="sort.direction === 'asc'&&sort.column === 'id'"><i
                        class="fa-solid fa-caret-up"></i></span>
                </th>
                <th
                    v-if="isFieldActive('status')"
                    scope="col" class="text-center cursor-pointer" @click="sortAndLoad('status')">Статус
                    <span v-if="sort.direction === 'desc'&&sort.column === 'status'"><i
                        class="fa-solid fa-caret-down"></i></span>
                    <span v-if="sort.direction === 'asc'&&sort.column === 'status'"><i
                        class="fa-solid fa-caret-up"></i></span>

                </th>


                <th
                    v-if="isFieldActive('name')"
                    scope="col" class="text-center cursor-pointer" @click="sortAndLoad('name')">ФИО
                    <span v-if="sort.direction === 'desc'&&sort.column === 'name'"><i
                        class="fa-solid fa-caret-down"></i></span>
                    <span v-if="sort.direction === 'asc'&&sort.column === 'name'"><i
                        class="fa-solid fa-caret-up"></i></span>

                </th>

                <th
                    v-if="isFieldActive('age')"
                    scope="col" class="text-center cursor-pointer" @click="sortAndLoad('age')">Возраст
                    <span v-if="sort.direction === 'desc'&&sort.column === 'age'"><i
                        class="fa-solid fa-caret-down"></i></span>
                    <span v-if="sort.direction === 'asc'&&sort.column === 'age'"><i
                        class="fa-solid fa-caret-up"></i></span>

                </th>

                <th
                    v-if="isFieldActive('birthday')"
                    scope="col" class="text-center cursor-pointer" @click="sortAndLoad('birthday')">Д.Р.
                    <span v-if="sort.direction === 'desc'&&sort.column === 'birthday'"><i
                        class="fa-solid fa-caret-down"></i></span>
                    <span v-if="sort.direction === 'asc'&&sort.column === 'birthday'"><i
                        class="fa-solid fa-caret-up"></i></span>

                </th>

                <th
                    v-if="isFieldActive('city')"
                    scope="col" class="text-center cursor-pointer" @click="sortAndLoad('city')">Текущий город
                    <span v-if="sort.direction === 'desc'&&sort.column === 'city'"><i
                        class="fa-solid fa-caret-down"></i></span>
                    <span v-if="sort.direction === 'asc'&&sort.column === 'city'"><i
                        class="fa-solid fa-caret-up"></i></span>

                </th>

                <th
                    v-if="isFieldActive('vk_group_link')"
                    scope="col" class="text-center cursor-pointer" @click="sortAndLoad('vk_group_link')">Группа вк
                    <span v-if="sort.direction === 'desc'&&sort.column === 'vk_group_link'"><i
                        class="fa-solid fa-caret-down"></i></span>
                    <span v-if="sort.direction === 'asc'&&sort.column === 'vk_group_link'"><i
                        class="fa-solid fa-caret-up"></i></span>

                </th>

                <th
                    v-if="isFieldActive('vk_user_link')"
                    scope="col" class="text-center cursor-pointer" @click="sortAndLoad('vk_user_link')">Ссылка
                    <span v-if="sort.direction === 'desc'&&sort.column === 'vk_user_link'"><i
                        class="fa-solid fa-caret-down"></i></span>
                    <span v-if="sort.direction === 'asc'&&sort.column === 'vk_user_link'"><i
                        class="fa-solid fa-caret-up"></i></span>

                </th>

                <th
                    v-if="isFieldActive('from')"
                    scope="col" class="text-center cursor-pointer" @click="sortAndLoad('from')">Источник
                    <span v-if="sort.direction === 'desc'&&sort.column === 'from'"><i
                        class="fa-solid fa-caret-down"></i></span>
                    <span v-if="sort.direction === 'asc'&&sort.column === 'from'"><i
                        class="fa-solid fa-caret-up"></i></span>

                </th>

                <th
                    v-if="isFieldActive('common_count')"
                    scope="col" class="text-center cursor-pointer" @click="sortAndLoad('common_count')">Число общих
                    друзей
                    <span v-if="sort.direction === 'desc'&&sort.column === 'common_count'"><i
                        class="fa-solid fa-caret-down"></i></span>
                    <span v-if="sort.direction === 'asc'&&sort.column === 'common_count'"><i
                        class="fa-solid fa-caret-up"></i></span>

                </th>

                <th
                    v-if="isFieldActive('home_town')"
                    scope="col" class="text-center cursor-pointer" @click="sortAndLoad('home_town')">Родной город
                    <span v-if="sort.direction === 'desc'&&sort.column === 'home_town'"><i
                        class="fa-solid fa-caret-down"></i></span>
                    <span v-if="sort.direction === 'asc'&&sort.column === 'home_town'"><i
                        class="fa-solid fa-caret-up"></i></span>

                </th>

                <th
                    v-if="isFieldActive('last_seen')"
                    scope="col" class="text-center cursor-pointer" @click="sortAndLoad('last_seen')">Дата последнего
                    онлайна
                    <span v-if="sort.direction === 'desc'&&sort.column === 'last_seen'"><i
                        class="fa-solid fa-caret-down"></i></span>
                    <span v-if="sort.direction === 'asc'&&sort.column === 'last_seen'"><i
                        class="fa-solid fa-caret-up"></i></span>

                </th>

                <th
                    v-if="isFieldActive('is_profile_closed')"
                    scope="col" class="text-center cursor-pointer" @click="sortAndLoad('is_profile_closed')">Закрыт
                    профиль?
                    <span v-if="sort.direction === 'desc'&&sort.column === 'is_profile_closed'"><i
                        class="fa-solid fa-caret-down"></i></span>
                    <span v-if="sort.direction === 'asc'&&sort.column === 'is_profile_closed'"><i
                        class="fa-solid fa-caret-up"></i></span>

                </th>

                <th
                    v-if="isFieldActive('is_messages_closed')"
                    scope="col" class="text-center cursor-pointer" @click="sortAndLoad('is_messages_closed')">Закрыты
                    сообщения?
                    <span v-if="sort.direction === 'desc'&&sort.column === 'is_messages_closed'"><i
                        class="fa-solid fa-caret-down"></i></span>
                    <span v-if="sort.direction === 'asc'&&sort.column === 'is_messages_closed'"><i
                        class="fa-solid fa-caret-up"></i></span>

                </th>

                <th
                    v-if="isFieldActive('deactivated')"
                    scope="col" class="text-center cursor-pointer" @click="sortAndLoad('deactivated')">Состояние учетки
                    <span v-if="sort.direction === 'desc'&&sort.column === 'deactivated'"><i
                        class="fa-solid fa-caret-down"></i></span>
                    <span v-if="sort.direction === 'asc'&&sort.column === 'deactivated'"><i
                        class="fa-solid fa-caret-up"></i></span>

                </th>


                <th
                    v-if="isFieldActive('updated_at')"
                    scope="col" class="text-center cursor-pointer" @click="sortAndLoad('updated_at')">
                    Дата изменения
                    <span v-if="sort.direction === 'desc'&&sort.column === 'updated_at'"><i
                        class="fa-solid fa-caret-down"></i></span>
                    <span v-if="sort.direction === 'asc'&&sort.column === 'updated_at'"><i
                        class="fa-solid fa-caret-up"></i></span>
                </th>

            </tr>
            </thead>
            <tbody>

            <tr

                v-for="(item, index) in items">
                <th
                    v-bind:class="{'bg-warning':item.checked_at!=null}"
                    v-if="isFieldActive('id')"
                    scope="row">{{ index + 1 + (paginate_object ? paginate_object.meta.current_page - 1 : 0) * 30 }}
                </th>

                <td
                    style="min-width: 200px;"
                    v-if="isFieldActive('status')"
                    class="text-center">

                    <div class="form-floating">
                        <select
                            @change="changePersonStatus(index)"
                            v-model="items[index].status"
                            class="form-select" id="floatingSelect" aria-label="Floating label select example">
                            <option :value="statusIndex" v-for="(status, statusIndex) in statuses">{{ status }}</option>
                        </select>
                        <label for="floatingSelect">Статус обработки клиента</label>
                    </div>
                </td>


                <td
                    v-if="isFieldActive('name')"
                    class="text-center" @click="selectItem(item)">
                    {{ item.name || '-' }}
                </td>
                <td
                    v-if="isFieldActive('age')"
                    class="text-center" @click="selectItem(item)">
                    {{ item.age || '-' }}
                </td>
                <td
                    v-if="isFieldActive('birthday')"
                    class="text-center">
                    {{ item.birthday || '-' }}
                </td>

                <td
                    v-if="isFieldActive('city')"
                    class="text-center">
                    {{ item.city || '-' }}
                </td>

                <td
                    v-if="isFieldActive('vk_group_link')"
                    class="text-center">
                    {{ item.vk_group_link || '-' }}
                </td>

                <td
                    v-if="isFieldActive('vk_user_link')"
                    class="text-center">
                    <a target="_blank"
                       @click="checkItem(index)"
                       class="btn btn-success"
                       :href="'https://vk.com/im?sel='+item.vk_id">Открыть диалог</a>
                    <p class="small fst-italic mb-0 mt-1"
                       style="line-height: 100%;"
                       v-if="item.is_messages_closed">Сообщения закрыты</p>
                </td>

                <td
                    v-if="isFieldActive('from')"
                    class="text-center">
                    {{ item.from || '-' }}
                </td>

                <td
                    v-if="isFieldActive('common_count')"
                    class="text-center">
                    {{ item.common_count || '-' }}
                </td>

                <td
                    v-if="isFieldActive('home_town')"
                    class="text-center">
                    {{ item.home_town || '-' }}
                </td>

                <td
                    v-if="isFieldActive('last_seen')"
                    class="text-center">
                    {{ item.last_seen || '-' }}
                </td>

                <td
                    v-if="isFieldActive('is_message_closed')"
                    class="text-center">
                    {{ item.is_message_closed ? 'Закрытый' : 'Открытый' }}
                </td>

                <td
                    v-if="isFieldActive('is_messages_closed')"
                    class="text-center">
                    {{ item.is_messages_closed ? 'Закрытые' : 'Открытые' }}
                </td>

                <td
                    v-if="isFieldActive('deactivated')"
                    class="text-center">
                    {{ item.deactivated || 'Активна' }}
                </td>

                <td
                    v-if="isFieldActive('updated_at')"
                    class="text-center">
                    {{ item.updated_at || '-' }}
                </td>
                <!--                <td class="text-center">
                                    <div class="dropdown">
                                        <button class="btn btn-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa-solid fa-bars"></i>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item"
                                                   @click="selectItem(item)"
                                                   href="javascript:void(0)"><i class="fa-solid fa-pen mr-2"></i>Редактировать</a></li>

                                            <li><a class="dropdown-item text-danger"
                                                   @click="removeItem(item.id)"
                                                   href="javascript:void(0)"><i class="fa-solid fa-trash-can mr-2"></i>Удалить</a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>-->
            </tr>

            </tbody>
        </table>
    </div>
    <div class="alert alert-success" role="alert" v-if="items.length===0">
        <h4 class="alert-heading">Клиенты</h4>
        <p>К сожалению, раздел клиентов пуст. Вы еще не добавили ни одного клиента, которых можно отобразить на этой
            странице.</p>
        <hr>
        <p class="mb-0">Воспользуйтесь формой выше и добавьте своего первого клиента</p>
    </div>
    <div class="row mb-3" v-if="items.length>0">
        <div class="col-12">
            <Pagination
                v-on:pagination_page="loadPersons"
                v-if="paginate_object"
                :pagination="paginate_object"/>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="city-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Выбор города</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div class="form-floating">
                        <input type="search" class="form-control" v-model="city_search">
                        <label for="">Фильтрация города</label>
                    </div>
                    <hr class="my-3">
                    <template v-for="(item,index) in filteredCities">
                       <span class="badge m-0 cursor-pointer"
                             @click="changeCityFilter(item)"
                             v-bind:class="{'bg-primary':sort.filters.cities.indexOf(item)!==-1, 'bg-secondary text-white':sort.filters.cities.indexOf(item)===-1}"
                       >{{ item }} </span>,
                    </template>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                </div>
            </div>
        </div>
    </div>


    <!-- Modal -->
    <div class="modal fade" id="group-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Выбор группы</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <template v-for="(item,index) in groups">
                       <span class="badge m-0 cursor-pointer"
                             @click="changeGroupFilter(item)"
                             v-bind:class="{'bg-primary':sort.filters.groups.indexOf(item)!==-1, 'bg-secondary text-white':sort.filters.groups.indexOf(item)===-1}"
                       >{{ item }} </span>,
                    </template>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import {mapGetters} from "vuex";

export default {
    data() {
        return {
            loaded: true,
            loaded_cities: true,
            loaded_groups: true,
            sort: {
                column: null,
                direction: "desc",
                filters: {
                    statuses: [],
                    cities: [],
                    groups: [],
                    is_message_closed: null, //0,1
                    age: {
                        from: null,
                        to: null,
                    }
                }
            },
            search: null,
            city_search: null,
            current_page: 0,
            paginate_object: null,
            cities: [],
            groups: [],
            statuses: [
                "Только добавлен",
                "Взят в обработку",
                "Отказ",
                "Сомневается",
                "Успех",
            ],
            visible_fields: [
                {
                    title: "№",
                    key: "id",
                    order: 0,
                    active: true,
                },
                {
                    title: "Статус",
                    key: "status",
                    order: 0,
                    active: false,
                },
                {
                    title: "Ф.И.О.",
                    key: "name",
                    order: 0,
                    active: true,
                },
                {
                    title: "Возраст",
                    key: "age",
                    order: 0,
                    active: true,
                },
                {
                    title: "Д.Р.",
                    key: "birthday",
                    order: 0,
                    active: true,
                },
                {
                    title: "Группа в ВК",
                    key: "vk_group_link",
                    order: 0,
                    active: false,
                },
                {
                    title: "Ссылка на пользователя",
                    key: "vk_user_link",
                    order: 0,
                    active: true,
                },
                {
                    title: "Источник сбора",
                    key: "from",
                    order: 0,
                    active: false,
                },
                {
                    title: "Город проживания",
                    key: "city",
                    order: 0,
                    active: true,
                },
                {
                    title: "Число общих друзей",
                    key: "common_count",
                    order: 0,
                    active: false,
                },
                {
                    title: "Родной город",
                    key: "home_town",
                    order: 0,
                    active: false,
                },
                {
                    title: "Дата последнего онлайна",
                    key: "last_seen",
                    order: 0,
                    active: false,
                },

                {
                    title: "Профиль открыть",
                    key: "is_message_closed",
                    order: 0,
                    active: false,
                },


                {
                    title: "Сообщения открыты",
                    key: "is_messages_closed",
                    order: 0,
                    active: false,
                },
                {
                    title: "Состояние учетки",
                    key: "deactivated",
                    order: 0,
                    active: false,
                },
                {
                    title: "Взят в работу",
                    key: "checked_at",
                    order: 0,
                    active: false,
                },

                {
                    title: "Пояснение по человеку",
                    key: "checked_comment",
                    order: 0,
                    active: true,
                },
                {
                    title: "Дата обновления данных",
                    key: "updated_at",
                    order: 0,
                    active: false,
                },
            ],

            items: [
                {
                    id: null,
                    name: null,
                    age: null,
                    birthday: null,
                    vk_group_link: null,
                    vk_user_link: null,
                    city: null,
                    from: null,
                    common_count: 0,
                    home_town: null,
                    last_seen: null,
                    is_message_closed: false,
                    is_messages_closed: false,
                    deactivated: false,
                    owner_id: null,
                    checked_at: null,
                    vk_id: null,
                    status: 0,
                    checked_comment: null,

                }
            ]
        }
    },
    computed: {
        ...mapGetters(['getPersons', 'getPersonsPaginateObject']),
        selectedCities() {
            return this.cities.filter(item => this.sort.filters.cities.indexOf(item) !== -1)
        },
        selectedGroups() {
            return this.groups.filter(item => this.sort.filters.groups.indexOf(item) !== -1)
        },
        filteredCities() {
            if (!this.city_search)
                return this.cities

            return this.cities.filter(item => item.toLowerCase().indexOf(this.city_search.toLowerCase()) !== -1)
        },
        user() {
            return window.user
        }
    },
    mounted() {
        this.loadAllCities();
        this.loadAllGroups();

        this.loadPersons();

        let channel = pusher.subscribe('my-channel');
        channel.bind('my-event', (data) => {
            if (data.userId === this.user.id) {
                this.$notify({
                    title: 'Внимание!',
                    text: 'Ваше задание #' + data.jobId + " успешно выполнено!",
                    type: 'success'
                })
            }

        });

        if (localStorage.getItem("ya_v_dele_visible_fields")) {
            let vf = JSON.parse(localStorage.getItem("ya_v_dele_visible_fields")) || [];
            if (this.visible_fields.length === vf.length)
                this.visible_fields = vf
        }

    },
    methods: {
        loadAllCities() {

            this.loaded_cities = false
            this.$store.dispatch("loadAllCities"
            ).then(resp => {
                this.cities = resp.cities || []
                this.loaded_cities = true
            }).catch(() => {

            })
        },
        changeMessageType(type) {
            this.sort.filters.is_message_closed = type
        },
        loadAllGroups() {

            this.loaded_groups = false
            this.$store.dispatch("loadAllGroups"
            ).then(resp => {
                this.groups = resp.groups || []
                this.loaded_groups = true
            }).catch(() => {

            })
        },
        checkItem(index) {
            this.items[index].checked_at = new Date()

            this.$store.dispatch("checkPerson", {
                person_id: this.items[index].id
            })
        },
        changePersonStatus(index) {
            this.$store.dispatch("changePersonStatus", {
                person_id: this.items[index].id,
                status: this.items[index].status || 0
            }).then(() => {
                this.$notify({
                    title: 'Смена статуса',
                    text: 'Статус успешно изменен',
                    type: 'success'
                })
            }).catch(() => {
                this.$notify({
                    title: 'Смена статуса',
                    text: 'Ошибка изменения статуса',
                    type: 'error'
                })
            })


        },
        changeFieldStatus(index) {
            this.loaded = false
            this.$nextTick(() => {
                this.visible_fields[index].active = !this.visible_fields[index].active
                localStorage.setItem("ya_v_dele_visible_fields", JSON.stringify(this.visible_fields))
                this.loaded = true
            })
        },
        isFieldActive(key) {

            if (!this.visible_fields || (this.visible_fields || []).length === 0)
                return true;

            let index = this.visible_fields.findIndex(item => item.key === key)
            if (index === -1)
                return true
            return this.visible_fields[index].active
        },
        sortAndLoad(column) {
            this.sort.column = column
            this.sort.direction = this.sort.direction === "desc" ? "asc" : "desc"
            this.loadPersons(this.current_page)
        },
        resetFilters() {
            this.sort.filters.age.from = null
            this.sort.filters.age.to = null
            this.sort.filters.cities = []
            this.sort.filters.statuses = []
            this.sort.filters.is_message_closed = null
            this.search = null
            this.loadPersons(0)
        },
        loadPersons(page = 0) {
            this.current_page = page
            this.$store.dispatch("loadPersons", {
                dataObject: {
                    search: this.search,
                    filters: this.sort.filters,
                    order: this.sort.column,
                    direction: this.sort.direction
                },
                page: this.current_page
            }).then(resp => {
                this.items = this.getPersons
                this.paginate_object = this.getPersonsPaginateObject


            }).catch(() => {
                this.loading = false
            })
        },
        selectItem(item) {
            this.$emit("select", item)
        },
        changeGroupFilter(group) {
            let index = this.sort.filters.groups.findIndex(item => item === group)

            if (index === -1)
                this.sort.filters.groups.push(group)
            else
                this.sort.filters.groups.splice(index, 1)
        },
        changeCityFilter(city) {
            let index = this.sort.filters.cities.findIndex(item => item === city)

            if (index === -1)
                this.sort.filters.cities.push(city)
            else
                this.sort.filters.cities.splice(index, 1)
        },
        filterAndLoad() {
            axios({
                url: '/persons/excel-download', //your url
                method: 'POST',
                responseType: 'blob', // important
                data: {
                    search: this.search,
                    filters: this.sort.filters,
                    order: this.sort.column,
                    direction: this.sort.direction,
                    fields: this.visible_fields,
                }
            }).then((response) => {
                // create file link in browser's memory
                const href = URL.createObjectURL(response.data);

                window.open(href, '_blank').focus();

                URL.revokeObjectURL(href);
            });
        },
        changeStatusFilter(index) {
            let statusIndex = this.sort.filters.statuses.findIndex(item => item === index)

            if (statusIndex === -1)
                this.sort.filters.statuses.push(index)
            else
                this.sort.filters.statuses.splice(statusIndex, 1)
        },
        removeItem(id) {
            this.$store.dispatch("removePerson", {
                materialId: id
            }).then(() => {
                this.sortAndLoad("id")
            })
        },

    }
}
</script>
<style>
.scrollable-area {
    width: 100%;
    overflow-y: auto;
}

</style>
