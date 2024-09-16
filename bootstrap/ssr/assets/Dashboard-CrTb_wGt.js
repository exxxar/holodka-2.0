import { useSSRContext, unref, withCtx, createVNode } from "vue";
import { ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./AuthenticatedLayout-D3cydjq3.js";
import { Head } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ApplicationLogo-Dsp8Rdoh.js";
const _sfc_main$1 = {
  data() {
    return {
      link: null,
      form: {
        group: null,
        max_post_count: 30
      }
    };
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
      this.$store.dispatch("requestVKLink", this.form).then((resp) => {
        this.link = resp;
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><form class="mb-2"><div class="form-floating mb-3"><input type="text" class="form-control"${ssrRenderAttr("value", $data.form.group)} id="floatingInput" placeholder="name@example.com" required><label for="floatingInput">Группа</label></div><div class="alert alert-info rounded-0"> Количество постов, которые можно охватить. Чем больше глубина тем дольше время ожидания обработки. Рекомендуемое значение от 30 до 100 в зависимости от числа подписчиков в группе. Чем больше подписчиков тем ниже должна быть глубина обработки. </div><div class="form-floating mb-3"><input type="number" class="form-control"${ssrRenderAttr("value", $data.form.max_post_count)} max="100" id="floatingInput" placeholder="name@example.com" required><label for="floatingInput">Глубина обработки страницы</label></div><div class="d-flex w-100 justify-center"><button class="btn btn-primary rounded-0">Получить ссылку авторизации</button></div></form><div class="d-flex w-100 justify-center mb-2">`);
  if ($data.link) {
    _push(`<a class="btn btn-success rounded-0"${ssrRenderAttr("href", $data.link)}>Запустить процесс</a>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Persons/RequestVKForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const RequestVKForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Панель управления" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, {
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
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="row p-3"${_scopeId}><div class="col-12"${_scopeId}>`);
            _push2(ssrRenderComponent(RequestVKForm, null, null, _parent2, _scopeId));
            _push2(`</div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white overflow-hidden shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "row p-3" }, [
                      createVNode("div", { class: "col-12" }, [
                        createVNode(RequestVKForm)
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
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
