import { unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/vue3";
const __default__ = {
  computed: {
    user() {
      return window.user;
    },
    logo() {
      return window.logo;
    }
  },
  mounted() {
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Welcome",
  __ssrInlineRender: true,
  props: {
    canLogin: {
      type: Boolean
    },
    canRegister: {
      type: Boolean
    },
    laravelVersion: {
      type: String,
      required: true
    },
    phpVersion: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Welcome" }, null, _parent));
      _push(`<div class="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">`);
      if (__props.canLogin) {
        _push(`<div class="sm:fixed sm:top-0 sm:right-0 p-6 text-end">`);
        if (_ctx.$page.props.auth.user) {
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("dashboard"),
            class: "font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Холодка 2.0 `);
              } else {
                return [
                  createTextVNode("Холодка 2.0 ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!--[--><!--]-->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="max-w-7xl mx-auto p-6 lg:p-8"><div class="flex justify-center flex-wrap flex-col"><img${ssrRenderAttr("src", "/" + _ctx.logo)} alt="" style="${ssrRenderStyle({ "width": "200px" })}"><a${ssrRenderAttr("href", _ctx.route("vk.login-url"))} style="${ssrRenderStyle({ "background-color": "darkred" })}" class="btn text-white shadow-xl rounded-0 px-5 py-3 my-5">Войти в систему</a></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
