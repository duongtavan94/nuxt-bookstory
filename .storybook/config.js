import { configure } from "@storybook/vue";

import "vue";

function loadStories() {
  // You can require as many stories as you need.
  require("../stories/Button");
  require("../stories/HelloWorld");
}

configure(loadStories, module);
