import "vue";

import { storiesOf } from "@storybook/vue";

import MyButton from "../components/Button.vue";

storiesOf("MyButton", module).add("Button as a component", () => ({
  components: { MyButton },
  template: "<my-button></my-button>"
}));
