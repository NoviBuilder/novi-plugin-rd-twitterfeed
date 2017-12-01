const Input = novi.ui.input;
const React = novi.react.React;
const Component = novi.react.Component;
const Language = novi.language;
export default class Body extends Component{
    constructor(props){
        super(props);

        let userName = novi.element.getAttribute(props.element, 'data-twitter-username');

        this.state = {
            userName,
            initUserNameValue: userName,
            element: props.element
        };

        this._handleChange = this._handleChange.bind(this);
        this.messages = Language.getDataByKey("novi-plugin-rd-twitterfeed");
    }

    render(){
        return (
            <div className="twitter-plugin-wrap" style={{"padding": "0 12px", "display": "flex", "flexDirection": "column", "justifyContent": "center", "height": "100%", "color": "#6E778A"}}>
                <p className="novi-label" style={{"marginTop": "0"}}>
                    {this.messages.editor.body.userName}
                </p>
                <Input onChange={this._handleChange} value={this.state.userName}/>
            </div>

        )
    }

    _handleChange(e){
        let value = e.target.value;
        this.setState({
            userName : value
        });
    }
}