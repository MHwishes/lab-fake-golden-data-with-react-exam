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
    add: function (e) {
        const elements = this.state.elements;
        elements.push(e);
        this.setState(elements);

    }, delete: function (i) {
        const elements = this.state.elements;
        elements.splice(i, 1);
        this.setState(elements);

    },
    render: function () {
        const isEditor = this.state.isEditor;
        return (
            <div >
                <div className=" col-center-block">
                    <button className="btn btn-primary"
                            onClick={this.isChange}>{isEditor ? 'preview' : 'editor'}</button>
                </div>
                <br/>
                <div className={isEditor ? " " : "hidden"}>
                    <Editor onAdd={this.add} onDelete={this.delete} elements={this.state.elements}/>
                </div>
                <div className={isEditor ? "hidden " : ""}>
                    <Preview elements={this.state.elements}/>
                </div>
            </div>

        )
    }
});
var Editor = React.createClass({
    render: function () {
        return (
            <div>
                <div className="col-md-4  ">
                    <Left onDelete={this.props.onDelete} elements={this.props.elements}/>
                </div>
                <div className="col-md-4  col-md-offset-4 ">
                    <Right onAdd={this.props.onAdd}/>
                </div>
            </div>
        )
    }
});
var Left = React.createClass({
    delete: function (i) {
        this.props.onDelete(i);
    },
    render: function () {
        const elements = this.props.elements.map((e, i)=> {
            return <div key={i} className="input-group  inline">

                <input className="form-control" type={e}/>
                <span className="input-group-btn">
                    <button className="btn btn-default inline"
                            onClick={this.delete.bind(this.i)}>
                         <span className="glyphicon glyphicon-remove"/>
                    </button>
                </span>

            </div>
        });

        return (
            <div>{elements}</div>

        )
    }
});

var Right = React.createClass({
    add: function () {
        const e = $("input[name=input]:checked").val();
        this.props.onAdd(e);
    },
    render: function () {
        return (
            <div >
                <input type="radio" name="input" value="text"/>文本框
                <br/>
                <input type="radio" name="input" value="date"/>日期
                <br/>
                <button onClick={this.add} className="btn btn-primary">
                    <span className="glyphicon glyphicon-plus"/>
                </button>
            </div>

        )
    }
});
var Preview = React.createClass({
    render: function () {
        const elements = this.props.elements.map((e, i)=> {
            return <div className="inline" key={i}>
                <input className="form-control" type={e}/>
            </div>
        });
        return (
            <div>
                <div id="border" className="col-md-6 col-md-offset-3">
                    <div className=" col-center-block ">
                        <br/>
                        {elements}
                        <br/>

                    </div>
                </div>
                <br/>
                <div className=" col-center-block ">
                    <button className="btn btn-primary " id="my">submmit</button>
                </div>
            </div>

        )
    }
});
ReactDOM.render(<App/>, document.getElementById("content"));

