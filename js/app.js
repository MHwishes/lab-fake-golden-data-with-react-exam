var App = React.createClass({
    getInitialState: function () {
        return {
            elements: [],
            isEditor: true
        }
    },
    isChange: function () {
        this.setState({isEditor: !this.state.isEditor});
    },
    render: function () {
        const isEditor = this.state.isEditor;
        return (
            <div>
                <button onClick={this.isChange}>{isEditor ? 'preview' : 'editor'}</button>
                <div className={isEditor ? " " : "hidden"}>
                    <Editor onAdd={this.add} onDelete={this.delete} elements={this.state.elements}/>
                </div>
                <div className={isEditor ? "hidden " : ""}>
                    <Preview/>
                </div>
            </div>

        )
    }
});
var Editor = React.createClass({
    render: function () {
        return (
        <div>
            <Left/>
            <right onAdd={this.props.onAdd}/>
        </div>
           
        )
    }
});
var Left = React.createClass({
    render: function () {
        return (
        <div></div>

        )
    }
});


var Preview = React.createClass({
    render: function () {
        return (
        <div></div>
           
        )
    }
});
ReactDOM.render(<App/>, document.getElementById("content"))