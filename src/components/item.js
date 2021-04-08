import React from "react";

class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
status: "",
text:"Done"
        }
    }

    Done() {
        if(this.state.status === "") {
            this.setState({
                status: "line-through"
            });
            this.setState({
                text: "Undone"
            });
        } else{
            this.setState({
                status: ""
            });
            this.setState({
                text: "Done"
            });
        }
    }


    render() {
        return (
            <div className={"flex justify-between"}>
                <li className={this.state.status}>{this.props.work.name} </li>
                <div>
                    <button type={"button"} className={"border-2"} onClick={() => this.Done()}>{this.state.text}</button>
                    <button type={"button"} className={"border-2"} onClick={() => this.props.Delete()}>Delete</button>
                </div>
            </div>
        )
    }
}
export default Item;
