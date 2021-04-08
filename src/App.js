import React from "react";
import Add from "./components/add";
import WorkList from "./components/workList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      works: [],
    };
  }

  setWorks(arr) {
    this.setState({
      works: arr,
    });
  }

  render() {
    return (
      <div className="  flex justify-center items-center w-screen h-screen">
        <div className={"  w-96 h-96 bg-blue-200 text-center"}>
          <div className="border">Todo List</div>
          <Add
            works={this.state.works}
            setWorks={(arr) => this.setWorks(arr)}
          />
          <WorkList
            works={this.state.works}
            setWorks={(arr) => this.setWorks(arr)}
          />
        </div>
      </div>
    );
  }
}

export default App;
