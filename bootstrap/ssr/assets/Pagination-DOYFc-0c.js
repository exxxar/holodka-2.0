import { useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
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
      if (!this.pagination.meta)
        return [];
      parseInt(this.pagination.meta.current_page);
      return this.pagination.meta.links;
    }
  },
  methods: {
    nextPage() {
      var _a;
      let page = ((_a = this.pagination.meta) == null ? void 0 : _a.current_page) || 0;
      this.currentPage = page + 1;
      this.$emit("pagination_page", page + 1);
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Pagination as P
};
