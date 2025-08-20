import { unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-B1xft-Vz.js";
import "./PersonForm-DZ9cgiZX.js";
import { Head } from "@inertiajs/vue3";
import { Chart, Grid, Line, Bar, Tooltip } from "vue3-charts";
import "./ApplicationLogo-B9dF0F9q.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./Pagination-2FDkcWjj.js";
import "vuex";
const __default__ = {
  components: { Chart, Grid, Line, Bar, Tooltip },
  data() {
    return {
      loaded: true,
      tooltipConfig: {
        checked: { label: "Взяты в работу", color: "#ffe775" },
        new: { label: "Новые", color: "#54a375" },
        in_process: { label: "В процесс", color: "#0ea9cb" },
        not_ready: { label: "Не готовы  думают", color: "#d2ab65" },
        decline: { label: "Отказ", color: "#ff0348" },
        success: { label: "Успех", color: "#00ff38" }
      },
      chart: [
        { name: "Гукай А.", checked: 1e3, new: 500, in_process: 300, not_ready: 1235, decline: 1235, success: 1235 },
        { name: "Русина А.", checked: 2e3, new: 900, in_process: 400, not_ready: 1235, decline: 1235, success: 1235 },
        { name: "Иванов И.", checked: 400, new: 400, in_process: 500, not_ready: 1235, decline: 1235, success: 1235 },
        { name: "Петров А.", checked: 6e3, new: 1300, in_process: 700, not_ready: 1235, decline: 1235, success: 1235 },
        { name: "Семенов Е.", checked: 200, new: 100, in_process: 200, not_ready: 1235, decline: 1235, success: 1235 },
        { name: "Данилов Д.", checked: 600, new: 400, in_process: 300, not_ready: 1235, decline: 1235, success: 1235 },
        { name: "Кириченко В.", checked: 500, new: 90, in_process: 100, not_ready: 1235, decline: 1235, success: 1235 }
      ],
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
    loadStatistic() {
      this.loaded = false;
      this.$store.dispatch("loadStatistic").then((resp) => {
        this.chart = resp;
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
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 text-gray-900 d-flex justify-center"${_scopeId}><table class="w-full border border-gray-300 text-sm"${_scopeId}><thead class="bg-gray-100"${_scopeId}><tr${_scopeId}><th class="border px-2 py-1 text-center"${_scopeId}>Пользователь</th><th class="border px-2 py-1 text-center"${_scopeId}>Проверено</th><th class="border px-2 py-1 text-center"${_scopeId}>Новые</th><th class="border px-2 py-1 text-center"${_scopeId}>В процессе</th><th class="border px-2 py-1 text-center"${_scopeId}>Не готовы</th><th class="border px-2 py-1 text-center"${_scopeId}>Отклонено</th><th class="border px-2 py-1 text-center"${_scopeId}>Успех</th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.chart, (row, idx) => {
              _push2(`<tr class="hover:bg-gray-50"${_scopeId}><td class="border px-2 py-1"${_scopeId}>${ssrInterpolate(row.name)}</td><td class="border px-2 py-1 text-center"${_scopeId}>${ssrInterpolate(row.checked)}</td><td class="border px-2 py-1 text-center"${_scopeId}>${ssrInterpolate(row.new)}</td><td class="border px-2 py-1 text-center"${_scopeId}>${ssrInterpolate(row.in_process)}</td><td class="border px-2 py-1 text-center"${_scopeId}>${ssrInterpolate(row.not_ready)}</td><td class="border px-2 py-1 text-center"${_scopeId}>${ssrInterpolate(row.decline)}</td><td class="border px-2 py-1 text-center"${_scopeId}>${ssrInterpolate(row.success)}</td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white overflow-hidden shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 text-gray-900 d-flex justify-center" }, [
                      createVNode("table", { class: "w-full border border-gray-300 text-sm" }, [
                        createVNode("thead", { class: "bg-gray-100" }, [
                          createVNode("tr", null, [
                            createVNode("th", { class: "border px-2 py-1 text-center" }, "Пользователь"),
                            createVNode("th", { class: "border px-2 py-1 text-center" }, "Проверено"),
                            createVNode("th", { class: "border px-2 py-1 text-center" }, "Новые"),
                            createVNode("th", { class: "border px-2 py-1 text-center" }, "В процессе"),
                            createVNode("th", { class: "border px-2 py-1 text-center" }, "Не готовы"),
                            createVNode("th", { class: "border px-2 py-1 text-center" }, "Отклонено"),
                            createVNode("th", { class: "border px-2 py-1 text-center" }, "Успех")
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
