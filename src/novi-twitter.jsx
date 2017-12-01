const React = novi.react.React;
import TwitterEditor from "./TwitterEditor";
import TwitterSettings from "./TwitterSettings";
import * as ExcerptFunction from "./ExcerptFunction";
const Language = novi.language;
const Plugin = {
    name: "novi-plugin-rd-twitterfeed",
    title: "Novi RD Twitter Feed",
    description: "Novi RD Twitter Feed description",
    version: "1.0.2",
    dependencies: {
        "plugin": "1.0.0",
        novi: "0.8.6"
    },
    defaults: {
        querySelector: ".twitter"
    },
    ui: {
        editor: [TwitterEditor],
        settings: <TwitterSettings />,
    },
    excerpt : ExcerptFunction.validTwitterElement,
    onLanguageChange: onLanguageChange
};
function onLanguageChange(plugin){
    let messages = Language.getDataByKey("novi-plugin-rd-twitterfeed");
    plugin.ui.editor[0].title = messages.editor.title;
    plugin.ui.editor[0].tooltip = messages.editor.tooltip;
    plugin.ui.editor[0].header[1] = <span>{messages.editor.header}</span>;

    return plugin;
}

novi.plugins.register(Plugin);