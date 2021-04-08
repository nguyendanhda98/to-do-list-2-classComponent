import React from "react";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      text: "Done",
      edit: {
        text: "Edit",
      },
      class: {
        li: "",
        input: "hidden",
      },
      work: "",
    };
  }

  Done() {
    if (this.state.status === "") {
      this.setState({
        status: " line-through ",
      });
      this.setState({
        text: "Undone",
      });
    } else {
      this.setState({
        status: "",
      });
      this.setState({
        text: "Done",
      });
    }
  }

  EditText() {
    if (this.state.edit.text === "Edit") {
      this.setState({
        edit: { text: "Save" },
        class: {
          li: "hidden",
          input: "",
        },
      });
    } else {
      this.setState({
        edit: { text: "Edit" },
        class: {
          li: "",
          input: "hidden",
        },
      });
      if (this.state.work !== "") {
        this.props.Edit(this.state.work);
      }
    }
  }

  onChangeInput(event) {
    const target = event.target;
    const value = target.value;
    this.setState({
      work: value,
    });
  }

  render() {
    return (
      <div className={"flex justify-between"}>
        <div className={"flex"}>
          <li className={this.state.status + this.state.class.li}>
            {this.props.work.name}
          </li>
          <input
            className={this.state.class.input}
            type={"text"}
            name={"work"}
            defaultValue={this.props.work.name}
            onChange={(event) => this.onChangeInput(event)}
            required={true}
          />
        </div>

        <div className={"flex"}>
          <button
            type={"button"}
            className={"border-2"}
            onClick={() => this.Done()}
          >
            {this.state.text}
          </button>
          <button
            type={"button"}
            className={"border-2"}
            onClick={() => this.EditText()}
          >
            {this.state.edit.text}
          </button>
          <button
            type={"button"}
            className={"border-2"}
            onClick={() => this.props.Delete()}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
export default Item;
