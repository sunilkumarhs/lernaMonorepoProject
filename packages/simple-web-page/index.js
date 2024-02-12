import { createApp, h } from "ui-library";

const appContainer = document.getElementById("container");

const template = (state, handleClick) => {
  return h(
    "div",
    {
      style: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "1px solid #bada55",
        backgroundColor: "rgba(158, 170, 151, 0.7)",
        fontWeight: "bold",
        margin: "25px 100px",
      },
    },
    [
      h(
        "h1",
        { style: { color: "rgba(54, 96, 116, 1)", fontSize: "50px" } },
        state.count
      ),
      h(
        "button",
        {
          on: { click: handleClick },
          style: {
            color: "rgba(54, 202, 170, 1)",
            fontSize: "30px",
            margin: "20px",
          },
        },
        "Add"
      ),
    ]
  );
};

createApp(appContainer, template);
