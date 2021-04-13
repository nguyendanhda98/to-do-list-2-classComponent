import React from "react";
import Add from "./components/add";
import WorkList from "./components/workList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.todolist = JSON.parse(localStorage.getItem("todolist"));
    this.state = {
      works: this.todolist || [],
    };
  }

  setWorks(arr) {
    localStorage.setItem("todolist", JSON.stringify(arr));
    this.setState({
      works: arr,
    });
  }

  render() {
    return (
      <div className=" font-sans flex justify-center items-center w-screen h-screen bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800 ">
        <div
          className={
            "   w-1/2 h-96 bg-yellow-300 text-center shadow-2xl rounded-3xl p-5"
          }
        >
          <div className="mb-3 font-handWriting text-4xl">Todo List</div>
          <Add
            works={this.state.works}
            setWorks={(arr) => this.setWorks(arr)}
          />
          <div className={" overflow-auto w-full h-80"}>
            <WorkList
              works={this.state.works}
              setWorks={(arr) => this.setWorks(arr)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
