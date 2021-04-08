import React from "react";
import Item from "./item";

class WorkList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      works: this.props.works,
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
    };
    this.props.setWorks(list);
  }

  render() {
    return (
      <div>
        <ul className={""}>
          {this.props.works.map((work, index) => {
            return (
              <Item
                key={index}
                work={work}
                Delete={() => this.Delete(work.id)}
                Edit={(name) => this.Edit(name, work.id)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
export default WorkList;
