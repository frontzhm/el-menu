import ElMenu from "./ElMenu.vue";
import ElMenuItem from "./ElMenuItem.vue";
import ElSubmenu from "./ElSubmenu";
// import ElMenuRecusion from "./ElMenuRecusion";
export default {
  props: {
    data: Array
  },
  render() {
    let renderChildren = data => {
      return data.map(child => {
        return child.children ? (
          <ElSubmenu>
            <div slot="title">{child.title}</div>
            {renderChildren(child.children)}
          </ElSubmenu>
        ) : (
          <ElMenuItem>{child.title}</ElMenuItem>
        );
      });
    };
    return <ElMenu>{renderChildren(this.data)}</ElMenu>;
  }
};
