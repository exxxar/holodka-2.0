import { resolveComponent, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-B1xft-Vz.js";
import "./PersonForm-DZ9cgiZX.js";
import { Head } from "@inertiajs/vue3";
import { Chart, Grid, Bar, Tooltip, Line } from "vue3-charts";
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
      const _component_Marker = resolveComponent("Marker");
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
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 text-gray-900 d-flex justify-center"${_scopeId}>`);
            if (_ctx.loaded) {
              _push2(ssrRenderComponent(unref(Chart), {
                size: { width: 1e3, height: 720 },
                data: _ctx.chart,
                margin: _ctx.margin,
                direction: _ctx.direction,
                axis: _ctx.axis
              }, {
                layers: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(Grid), { strokeDasharray: "2,2" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(Bar), {
                      dataKeys: ["name", "checked"],
                      barStyle: { fill: "#ffe775" }
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(Bar), {
                      dataKeys: ["name", "new"],
                      barStyle: { fill: "#54a375" }
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(Bar), {
                      dataKeys: ["name", "in_process"],
                      barStyle: { fill: "#0ea9cb" }
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(Bar), {
                      dataKeys: ["name", "not_ready"],
                      barStyle: { fill: "#d2ab65" }
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(Bar), {
                      dataKeys: ["name", "decline"],
                      barStyle: { fill: "#ff0348" }
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(Bar), {
                      dataKeys: ["name", "success"],
                      barStyle: { fill: "#00ff38" }
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_Marker, {
                      value: 1e3,
                      label: "Avg.",
                      color: "#e76f51",
                      strokeWidth: "2",
                      strokeDasharray: "6 6"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(Grid), { strokeDasharray: "2,2" }),
                      createVNode(unref(Bar), {
                        dataKeys: ["name", "checked"],
                        barStyle: { fill: "#ffe775" }
                      }),
                      createVNode(unref(Bar), {
                        dataKeys: ["name", "new"],
                        barStyle: { fill: "#54a375" }
                      }),
                      createVNode(unref(Bar), {
                        dataKeys: ["name", "in_process"],
                        barStyle: { fill: "#0ea9cb" }
                      }),
                      createVNode(unref(Bar), {
                        dataKeys: ["name", "not_ready"],
                        barStyle: { fill: "#d2ab65" }
                      }),
                      createVNode(unref(Bar), {
                        dataKeys: ["name", "decline"],
                        barStyle: { fill: "#ff0348" }
                      }),
                      createVNode(unref(Bar), {
                        dataKeys: ["name", "success"],
                        barStyle: { fill: "#00ff38" }
                      }),
                      createVNode(_component_Marker, {
                        value: 1e3,
                        label: "Avg.",
                        color: "#e76f51",
                        strokeWidth: "2",
                        strokeDasharray: "6 6"
                      })
                    ];
                  }
                }),
                widgets: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(Tooltip), {
                      borderColor: "#48CAE4",
                      config: _ctx.tooltipConfig
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(Tooltip), {
                        borderColor: "#48CAE4",
                        config: _ctx.tooltipConfig
                      }, null, 8, ["config"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white overflow-hidden shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 text-gray-900 d-flex justify-center" }, [
                      _ctx.loaded ? (openBlock(), createBlock(unref(Chart), {
                        key: 0,
                        size: { width: 1e3, height: 720 },
                        data: _ctx.chart,
                        margin: _ctx.margin,
                        direction: _ctx.direction,
                        axis: _ctx.axis
                      }, {
                        layers: withCtx(() => [
                          createVNode(unref(Grid), { strokeDasharray: "2,2" }),
                          createVNode(unref(Bar), {
                            dataKeys: ["name", "checked"],
                            barStyle: { fill: "#ffe775" }
                          }),
                          createVNode(unref(Bar), {
                            dataKeys: ["name", "new"],
                            barStyle: { fill: "#54a375" }
                          }),
                          createVNode(unref(Bar), {
                            dataKeys: ["name", "in_process"],
                            barStyle: { fill: "#0ea9cb" }
                          }),
                          createVNode(unref(Bar), {
                            dataKeys: ["name", "not_ready"],
                            barStyle: { fill: "#d2ab65" }
                          }),
                          createVNode(unref(Bar), {
                            dataKeys: ["name", "decline"],
                            barStyle: { fill: "#ff0348" }
                          }),
                          createVNode(unref(Bar), {
                            dataKeys: ["name", "success"],
                            barStyle: { fill: "#00ff38" }
                          }),
                          createVNode(_component_Marker, {
                            value: 1e3,
                            label: "Avg.",
                            color: "#e76f51",
                            strokeWidth: "2",
                            strokeDasharray: "6 6"
                          })
                        ]),
                        widgets: withCtx(() => [
                          createVNode(unref(Tooltip), {
                            borderColor: "#48CAE4",
                            config: _ctx.tooltipConfig
                          }, null, 8, ["config"])
                        ]),
                        _: 1
                      }, 8, ["data", "margin", "direction", "axis"])) : createCommentVNode("", true)
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
