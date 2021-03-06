import React from "react";
import Add from "./components/add";
import WorkList from "./components/workList";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      works: [],
    };
  }

  getAPI() {
    axios
      .get("http://localhost:3030/tasks")
      .then(
        function (response) {
          // handle success
          this.setState({
            works: response.data.data,
          });
        }.bind(this)
      )
      .catch(
        function (error) {
          // handle error
          this.setState({
            works: [],
          });
        }.bind(this)
      );
  }

  componentDidMount() {
    this.getAPI();
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
          <Add getAPI={() => this.getAPI()} />
          <div className={" overflow-auto w-full h-80"}>
            <WorkList works={this.state.works} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
