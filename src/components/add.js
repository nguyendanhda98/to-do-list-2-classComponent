import React from "react";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      work: { id: "", name: "" },
    };
  }
  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addItem(event) {
    event.preventDefault();
    if (this.state.work.name.trim() !== "") {
      let arr = [...this.props.works, this.state.work];
      this.props.setWorks(arr);
      localStorage.setItem("todolist", JSON.stringify(arr));
      this.setState({
        work: { id: "", name: "" },
      });
    } else {
      this.setState({
        work: { id: "", name: "" },
      });
    }
  }

  handleOnChange(event) {
    const target = event.target;
    const value = target.value;
    this.setState({
      work: {
        id: this.s4(),
        name: value,
        status: false,
      },
    });
  }

  render() {
    return (
      <div className={""}>
        <form onSubmit={(event) => this.addItem(event)}>
          <input
            className={"border-gray-100"}
            type={"text"}
            id={"add"}
            name={"work"}
            value={this.state.work.name}
            onChange={(event) => this.handleOnChange(event)}
            required={true}
          />
          <button className={"border-2"} type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}
export default Add;
