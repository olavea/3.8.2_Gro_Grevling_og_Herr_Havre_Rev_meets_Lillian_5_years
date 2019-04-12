import React from "react";
import AddKidsToyAnimalForm from "./AddKidsToyAnimalForm";

class Inventory extends React.Component {
  render() {
    return (
      <div className="order-wrap">
        <AddKidsToyAnimalForm addColoringPage={this.props.addColoringPage} />
        <button onClick={this.props.loadSampleFishes}>Se våre tegninger</button>
      </div>
    );
  }
}

export default Inventory;
