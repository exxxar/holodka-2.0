import { unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-B1xft-Vz.js";
import "./PersonForm-B5STGieO.js";
import { Head } from "@inertiajs/vue3";
import { Chart, Grid, Line, Bar, Tooltip } from "vue3-charts";
import "./ApplicationLogo-B9dF0F9q.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./Pagination-DOYFc-0c.js";
import "vuex";
const __default__ = {
  components: { Chart, Grid, Line, Bar, Tooltip },
  data() {
    return {
      loaded: true,
      sort: {
        direction: "desc",
        field: "name"
      },
      tooltipConfig: {
        checked: { label: "Взяты в работу", color: "#ffe775" },
        new: { label: "Новые", color: "#54a375" },
        in_process: { label: "В процесс", color: "#0ea9cb" },
        not_ready: { label: "Не готовы  думают", color: "#d2ab65" },
        decline: { label: "Отказ", color: "#ff0348" },
        success: { label: "Успех", color: "#00ff38" }
      },
      chart: [],
      jobs: [],
      direction: "vertical",
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
          type: "band"
        },
        secondary: {
          domain: ["dataMin", "dataMax + 100"],
          type: "linear",
          ticks: 8
        }
      }
    };
  },
  mounted() {
    this.loadStatistic();
  },
  methods: {
    sortField(field) {
      if (field === this.sort.field)
        this.sort.direction = this.sort.direction === "desc" ? "asc" : "desc";
      this.sort.field = field;
      this.loadStatistic();
    },
    loadStatistic() {
      this.loaded = false;
      this.$store.dispatch("loadStatistic", {
        dataObject: {
          sort_field: this.sort.field,
          sort_direction: this.sort.direction
        }
      }).then((resp) => {
        this.chart = resp.persons || [];
        this.jobs = resp.jobs || [];
        this.loaded = true;
      });
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Statistic",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Статистика" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}>Статистика</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, "Статистика")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 text-gray-900 d-flex justify-center flex-wrap"${_scopeId}>`);
            if (_ctx.chart.length > 0) {
              _push2(`<!--[--><h3 class="font-semibold text-xl text-gray-800 leading-tight my-3"${_scopeId}>Объем работы с людьми</h3><table class="w-full border border-gray-300 text-sm"${_scopeId}><thead class="bg-gray-100"${_scopeId}><tr${_scopeId}><th class="border px-2 py-1 text-center"${_scopeId}>Пользователь </th><th class="border px-2 py-1 text-center"${_scopeId}>Проверено </th><th class="border px-2 py-1 text-center"${_scopeId}>Новые </th><th class="border px-2 py-1 text-center"${_scopeId}>В процессе </th><th class="border px-2 py-1 text-center"${_scopeId}>Не готовы </th><th class="border px-2 py-1 text-center"${_scopeId}>Отклонено </th><th class="border px-2 py-1 text-center"${_scopeId}>Успех </th></tr></thead><tbody${_scopeId}><!--[-->`);
              ssrRenderList(_ctx.chart, (row, idx) => {
                _push2(`<tr class="hover:bg-gray-50"${_scopeId}><td class="border px-2 py-1"${_scopeId}>${ssrInterpolate(row.name)}</td><td class="border px-2 py-1 text-center"${_scopeId}>${ssrInterpolate(row.checked)}</td><td class="border px-2 py-1 text-center"${_scopeId}>${ssrInterpolate(row.new)}</td><td class="border px-2 py-1 text-center"${_scopeId}>${ssrInterpolate(row.in_process)}</td><td class="border px-2 py-1 text-center"${_scopeId}>${ssrInterpolate(row.not_ready)}</td><td class="border px-2 py-1 text-center"${_scopeId}>${ssrInterpolate(row.decline)}</td><td class="border px-2 py-1 text-center"${_scopeId}>${ssrInterpolate(row.success)}</td></tr>`);
              });
              _push2(`<!--]--></tbody></table><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.jobs.length > 0) {
              _push2(`<!--[--><h3 class="font-semibold text-xl text-gray-800 leading-tight my-3"${_scopeId}>Объем загрузки задач</h3><table class="w-full border border-gray-300 text-sm"${_scopeId}><thead class="bg-gray-100"${_scopeId}><tr${_scopeId}><th class="border px-2 py-1 text-center cursor-pointer"${_scopeId}>Пользователь </th><th class="border px-2 py-1 text-center cursor-pointer"${_scopeId}>Новые </th><th class="border px-2 py-1 text-center cursor-pointer"${_scopeId}>В процессе </th><th class="border px-2 py-1 text-center cursor-pointer"${_scopeId}>Готовы </th><th class="border px-2 py-1 text-center cursor-pointer"${_scopeId}>Отклонено </th><th class="border px-2 py-1 text-center cursor-pointer"${_scopeId}>Собрано </th></tr></thead><tbody${_scopeId}><!--[-->`);
              ssrRenderList(_ctx.jobs, (row, idx) => {
                _push2(`<tr class="hover:bg-gray-50"${_scopeId}><td class="border px-2 py-1"${_scopeId}>${ssrInterpolate(row.name)}</td><td class="border px-2 py-1 text-center"${_scopeId}>${ssrInterpolate(row.job_new)}</td><td class="border px-2 py-1 text-center"${_scopeId}>${ssrInterpolate(row.job_in_process)}</td><td class="border px-2 py-1 text-center"${_scopeId}>${ssrInterpolate(row.job_completed)}</td><td class="border px-2 py-1 text-center"${_scopeId}>${ssrInterpolate(row.job_error)}</td><td class="border px-2 py-1 text-center"${_scopeId}>${ssrInterpolate(row.summary_persons)}</td></tr>`);
              });
              _push2(`<!--]--></tbody></table><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.jobs.length === 0 || _ctx.chart.length === 0) {
              _push2(`<!--[--><div class="d-flex justify-content-center align-items-center"${_scopeId}><div class="spinner-border" role="status"${_scopeId}><span class="visually-hidden"${_scopeId}>Loading...</span></div></div><p class="my-3 text-center fw-bold"${_scopeId}> Подготавливаем данные... Это займет какое-то время </p><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white overflow-hidden shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 text-gray-900 d-flex justify-center flex-wrap" }, [
                      _ctx.chart.length > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createVNode("h3", { class: "font-semibold text-xl text-gray-800 leading-tight my-3" }, "Объем работы с людьми"),
                        createVNode("table", { class: "w-full border border-gray-300 text-sm" }, [
                          createVNode("thead", { class: "bg-gray-100" }, [
                            createVNode("tr", null, [
                              createVNode("th", {
                                onClick: ($event) => _ctx.sortField("name"),
                                class: "border px-2 py-1 text-center"
                              }, "Пользователь ", 8, ["onClick"]),
                              createVNode("th", {
                                onClick: ($event) => _ctx.sortField("persons_checked"),
                                class: "border px-2 py-1 text-center"
                              }, "Проверено ", 8, ["onClick"]),
                              createVNode("th", {
                                onClick: ($event) => _ctx.sortField("persons_new"),
                                class: "border px-2 py-1 text-center"
                              }, "Новые ", 8, ["onClick"]),
                              createVNode("th", {
                                onClick: ($event) => _ctx.sortField("persons_in_process"),
                                class: "border px-2 py-1 text-center"
                              }, "В процессе ", 8, ["onClick"]),
                              createVNode("th", {
                                onClick: ($event) => _ctx.sortField("persons_not_ready"),
                                class: "border px-2 py-1 text-center"
                              }, "Не готовы ", 8, ["onClick"]),
                              createVNode("th", {
                                onClick: ($event) => _ctx.sortField("persons_decline"),
                                class: "border px-2 py-1 text-center"
                              }, "Отклонено ", 8, ["onClick"]),
                              createVNode("th", {
                                onClick: ($event) => _ctx.sortField("persons_success"),
                                class: "border px-2 py-1 text-center"
                              }, "Успех ", 8, ["onClick"])
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.chart, (row, idx) => {
                              return openBlock(), createBlock("tr", {
                                key: idx,
                                class: "hover:bg-gray-50"
                              }, [
                                createVNode("td", { class: "border px-2 py-1" }, toDisplayString(row.name), 1),
                                createVNode("td", { class: "border px-2 py-1 text-center" }, toDisplayString(row.checked), 1),
                                createVNode("td", { class: "border px-2 py-1 text-center" }, toDisplayString(row.new), 1),
                                createVNode("td", { class: "border px-2 py-1 text-center" }, toDisplayString(row.in_process), 1),
                                createVNode("td", { class: "border px-2 py-1 text-center" }, toDisplayString(row.not_ready), 1),
                                createVNode("td", { class: "border px-2 py-1 text-center" }, toDisplayString(row.decline), 1),
                                createVNode("td", { class: "border px-2 py-1 text-center" }, toDisplayString(row.success), 1)
                              ]);
                            }), 128))
                          ])
                        ])
                      ], 64)) : createCommentVNode("", true),
                      _ctx.jobs.length > 0 ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                        createVNode("h3", { class: "font-semibold text-xl text-gray-800 leading-tight my-3" }, "Объем загрузки задач"),
                        createVNode("table", { class: "w-full border border-gray-300 text-sm" }, [
                          createVNode("thead", { class: "bg-gray-100" }, [
                            createVNode("tr", null, [
                              createVNode("th", {
                                onClick: ($event) => _ctx.sortField("name"),
                                class: "border px-2 py-1 text-center cursor-pointer"
                              }, "Пользователь ", 8, ["onClick"]),
                              createVNode("th", {
                                onClick: ($event) => _ctx.sortField("jobs_new"),
                                class: "border px-2 py-1 text-center cursor-pointer"
                              }, "Новые ", 8, ["onClick"]),
                              createVNode("th", {
                                onClick: ($event) => _ctx.sortField("jobs_in_process"),
                                class: "border px-2 py-1 text-center cursor-pointer"
                              }, "В процессе ", 8, ["onClick"]),
                              createVNode("th", {
                                onClick: ($event) => _ctx.sortField("jobs_completed"),
                                class: "border px-2 py-1 text-center cursor-pointer"
                              }, "Готовы ", 8, ["onClick"]),
                              createVNode("th", {
                                onClick: ($event) => _ctx.sortField("jobs_error"),
                                class: "border px-2 py-1 text-center cursor-pointer"
                              }, "Отклонено ", 8, ["onClick"]),
                              createVNode("th", {
                                onClick: ($event) => _ctx.sortField("persons_summary"),
                                class: "border px-2 py-1 text-center cursor-pointer"
                              }, "Собрано ", 8, ["onClick"])
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.jobs, (row, idx) => {
                              return openBlock(), createBlock("tr", {
                                key: idx,
                                class: "hover:bg-gray-50"
                              }, [
                                createVNode("td", { class: "border px-2 py-1" }, toDisplayString(row.name), 1),
                                createVNode("td", { class: "border px-2 py-1 text-center" }, toDisplayString(row.job_new), 1),
                                createVNode("td", { class: "border px-2 py-1 text-center" }, toDisplayString(row.job_in_process), 1),
                                createVNode("td", { class: "border px-2 py-1 text-center" }, toDisplayString(row.job_completed), 1),
                                createVNode("td", { class: "border px-2 py-1 text-center" }, toDisplayString(row.job_error), 1),
                                createVNode("td", { class: "border px-2 py-1 text-center" }, toDisplayString(row.summary_persons), 1)
                              ]);
                            }), 128))
                          ])
                        ])
                      ], 64)) : createCommentVNode("", true),
                      _ctx.jobs.length === 0 || _ctx.chart.length === 0 ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                        createVNode("div", { class: "d-flex justify-content-center align-items-center" }, [
                          createVNode("div", {
                            class: "spinner-border",
                            role: "status"
                          }, [
                            createVNode("span", { class: "visually-hidden" }, "Loading...")
                          ])
                        ]),
                        createVNode("p", { class: "my-3 text-center fw-bold" }, " Подготавливаем данные... Это займет какое-то время ")
                      ], 64)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Statistic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
