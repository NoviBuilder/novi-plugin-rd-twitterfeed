const React = novi.react.React;
import TwitterEditor from "./TwitterEditor";
import TwitterSettings from "./TwitterSettings";
import * as ExcerptFunction from "./ExcerptFunction";

const Plugin = {
    name: "novi-plugin-rd-twitterfeed",
    title: "Novi RD Twitter Feed",
    description: "Novi RD Twitter Feed description",
    version: "1.0.1",
    dependencies: {
        "plugin": "1.0.0"
    },
    defaults: {
        querySelector: ".twitter"
    },
    ui: {
        editor: [TwitterEditor],
        settings: <TwitterSettings />,
    },
    excerpt : ExcerptFunction.validTwitterElement
};

novi.plugins.register(Plugin);