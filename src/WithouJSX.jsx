import { createElement } from "react";

function WithouJSX() {
    return createElement(
        'div',
        { id: "rootDiv" },
        createElement("h1", { className: 'h1tag' }, "Heading Without JSX Component")
    );
}

export default WithouJSX;
