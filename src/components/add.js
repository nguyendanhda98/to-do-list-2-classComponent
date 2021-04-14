import React from "react";
import axios from "axios";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      work: { name: "", status: false },
    };
  }

  addItem(event) {
    event.preventDefault();
    let work = this.state.work;
    if (this.state.work.name.trim() !== "") {
      axios
        .post("http://localhost:3030/tasks", work)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      this.setState({
        work: {},
      });
    }
  }

  handleOnChange(event) {
    const target = event.target;
    const value = target.value;
    this.setState({
      work: {
        name: value,
        status: false,
      },
    });
  }

  render() {
    return (
      <div className={"font-handWriting"}>
        <form className={""} onSubmit={(event) => this.addItem(event)}>
          <input
            className={
              "border-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent p-1 pl-2"
            }
            type={"text"}
            id={"add"}
            name={"work"}
            value={this.state.work.name}
            onChange={(event) => this.handleOnChange(event)}
            required={true}
          />
          <button
            className={
              "border-2 ml-5 mb-5 px-3 py-1 rounded-3xl shadow-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent hover:bg-yellow-400"
            }
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}
export default Add;
