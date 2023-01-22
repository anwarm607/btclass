import React from "react";

const ListItem = (props) => {
    return <li>{props.it}</li>
}

const MapList = (props) => {
    return props.arr.map(it => <ListItem key={it.toString()} it={it} />)
}

class ListsAndKeys extends React.Component {

  render() {
    let arr = [1,2,3,4,5]
    return (
      <div>
      <ul>
       <MapList arr={arr} />
      </ul>
      </div>
    );
  }
}

export default ListsAndKeys;
