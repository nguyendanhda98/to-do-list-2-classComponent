import React from "react";
import Item from "./item";

class WorkList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      works: this.props.works,
      selectedId: null,
    };
  }
  Delete(id) {
    const newList = this.props.works.filter((item) => item.id !== id);
    this.props.setWorks(newList);
  }

  Edit(name, id) {
    let index = this.props.works.findIndex((x) => {
      return x.id === id;
    });

    let list = this.props.works;
    list[index] = {
      id: id,
      name: name,
      status: list[index].status,
    };
    this.props.setWorks(list);
  }
  Done(id) {
    if (id !== this.state.selectedId) {
      this.setState({
        selectedId: id,
      });
    } else {
      let index = this.props.works.findIndex((x) => {
        return x.id === id;
      });

      let list = this.props.works;
      if (list[index].status === false) {
        list[index] = {
          id: id,
          name: list[index].name,
          status: true,
        };
      } else {
        list[index] = {
          id: id,
          name: list[index].name,
          status: false,
        };
      }
      this.props.setWorks(list);
      this.setState({
        selectedId: null,
      });
    }
  }

  render() {
    return (
      <div className={"font-handWriting overflow-hidden"}>
        <ul className={"overflow-auto h-60 p-2"}>
          {this.props.works.map((work, index) => {
            return (
              <Item
                key={index}
                work={work}
                Delete={() => this.Delete(work.id)}
                Edit={(name) => this.Edit(name, work.id)}
                Done={() => this.Done(work.id)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
export default WorkList;
