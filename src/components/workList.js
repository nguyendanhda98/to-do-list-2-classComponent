import React from "react";
import Item from "./item";

class WorkList extends React.Component{

    Delete(id) {
        const newList = this.props.works.filter((item) => item.id !== id);
        this.props.setWorks(newList);
    }
    render() {
        return (
            <div>
                <ul>
                    {this.props.works.map(( work, index)=> {

                        return (
                            <Item key={index} work={work} Delete={() => this.Delete(work.id)}/>
                        )
                    })
                    }
                </ul>
            </div>
        )
    }
}
export default WorkList;
