import { useSSRContext, unref, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, withDirectives, vModelText, Fragment, renderList } from "vue";
import { ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$3 } from "./AuthenticatedLayout-B1xft-Vz.js";
import { Head } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { P as Pagination } from "./Pagination-2FDkcWjj.js";
import { mapGetters } from "vuex";
import "./ApplicationLogo-B9dF0F9q.js";
const _sfc_main$2 = {
  data() {
    return {
      form: {
        group: null,
        max_post_count: 30
      }
    };
  },
  computed: {
    user() {
      return window.user;
    }
  },
  watch: {
    "form.group": {
      handler: function(newValue) {
        if (this.form.group.indexOf("http") !== -1) {
          let lastIndex = this.form.group.lastIndexOf("/") + 1;
          this.form.group = this.form.group.substring(lastIndex);
        }
      },
      deep: true
    }
  },
  methods: {
    submit() {
      this.$store.dispatch("addWork", this.form).then((resp) => {
        const customEvent = new CustomEvent("jobs-reload-event");
        document.dispatchEvent(customEvent);
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><form class="mb-2"><div class="form-floating mb-3"><input type="text" class="form-control"${ssrRenderAttr("value", $data.form.group)} id="floatingInput" placeholder="name@example.com" required><label for="floatingInput">Группа</label></div><div class="alert alert-info rounded-0"> Количество постов, которые можно охватить. Чем больше глубина тем дольше время ожидания обработки. Рекомендуемое значение от 30 до 100 в зависимости от числа подписчиков в группе. Чем больше подписчиков тем ниже должна быть глубина обработки. </div><div class="form-floating mb-3"><input type="number" class="form-control"${ssrRenderAttr("value", $data.form.max_post_count)} max="100" id="floatingInput" placeholder="name@example.com" required><label for="floatingInput">Глубина обработки страницы</label></div>`);
  if (!$options.user.is_active_token) {
    _push(`<div class="alert alert-light my-2"> Ваш тоукен недействительный! Обновите его! </div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="d-flex w-100 justify-center"><button${ssrIncludeBooleanAttr(!$options.user.is_active_token) ? " disabled" : ""} class="btn btn-primary rounded-0">Добавить задачу </button></div></form><div class="d-flex w-100 justify-center mb-2">`);
  if (_ctx.link) {
    _push(`<a class="btn btn-success rounded-0"${ssrRenderAttr("href", _ctx.link)}>Запустить процесс</a>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Persons/RequestVKForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const RequestVKForm = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const __default__$1 = {
  data() {
    return {
      current_page: 0,
      jobs: [],
      pagination: null
    };
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      "getJobs",
      "getJobsPaginateObject"
      // ...
    ])
  },
  mounted() {
    this.loadJobs();
    document.addEventListener("jobs-reload-event", (event) => {
      this.loadJobs();
    });
  },
  methods: {
    removeJob(item) {
      this.$store.dispatch("removeJob", {
        id: item.id
      }).then((resp) => {
        this.loadJobs();
      });
    },
    loadJobs(page = 0) {
      this.current_page = page;
      this.$store.dispatch("loadJobs", {
        page: this.current_page
      }).then((resp) => {
        this.jobs = this.getJobs;
        this.pagination = this.getJobsPaginateObject;
      });
    }
  }
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__$1, {
  __name: "JobsTable",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (_ctx.jobs.length > 0) {
        _push(`<div class="row"><div class="col-12"><table class="table"><thead><tr><th scope="col">#</th><th scope="col">Группа</th><th scope="col">Максимальный охват</th><th scope="col">Собрано пользователей</th><th scope="col">Статус</th><th scope="col">Дата добавления</th><th scope="col">Действие</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(_ctx.jobs, (item, index) => {
          _push(`<tr><th scope="row">${ssrInterpolate(index + 1)}</th><td>${ssrInterpolate(item.group)}</td><td>${ssrInterpolate(item.max_post_count)}</td><td>${ssrInterpolate(item.result_count)}</td><td>`);
          if (item.completed_at == null) {
            _push(`<span>В обработке</span>`);
          } else {
            _push(`<span>Завершено</span>`);
          }
          _push(`</td><td>${ssrInterpolate(item.created_at)}</td><td><button class="btn btn-danger">Удалить</button></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div>`);
      } else {
        _push(`<div class="alert alert-light"> Вы еще не добавили задачи в очередь! </div>`);
      }
      if (_ctx.jobs.length > 0) {
        _push(`<div class="row mb-3"><div class="col-12">`);
        if (_ctx.pagination) {
          _push(ssrRenderComponent(Pagination, {
            onPagination_page: _ctx.loadJobs,
            pagination: _ctx.pagination
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Persons/JobsTable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __default__ = {
  data() {
    return {
      link: null,
      company: null,
      messages: []
    };
  },
  mounted() {
    this.requestToken();
    this.company = this.user.company || null;
    let channel = pusher.subscribe("my-channel");
    channel.bind("my-event", (data) => {
      if (data.userId === this.user.id) {
        this.messages.push(data);
        this.$notify({
          title: "Внимание!",
          text: "Ваше задание #" + data.jobId + " успешно выполнено!",
          type: "success"
        });
      }
    });
  },
  computed: {
    logo() {
      return window.logo;
    },
    user() {
      return window.user;
    }
  },
  methods: {
    fillVK() {
      this.$store.dispatch("fillVK").then((resp) => {
      });
    },
    storeCompany() {
      this.$store.dispatch("storeCompany", {
        company: this.company
      }).then((resp) => {
        window.location.reload();
      });
    },
    requestToken() {
      this.$store.dispatch("requestVKToken", this.form).then((resp) => {
        this.link = resp;
      });
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Панель управления" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}>Панель управления</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, "Панель управления")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="row p-3"${_scopeId}><div class="col-4"${_scopeId}><div class="card rounded-0"${_scopeId}><div class="card-body"${_scopeId}><h6 class="my-2 fw-bold"${_scopeId}>Профиль пользователя</h6>`);
            if (_ctx.user) {
              _push2(`<ul class="list-group rounded-0"${_scopeId}><li class="list-group-item"${_scopeId}>${ssrInterpolate(_ctx.user.name || "Без имени")}</li><li class="list-group-item"${_scopeId}>${ssrInterpolate(_ctx.user.email || "Без почты")}</li><li class="list-group-item"${_scopeId}>`);
              if (_ctx.user.vk_access_token != null && _ctx.user.is_active_token) {
                _push2(`<p${_scopeId}>Тоукен успешно установлен</p>`);
              } else {
                _push2(`<p${_scopeId}>Тоукен не задан</p>`);
              }
              _push2(`</li><li class="list-group-item"${_scopeId}>`);
              if (_ctx.user.vk_token_expired_at != null) {
                _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.user.vk_token_expired_at)}</p>`);
              } else {
                _push2(`<p${_scopeId}>Тоукен не задан</p>`);
              }
              _push2(`</li><li class="list-group-item"${_scopeId}><h6 class="my-2"${_scopeId}>Ключ компании</h6>`);
              if (!_ctx.company || _ctx.company.length < 6) {
                _push2(`<div class="alert alert-info rounded-0"${_scopeId}> Внимание! Вы должны указать текстовый ключ вашей компании (команды). Это может быть или специально сгенерированный ключ или произвольный ключ длиной от 6 (сейчас ${ssrInterpolate((_ctx.company || "").length)}) символов. </div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="input-group"${_scopeId}><div class="form-floating"${_scopeId}><input type="text" minlength="6"${ssrRenderAttr("value", _ctx.company)} class="form-control"${_scopeId}><label for=""${_scopeId}>Ключ компании</label></div>`);
              if (_ctx.user.company) {
                _push2(`<span class="input-group-text rounded-0 bg-primary border-black"${_scopeId}><button class="btn text-white"${_scopeId}><i class="bi bi-arrow-repeat"${_scopeId}></i></button></span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if (!_ctx.user.company) {
                _push2(`<button${ssrIncludeBooleanAttr(!_ctx.company || (_ctx.company || "").length < 6) ? " disabled" : ""} class="btn btn-primary rounded-0 p-3 my-2 w-100"${_scopeId}>Сохранить</button>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</li></ul>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.link && _ctx.user.company) {
              _push2(`<a class="btn btn-success mt-2 w-100 rounded-0 p-3"${ssrRenderAttr("href", _ctx.link)}${_scopeId}>Получить токен</a>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<hr class="my-2"${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.messages, (message) => {
              _push2(`<div class="alert alert-success mb-2 rounded-0"${_scopeId}> Собраны данные по группе ${ssrInterpolate(message.group)} (#${ssrInterpolate(message.jobId)}) </div>`);
            });
            _push2(`<!--]--></div></div></div><div class="col-8"${_scopeId}>`);
            _push2(ssrRenderComponent(RequestVKForm, null, null, _parent2, _scopeId));
            _push2(`</div></div><div class="row p-3"${_scopeId}><div class="col-12"${_scopeId}><h6 class="my-2 fw-bold"${_scopeId}>Задачи в очереди</h6>`);
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(`</div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white overflow-hidden shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "row p-3" }, [
                      createVNode("div", { class: "col-4" }, [
                        createVNode("div", { class: "card rounded-0" }, [
                          createVNode("div", { class: "card-body" }, [
                            createVNode("h6", { class: "my-2 fw-bold" }, "Профиль пользователя"),
                            _ctx.user ? (openBlock(), createBlock("ul", {
                              key: 0,
                              class: "list-group rounded-0"
                            }, [
                              createVNode("li", { class: "list-group-item" }, toDisplayString(_ctx.user.name || "Без имени"), 1),
                              createVNode("li", { class: "list-group-item" }, toDisplayString(_ctx.user.email || "Без почты"), 1),
                              createVNode("li", { class: "list-group-item" }, [
                                _ctx.user.vk_access_token != null && _ctx.user.is_active_token ? (openBlock(), createBlock("p", { key: 0 }, "Тоукен успешно установлен")) : (openBlock(), createBlock("p", { key: 1 }, "Тоукен не задан"))
                              ]),
                              createVNode("li", { class: "list-group-item" }, [
                                _ctx.user.vk_token_expired_at != null ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(_ctx.user.vk_token_expired_at), 1)) : (openBlock(), createBlock("p", { key: 1 }, "Тоукен не задан"))
                              ]),
                              createVNode("li", { class: "list-group-item" }, [
                                createVNode("h6", { class: "my-2" }, "Ключ компании"),
                                !_ctx.company || _ctx.company.length < 6 ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "alert alert-info rounded-0"
                                }, " Внимание! Вы должны указать текстовый ключ вашей компании (команды). Это может быть или специально сгенерированный ключ или произвольный ключ длиной от 6 (сейчас " + toDisplayString((_ctx.company || "").length) + ") символов. ", 1)) : createCommentVNode("", true),
                                createVNode("div", { class: "input-group" }, [
                                  createVNode("div", { class: "form-floating" }, [
                                    withDirectives(createVNode("input", {
                                      type: "text",
                                      minlength: "6",
                                      "onUpdate:modelValue": ($event) => _ctx.company = $event,
                                      class: "form-control"
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelText, _ctx.company]
                                    ]),
                                    createVNode("label", { for: "" }, "Ключ компании")
                                  ]),
                                  _ctx.user.company ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    onClick: _ctx.storeCompany,
                                    class: "input-group-text rounded-0 bg-primary border-black"
                                  }, [
                                    createVNode("button", { class: "btn text-white" }, [
                                      createVNode("i", { class: "bi bi-arrow-repeat" })
                                    ])
                                  ], 8, ["onClick"])) : createCommentVNode("", true)
                                ]),
                                !_ctx.user.company ? (openBlock(), createBlock("button", {
                                  key: 1,
                                  onClick: _ctx.storeCompany,
                                  disabled: !_ctx.company || (_ctx.company || "").length < 6,
                                  class: "btn btn-primary rounded-0 p-3 my-2 w-100"
                                }, "Сохранить", 8, ["onClick", "disabled"])) : createCommentVNode("", true)
                              ])
                            ])) : createCommentVNode("", true),
                            _ctx.link && _ctx.user.company ? (openBlock(), createBlock("a", {
                              key: 1,
                              class: "btn btn-success mt-2 w-100 rounded-0 p-3",
                              href: _ctx.link
                            }, "Получить токен", 8, ["href"])) : createCommentVNode("", true),
                            createVNode("hr", { class: "my-2" }),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.messages, (message) => {
                              return openBlock(), createBlock("div", { class: "alert alert-success mb-2 rounded-0" }, " Собраны данные по группе " + toDisplayString(message.group) + " (#" + toDisplayString(message.jobId) + ") ", 1);
                            }), 256))
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-8" }, [
                        createVNode(RequestVKForm)
                      ])
                    ]),
                    createVNode("div", { class: "row p-3" }, [
                      createVNode("div", { class: "col-12" }, [
                        createVNode("h6", { class: "my-2 fw-bold" }, "Задачи в очереди"),
                        createVNode(_sfc_main$1)
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
