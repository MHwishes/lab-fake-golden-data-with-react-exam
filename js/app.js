var App = React.createClass({
    getInitialState: function () {
        return {
            elements: [],
            isEditor: true
        }
    },
    isChange: function () {
        this.setState({isEditor: !this.state.isEditor})
    },
    add:function (ele) {
        const elements=this.state.elements;
        elements.push(ele);
        this.setState(elements);
    },
    delete:function (i) {
        const elements=this.state.elements;
        elements.splice(i,1);
        this.setState(elements);
    },
    render: function () {
        const isEditor = this.state.isEditor;
        return (
            <div>
                <button onClick={this.isChange}>{isEditor ? "preview" : "editor"}</button>
                <div className={isEditor ? '' : "hidden"}>
                    <Editor onAdd={this.add} onDelete={this.delete} elements={this.state.elements}/>
                </div>
                <div className={isEditor ? 'hidden' : ""}>
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
            <Left  onDelete={this.props.onDelete} elements={this.props.elements}/>
            <Right  onAdd={this.props.onAdd}/>
        </div>
           
        )
    }
});
var Left = React.createClass({


    delete:function (i) {
        this.props.onDelete(i);

    },
    render: function () {
        const elements=this.props.elements.map((ele,i)=>{
            return<div>
                <input type={ele}/>
                <button onClick={this.delete.bind(this,i)}>X</button>
            </div>
        })
        return (
        <div>{elements}</div>

        )
    }
});
var Right = React.createClass({
    add:function () {
        const ele=$("input[name=input]:checked").val();
        this.props.onAdd(ele);
    },
    render: function () {
        return (
        <div>
            <input type="radio" name="input" value="text"/>文本框
            <input type="radio" name="input" value="date"/>日期
            <button onClick={this.add}>+</button>
        </div>

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

ReactDOM.render(<App/>, document.getElementById('content'))