import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { useSSRContext, mergeProps } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { mapGetters } from "vuex";
const _sfc_main$2 = {
  props: ["pagination"],
  data() {
    return {
      currentPage: 1
    };
  },
  computed: {
    hasPagination() {
      if (this.pagination === null || !this.pagination)
        return false;
      if (this.pagination.meta.links[0].active === false && this.pagination.meta.links[this.pagination.meta.links.length - 1].active === false)
        return false;
      return true;
    },
    filteredLinks() {
      if (!this.pagination)
        return [];
      parseInt(this.pagination.meta.current_page);
      return this.pagination.meta.links;
    }
  },
  methods: {
    nextPage() {
      this.currentPage = this.pagination.meta.current_page + 1;
      this.$emit("pagination_page", this.pagination.meta.current_page + 1);
    },
    page(index) {
      this.currentPage = index;
      window.scrollTo({
        top: 500,
        behavior: "smooth"
      });
      this.$emit("pagination_page", index);
    },
    prevPage() {
      if (this.currentPage === 1)
        return;
      this.currentPage = this.pagination.meta.current_page - 1;
      this.$emit("pagination_page", this.pagination.meta.current_page - 1);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.pagination) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "row d-flex justify-content-center" }, _attrs))}>`);
    if ($props.pagination.links) {
      _push(`<div class="col-lg-6 dt-pagination d-flex justify-content-center align-items-center"><nav aria-label="Page navigation example"><ul class="pagination"><li class="page-item"><a class="${ssrRenderClass([{ "disabled": $props.pagination.links.prev === null }, "page-link rounded-0"])}" aria-label="Previous"><span aria-hidden="true">«</span></a></li><!--[-->`);
      ssrRenderList($options.filteredLinks, (item, index) => {
        _push(`<li class="${ssrRenderClass([{ "active-dark": index === $props.pagination.meta.current_page }, "page-item"])}">`);
        if (index !== 0 && index !== $options.filteredLinks.length - 1) {
          _push(`<a class="${ssrRenderClass([{ "text-secondary": index !== $props.pagination.meta.current_page }, "page-link rounded-0"])}" href="#">${ssrInterpolate(item.label)}</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--><li class="page-item"><a class="${ssrRenderClass([{ "disabled": $props.pagination.links.next === null }, "page-link rounded-0 text-secondary"])}" aria-label="Next "><span aria-hidden="true">»</span></a></li></ul></nav></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Pagination.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const __default__ = {
  data() {
    return {
      loaded: true,
      loaded_cities: true,
      sort: {
        column: null,
        direction: "desc",
        filters: {
          statuses: [],
          cities: [],
          age: {
            from: null,
            to: null
          }
        }
      },
      search: null,
      current_page: 0,
      paginate_object: null,
      cities: [],
      statuses: [
        "Только добавлен",
        "Взят в обработку",
        "Отказ",
        "Сомневается",
        "Успех"
      ],
      visible_fields: [
        {
          title: "№",
          key: "id",
          order: 0,
          active: true
        },
        {
          title: "Статус",
          key: "status",
          order: 0,
          active: false
        },
        {
          title: "Ф.И.О.",
          key: "name",
          order: 0,
          active: true
        },
        {
          title: "Возраст",
          key: "age",
          order: 0,
          active: true
        },
        {
          title: "Д.Р.",
          key: "birthday",
          order: 0,
          active: true
        },
        {
          title: "Группа в ВК",
          key: "vk_group_link",
          order: 0,
          active: false
        },
        {
          title: "Ссылка на пользователя",
          key: "vk_user_link",
          order: 0,
          active: true
        },
        {
          title: "Источник сбора",
          key: "from",
          order: 0,
          active: false
        },
        {
          title: "Город проживания",
          key: "city",
          order: 0,
          active: true
        },
        {
          title: "Число общих друзей",
          key: "common_count",
          order: 0,
          active: false
        },
        {
          title: "Родной город",
          key: "home_town",
          order: 0,
          active: false
        },
        {
          title: "Дата последнего онлайна",
          key: "last_seen",
          order: 0,
          active: false
        },
        {
          title: "Профиль открыть",
          key: "is_profile_closed",
          order: 0,
          active: false
        },
        {
          title: "Сообщения открыты",
          key: "is_messages_closed",
          order: 0,
          active: false
        },
        {
          title: "Состояние учетки",
          key: "deactivated",
          order: 0,
          active: false
        },
        {
          title: "Взят в работу",
          key: "checked_at",
          order: 0,
          active: false
        },
        {
          title: "Пояснение по человеку",
          key: "checked_comment",
          order: 0,
          active: true
        },
        {
          title: "Дата обновления данных",
          key: "updated_at",
          order: 0,
          active: false
        }
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
          is_profile_closed: false,
          is_messages_closed: false,
          deactivated: false,
          owner_id: null,
          checked_at: null,
          vk_id: null,
          status: 0,
          checked_comment: null
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["getPersons", "getPersonsPaginateObject"])
  },
  mounted() {
    this.loadAllCities();
    this.loadPersons();
    if (localStorage.getItem("ya_v_dele_visible_fields")) {
      let vf = JSON.parse(localStorage.getItem("ya_v_dele_visible_fields")) || [];
      if (this.visible_fields.length === vf.length)
        this.visible_fields = vf;
    }
  },
  methods: {
    loadAllCities() {
      this.loaded_cities = false;
      this.$store.dispatch(
        "loadAllCities"
      ).then((resp) => {
        this.cities = resp.cities || [];
        this.loaded_cities = true;
      }).catch(() => {
      });
    },
    checkItem(index) {
      this.items[index].checked_at = /* @__PURE__ */ new Date();
      this.$store.dispatch("checkPerson", {
        person_id: this.items[index].id
      });
    },
    changePersonStatus(index) {
      this.$store.dispatch("changePersonStatus", {
        person_id: this.items[index].id,
        status: this.items[index].status || 0
      }).then(() => {
        this.$notify({
          title: "Смена статуса",
          text: "Статус успешно изменен",
          type: "success"
        });
      }).catch(() => {
        this.$notify({
          title: "Смена статуса",
          text: "Ошибка изменения статуса",
          type: "error"
        });
      });
    },
    changeFieldStatus(index) {
      this.loaded = false;
      this.$nextTick(() => {
        this.visible_fields[index].active = !this.visible_fields[index].active;
        localStorage.setItem("ya_v_dele_visible_fields", JSON.stringify(this.visible_fields));
        this.loaded = true;
      });
    },
    isFieldActive(key) {
      if (!this.visible_fields || (this.visible_fields || []).length === 0)
        return true;
      let index = this.visible_fields.findIndex((item) => item.key === key);
      if (index === -1)
        return true;
      return this.visible_fields[index].active;
    },
    sortAndLoad(column) {
      this.sort.column = column;
      this.sort.direction = this.sort.direction === "desc" ? "asc" : "desc";
      this.loadPersons(this.current_page);
    },
    resetFilters() {
      this.sort.filters.age.from = null;
      this.sort.filters.age.to = null;
      this.sort.filters.cities = [];
      this.sort.filters.statuses = [];
      this.search = null;
      this.loadPersons(0);
    },
    loadPersons(page = 0) {
      this.current_page = page;
      this.$store.dispatch("loadPersons", {
        dataObject: {
          search: this.search,
          filters: this.sort.filters,
          order: this.sort.column,
          direction: this.sort.direction
        },
        page: this.current_page
      }).then((resp) => {
        this.items = this.getPersons;
        this.paginate_object = this.getPersonsPaginateObject;
      }).catch(() => {
        this.loading = false;
      });
    },
    selectItem(item) {
      this.$emit("select", item);
    },
    changeCityFilter(city) {
      let index = this.sort.filters.cities.findIndex((item) => item === city);
      if (index === -1)
        this.sort.filters.cities.push(city);
      else
        this.sort.filters.cities.splice(index, 1);
    },
    filterAndLoad() {
      axios({
        url: "/persons/excel-download",
        //your url
        method: "POST",
        responseType: "blob",
        // important
        data: {
          search: this.search,
          filters: this.sort.filters,
          order: this.sort.column,
          direction: this.sort.direction,
          fields: this.visible_fields
        }
      }).then((response) => {
        const href = URL.createObjectURL(response.data);
        window.open(href, "_blank").focus();
        URL.revokeObjectURL(href);
      });
    },
    changeStatusFilter(index) {
      let statusIndex = this.sort.filters.statuses.findIndex((item) => item === index);
      if (statusIndex === -1)
        this.sort.filters.statuses.push(index);
      else
        this.sort.filters.statuses.splice(statusIndex, 1);
    },
    removeItem(id) {
      this.$store.dispatch("removePerson", {
        materialId: id
      }).then(() => {
        this.sortAndLoad("id");
      });
    }
  }
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__, {
  __name: "PersonTable",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="alert alert-light my-2 rounded-0"><div class="d-flex w-100 flex-wrap align-items-center"><h6 class="mr-2">Отображаемые поля: </h6><!--[-->`);
      ssrRenderList(_ctx.visible_fields, (item, index) => {
        _push(`<!--[--><span class="${ssrRenderClass([{ "bg-primary": item.active, "bg-secondary text-white": !item.active }, "badge m-0 cursor-pointer"])}">${ssrInterpolate(item.title)}</span>, <!--]-->`);
      });
      _push(`<!--]--></div></div><div class="alert alert-light my-2 rounded-0"><div class="d-flex w-100 flex-wrap align-items-center"><h6 class="mr-2">Фильтры статуса: </h6><!--[-->`);
      ssrRenderList(_ctx.statuses, (item, index) => {
        _push(`<!--[--><span class="${ssrRenderClass([{ "bg-primary": _ctx.sort.filters.statuses.indexOf(index) !== -1, "bg-secondary text-white": _ctx.sort.filters.statuses.indexOf(index) === -1 }, "badge m-0 cursor-pointer"])}">${ssrInterpolate(item)}</span>, <!--]-->`);
      });
      _push(`<!--]--></div></div>`);
      if (_ctx.loaded_cities) {
        _push(`<div class="alert alert-light my-2 rounded-0"><div class="d-flex w-100 flex-wrap align-items-center"><h6 class="mr-2">Фильтры городов: </h6><span class="${ssrRenderClass([{ "bg-primary": _ctx.sort.filters.cities.indexOf("Без города") !== -1, "bg-secondary text-white": _ctx.sort.filters.cities.indexOf("Без города") === -1 }, "badge m-0 cursor-pointer"])}"> Без города </span>, <!--[-->`);
        ssrRenderList(_ctx.cities, (item, index) => {
          _push(`<!--[--><span class="${ssrRenderClass([{ "bg-primary": _ctx.sort.filters.cities.indexOf(item) !== -1, "bg-secondary text-white": _ctx.sort.filters.cities.indexOf(item) === -1 }, "badge m-0 cursor-pointer"])}">${ssrInterpolate(item)}</span>, <!--]-->`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="alert alert-light mb-2 rounded-0"><div class="d-flex w-100 flex-wrap align-items-center"><h6 class="mr-2">Фильтр возраста: </h6><div class="form-floating mr-2"><input type="number" min="0"${ssrRenderAttr("value", _ctx.sort.filters.age.from)} class="form-control" id="floatingInput" placeholder="name@example.com"><label for="floatingInput">Начальное значение</label></div><div class="form-floating"><input type="number" max="200"${ssrRenderAttr("value", _ctx.sort.filters.age.to)} class="form-control" id="floatingInput" placeholder="name@example.com"><label for="floatingInput">Конечное значение</label></div></div></div><form class="row"><div class="col-12"><div class="input-group"><div class="form-floating"><input type="search"${ssrRenderAttr("value", _ctx.search)} class="form-control" id="search-persons"><label for="search-persons">Поиск по клиентам</label></div><button type="button" class="btn btn-outline-secondary rounded-0"><i class="fa-solid fa-magnifying-glass"></i> Применить фильтры </button><button type="button" class="btn btn-outline-danger rounded-0"> Сбросить </button></div></div></form><div class="d-flex w-100 flex-wrap align-items-center mt-2"><button type="button" class="btn btn-primary rounded-0"> Скачать эксель </button></div>`);
      if (_ctx.paginate_object) {
        _push(`<p class="mt-3 mb-0">Всего найдено: <span class="fw-bold">${ssrInterpolate(_ctx.paginate_object.meta.total || 0)}</span></p>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.loaded) {
        _push(`<div class="d-flex scrollable-area py-5 mb-3">`);
        if (_ctx.items.length > 0) {
          _push(`<table class="table table-responsive"><thead><tr>`);
          if (_ctx.isFieldActive("id")) {
            _push(`<th scope="col" class="cursor-pointer"># `);
            if (_ctx.sort.direction === "desc" && _ctx.sort.column === "id") {
              _push(`<span><i class="fa-solid fa-caret-down"></i></span>`);
            } else {
              _push(`<!---->`);
            }
            if (_ctx.sort.direction === "asc" && _ctx.sort.column === "id") {
              _push(`<span><i class="fa-solid fa-caret-up"></i></span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</th>`);
          } else {
            _push(`<!---->`);
          }
          if (_ctx.isFieldActive("status")) {
            _push(`<th scope="col" class="text-center cursor-pointer">Статус `);
            if (_ctx.sort.direction === "desc" && _ctx.sort.column === "status") {
              _push(`<span><i class="fa-solid fa-caret-down"></i></span>`);
            } else {
              _push(`<!---->`);
            }
            if (_ctx.sort.direction === "asc" && _ctx.sort.column === "status") {
              _push(`<span><i class="fa-solid fa-caret-up"></i></span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</th>`);
          } else {
            _push(`<!---->`);
          }
          if (_ctx.isFieldActive("name")) {
            _push(`<th scope="col" class="text-center cursor-pointer">ФИО `);
            if (_ctx.sort.direction === "desc" && _ctx.sort.column === "name") {
              _push(`<span><i class="fa-solid fa-caret-down"></i></span>`);
            } else {
              _push(`<!---->`);
            }
            if (_ctx.sort.direction === "asc" && _ctx.sort.column === "name") {
              _push(`<span><i class="fa-solid fa-caret-up"></i></span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</th>`);
          } else {
            _push(`<!---->`);
          }
          if (_ctx.isFieldActive("age")) {
            _push(`<th scope="col" class="text-center cursor-pointer">Возраст `);
            if (_ctx.sort.direction === "desc" && _ctx.sort.column === "age") {
              _push(`<span><i class="fa-solid fa-caret-down"></i></span>`);
            } else {
              _push(`<!---->`);
            }
            if (_ctx.sort.direction === "asc" && _ctx.sort.column === "age") {
              _push(`<span><i class="fa-solid fa-caret-up"></i></span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</th>`);
          } else {
            _push(`<!---->`);
          }
          if (_ctx.isFieldActive("birthday")) {
            _push(`<th scope="col" class="text-center cursor-pointer">Д.Р. `);
            if (_ctx.sort.direction === "desc" && _ctx.sort.column === "birthday") {
              _push(`<span><i class="fa-solid fa-caret-down"></i></span>`);
            } else {
              _push(`<!---->`);
            }
            if (_ctx.sort.direction === "asc" && _ctx.sort.column === "birthday") {
              _push(`<span><i class="fa-solid fa-caret-up"></i></span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</th>`);
          } else {
            _push(`<!---->`);
          }
          if (_ctx.isFieldActive("city")) {
            _push(`<th scope="col" class="text-center cursor-pointer">Текущий город `);
            if (_ctx.sort.direction === "desc" && _ctx.sort.column === "city") {
              _push(`<span><i class="fa-solid fa-caret-down"></i></span>`);
            } else {
              _push(`<!---->`);
            }
            if (_ctx.sort.direction === "asc" && _ctx.sort.column === "city") {
              _push(`<span><i class="fa-solid fa-caret-up"></i></span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</th>`);
          } else {
            _push(`<!---->`);
          }
          if (_ctx.isFieldActive("vk_group_link")) {
            _push(`<th scope="col" class="text-center cursor-pointer">Группа вк `);
            if (_ctx.sort.direction === "desc" && _ctx.sort.column === "vk_group_link") {
              _push(`<span><i class="fa-solid fa-caret-down"></i></span>`);
            } else {
              _push(`<!---->`);
            }
            if (_ctx.sort.direction === "asc" && _ctx.sort.column === "vk_group_link") {
              _push(`<span><i class="fa-solid fa-caret-up"></i></span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</th>`);
          } else {
            _push(`<!---->`);
          }
          if (_ctx.isFieldActive("vk_user_link")) {
            _push(`<th scope="col" class="text-center cursor-pointer">Ссылка `);
            if (_ctx.sort.direction === "desc" && _ctx.sort.column === "vk_user_link") {
              _push(`<span><i class="fa-solid fa-caret-down"></i></span>`);
            } else {
              _push(`<!---->`);
            }
            if (_ctx.sort.direction === "asc" && _ctx.sort.column === "vk_user_link") {
              _push(`<span><i class="fa-solid fa-caret-up"></i></span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</th>`);
          } else {
            _push(`<!---->`);
          }
          if (_ctx.isFieldActive("from")) {
            _push(`<th scope="col" class="text-center cursor-pointer">Источник `);
            if (_ctx.sort.direction === "desc" && _ctx.sort.column === "from") {
              _push(`<span><i class="fa-solid fa-caret-down"></i></span>`);
            } else {
              _push(`<!---->`);
            }
            if (_ctx.sort.direction === "asc" && _ctx.sort.column === "from") {
              _push(`<span><i class="fa-solid fa-caret-up"></i></span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</th>`);
          } else {
            _push(`<!---->`);
          }
          if (_ctx.isFieldActive("common_count")) {
            _push(`<th scope="col" class="text-center cursor-pointer">Число общих друзей `);
            if (_ctx.sort.direction === "desc" && _ctx.sort.column === "common_count") {
              _push(`<span><i class="fa-solid fa-caret-down"></i></span>`);
            } else {
              _push(`<!---->`);
            }
            if (_ctx.sort.direction === "asc" && _ctx.sort.column === "common_count") {
              _push(`<span><i class="fa-solid fa-caret-up"></i></span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</th>`);
          } else {
            _push(`<!---->`);
          }
          if (_ctx.isFieldActive("home_town")) {
            _push(`<th scope="col" class="text-center cursor-pointer">Родной город `);
            if (_ctx.sort.direction === "desc" && _ctx.sort.column === "home_town") {
              _push(`<span><i class="fa-solid fa-caret-down"></i></span>`);
            } else {
              _push(`<!---->`);
            }
            if (_ctx.sort.direction === "asc" && _ctx.sort.column === "home_town") {
              _push(`<span><i class="fa-solid fa-caret-up"></i></span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</th>`);
          } else {
            _push(`<!---->`);
          }
          if (_ctx.isFieldActive("last_seen")) {
            _push(`<th scope="col" class="text-center cursor-pointer">Дата последнего онлайна `);
            if (_ctx.sort.direction === "desc" && _ctx.sort.column === "last_seen") {
              _push(`<span><i class="fa-solid fa-caret-down"></i></span>`);
            } else {
              _push(`<!---->`);
            }
            if (_ctx.sort.direction === "asc" && _ctx.sort.column === "last_seen") {
              _push(`<span><i class="fa-solid fa-caret-up"></i></span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</th>`);
          } else {
            _push(`<!---->`);
          }
          if (_ctx.isFieldActive("is_profile_closed")) {
            _push(`<th scope="col" class="text-center cursor-pointer">Закрыт профиль? `);
            if (_ctx.sort.direction === "desc" && _ctx.sort.column === "is_profile_closed") {
              _push(`<span><i class="fa-solid fa-caret-down"></i></span>`);
            } else {
              _push(`<!---->`);
            }
            if (_ctx.sort.direction === "asc" && _ctx.sort.column === "is_profile_closed") {
              _push(`<span><i class="fa-solid fa-caret-up"></i></span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</th>`);
          } else {
            _push(`<!---->`);
          }
          if (_ctx.isFieldActive("is_messages_closed")) {
            _push(`<th scope="col" class="text-center cursor-pointer">Закрыты сообщения? `);
            if (_ctx.sort.direction === "desc" && _ctx.sort.column === "is_messages_closed") {
              _push(`<span><i class="fa-solid fa-caret-down"></i></span>`);
            } else {
              _push(`<!---->`);
            }
            if (_ctx.sort.direction === "asc" && _ctx.sort.column === "is_messages_closed") {
              _push(`<span><i class="fa-solid fa-caret-up"></i></span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</th>`);
          } else {
            _push(`<!---->`);
          }
          if (_ctx.isFieldActive("deactivated")) {
            _push(`<th scope="col" class="text-center cursor-pointer">Состояние учетки `);
            if (_ctx.sort.direction === "desc" && _ctx.sort.column === "deactivated") {
              _push(`<span><i class="fa-solid fa-caret-down"></i></span>`);
            } else {
              _push(`<!---->`);
            }
            if (_ctx.sort.direction === "asc" && _ctx.sort.column === "deactivated") {
              _push(`<span><i class="fa-solid fa-caret-up"></i></span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</th>`);
          } else {
            _push(`<!---->`);
          }
          if (_ctx.isFieldActive("updated_at")) {
            _push(`<th scope="col" class="text-center cursor-pointer"> Дата изменения `);
            if (_ctx.sort.direction === "desc" && _ctx.sort.column === "updated_at") {
              _push(`<span><i class="fa-solid fa-caret-down"></i></span>`);
            } else {
              _push(`<!---->`);
            }
            if (_ctx.sort.direction === "asc" && _ctx.sort.column === "updated_at") {
              _push(`<span><i class="fa-solid fa-caret-up"></i></span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</th>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</tr></thead><tbody><!--[-->`);
          ssrRenderList(_ctx.items, (item, index) => {
            _push(`<tr>`);
            if (_ctx.isFieldActive("id")) {
              _push(`<th class="${ssrRenderClass({ "bg-warning": item.checked_at != null })}" scope="row">${ssrInterpolate(item.id || index)}</th>`);
            } else {
              _push(`<!---->`);
            }
            if (_ctx.isFieldActive("status")) {
              _push(`<td style="${ssrRenderStyle({ "min-width": "200px" })}" class="text-center"><div class="form-floating"><select class="form-select" id="floatingSelect" aria-label="Floating label select example"><!--[-->`);
              ssrRenderList(_ctx.statuses, (status, statusIndex) => {
                _push(`<option${ssrRenderAttr("value", statusIndex)}>${ssrInterpolate(status)}</option>`);
              });
              _push(`<!--]--></select><label for="floatingSelect">Статус обработки клиента</label></div></td>`);
            } else {
              _push(`<!---->`);
            }
            if (_ctx.isFieldActive("name")) {
              _push(`<td class="text-center">${ssrInterpolate(item.name || "-")}</td>`);
            } else {
              _push(`<!---->`);
            }
            if (_ctx.isFieldActive("age")) {
              _push(`<td class="text-center">${ssrInterpolate(item.age || "-")}</td>`);
            } else {
              _push(`<!---->`);
            }
            if (_ctx.isFieldActive("birthday")) {
              _push(`<td class="text-center">${ssrInterpolate(item.birthday || "-")}</td>`);
            } else {
              _push(`<!---->`);
            }
            if (_ctx.isFieldActive("city")) {
              _push(`<td class="text-center">${ssrInterpolate(item.city || "-")}</td>`);
            } else {
              _push(`<!---->`);
            }
            if (_ctx.isFieldActive("vk_group_link")) {
              _push(`<td class="text-center">${ssrInterpolate(item.vk_group_link || "-")}</td>`);
            } else {
              _push(`<!---->`);
            }
            if (_ctx.isFieldActive("vk_user_link")) {
              _push(`<td class="text-center"><a target="_blank" class="btn btn-success"${ssrRenderAttr("href", "https://vk.com/im?sel=" + item.vk_id)}>Открыть диалог</a>`);
              if (item.is_messages_closed) {
                _push(`<p class="small fst-italic mb-0 mt-1" style="${ssrRenderStyle({ "line-height": "100%" })}">Сообщения закрыты</p>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</td>`);
            } else {
              _push(`<!---->`);
            }
            if (_ctx.isFieldActive("from")) {
              _push(`<td class="text-center">${ssrInterpolate(item.from || "-")}</td>`);
            } else {
              _push(`<!---->`);
            }
            if (_ctx.isFieldActive("common_count")) {
              _push(`<td class="text-center">${ssrInterpolate(item.common_count || "-")}</td>`);
            } else {
              _push(`<!---->`);
            }
            if (_ctx.isFieldActive("home_town")) {
              _push(`<td class="text-center">${ssrInterpolate(item.home_town || "-")}</td>`);
            } else {
              _push(`<!---->`);
            }
            if (_ctx.isFieldActive("last_seen")) {
              _push(`<td class="text-center">${ssrInterpolate(item.last_seen || "-")}</td>`);
            } else {
              _push(`<!---->`);
            }
            if (_ctx.isFieldActive("is_profile_closed")) {
              _push(`<td class="text-center">${ssrInterpolate(item.is_profile_closed ? "Закрытый" : "Открытый")}</td>`);
            } else {
              _push(`<!---->`);
            }
            if (_ctx.isFieldActive("is_messages_closed")) {
              _push(`<td class="text-center">${ssrInterpolate(item.is_messages_closed ? "Закрытые" : "Открытые")}</td>`);
            } else {
              _push(`<!---->`);
            }
            if (_ctx.isFieldActive("deactivated")) {
              _push(`<td class="text-center">${ssrInterpolate(item.deactivated || "Активна")}</td>`);
            } else {
              _push(`<!---->`);
            }
            if (_ctx.isFieldActive("updated_at")) {
              _push(`<td class="text-center">${ssrInterpolate(item.updated_at || "-")}</td>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</tr>`);
          });
          _push(`<!--]--></tbody></table>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.items.length === 0) {
        _push(`<div class="alert alert-success" role="alert"><h4 class="alert-heading">Клиенты</h4><p>К сожалению, раздел клиентов пуст. Вы еще не добавили ни одного клиента, которых можно отобразить на этой странице.</p><hr><p class="mb-0">Воспользуйтесь формой выше и добавьте своего первого клиента</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.items.length > 0) {
        _push(`<div class="row mb-3"><div class="col-12">`);
        if (_ctx.paginate_object) {
          _push(ssrRenderComponent(Pagination, {
            onPagination_page: _ctx.loadPersons,
            pagination: _ctx.paginate_object
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Persons/PersonTable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
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
    };
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
          requisites: this.item.requisites || []
        };
      });
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
        requisites: []
      };
      this.form = fields;
      this.$emit("callback");
    },
    submit() {
      let data = new FormData();
      Object.keys(this.form).forEach((key) => {
        const item = this.form[key] || "";
        if (typeof item === "object")
          data.append(key, JSON.stringify(item));
        else
          data.append(key, item);
      });
      this.$store.dispatch("storeClient", {
        clientForm: data
      }).then((response) => {
        this.$emit("callback");
        this.resetForm();
      }).catch((error) => {
      });
    }
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Persons/PersonForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main$1 as _
};
