import React from "react";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      text: "Done",
      selectedId: null,
      edit: {
        text: "Edit",
      },
      class: {
        li: "",
        input: "hidden",
      },
      work: this.props.work.name,
    };
  }

  EditText() {
    let id = this.props.work.id;
    let arr = JSON.parse(localStorage.getItem("todolist"));
    let index = arr.findIndex((x) => x.id === id);
    this.setState({
      work: arr[index].name,
    });
    if (this.state.edit.text === "Edit") {
      this.setState({
        edit: { text: "Save" },
        class: {
          li: " hidden ",
          input: "",
        },
        // work: this.props.work.name,
      });
    } else {
      this.setState({
        edit: { text: "Edit" },
        class: {
          li: "",
          input: " hidden ",
        },
      });
      if (this.state.work.trim() !== "") {
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
          <li
            className={
              `${this.props.work.status ? "line-through" : ""}` +
              this.state.class.li
            }
          >
            {this.props.work.name}
          </li>
          <input
            className={this.state.class.input}
            type={"text"}
            name={"work"}
            defaultValue={this.state.work}
            onChange={(event) => this.onChangeInput(event)}
            required={true}
          />
        </div>

        <div className={"flex"}>
          <button
            type={"button"}
            className={"border-2"}
            onClick={() => this.props.Done()}
          >
            {this.state.text}
          </button>

          {/*Edit*/}
          {/*<button*/}
          {/*  type={"button"}*/}
          {/*  className={"border-2"}*/}
          {/*  onClick={() => this.EditText()}*/}
          {/*>*/}
          {/*  {this.state.edit.text}*/}
          {/*</button>*/}

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
