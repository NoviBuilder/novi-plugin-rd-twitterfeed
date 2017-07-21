const React = novi.react.React;
import Trigger from "./editor/Trigger";
import Body from "./editor/Body";
const Icons = novi.ui.icons;

const EditorItem = {
    trigger: <Trigger/>,
    tooltip: "Change twitter user name",
    header: [Icons.ICON_TWITTER, <span>RD Twitter Settings</span>],
    body: [<Body/>],
    closeIcon: "submit",
    onSubmit: onSubmitAction,
    width: 360,
    height: 94,
    title: "Twitter settings"
};

export default EditorItem;

function onSubmitAction(headerStates, bodyStates) {
    let state = bodyStates[0];
    if( state.initUserNameValue === state.userName ) return;
    novi.element.setAttribute(state.element, "data-twitter-username", state.userName);
    novi.page.forceUpdate();
}