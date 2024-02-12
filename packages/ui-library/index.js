import { init } from "snabbdom/build/init";
import { h } from "snabbdom/build/h";
import { eventListenersModule } from "snabbdom/build/modules/eventlisteners";
import { styleModule } from "snabbdom/build/modules/style";

const patch = init([eventListenersModule, styleModule]);

let state = { count: 0 };
let updateCallback;
let newVNode;
export function createApp(container, template) {
  function updateState(newState) {
    state = { ...state, ...newState };
    updateCallback(state);
  }
  function handleClick() {
    updateState({ count: state.count + 1 });
  }

  function mount() {
    console.log("Component mounted");
  }

  function update() {
    console.log("State changed:", state);
  }

  function render() {
    newVNode = template(state, handleClick);
    patch(container, newVNode);
  }

  function reRender(state) {
    const newNode = template(state, handleClick);
    patch(newVNode, newNode);
  }

  updateCallback = (state) => {
    update();
    reRender(state);
  };

  mount();
  render();
}

export { h };
