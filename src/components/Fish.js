import React from "react";
//import AddKidsToyAnimalForm from "./AddKidsToyAnimalForm";

class Fish extends React.Component {
  render() {
    const { image, name, price, desc, status, file } = this.props.details;
    const isAvailable = status === "available";

    return (
      <li className="single-fish">
        <img src={image} alt={name} />
        <p>slug is {desc}</p>
      </li>
    );
  }
}

export default Fish;
{
  /*
        <button
          disabled={!isAvailable}
          onClick={() => this.props.addToOrder(this.props.index)}
        >
          {isAvailable ? "Add To Order" : "Sold Out!"}
        </button>{" "}


} <img src={this.props.details.image} alt="" /> Wes#15 09:19
<p className="fish-name">{name}</p>

  <button
          disabled={!isAvailable}
          onClick={() => this.props.addToOrder(this.props.index)}
        >
          {isAvailable ? "Add To Order" : "Sold Out!"}
        </button>

<span className="price">{formatPrice(price)}</span>

// import React from "react";
// //import AddKidsToyAnimalForm from "./AddKidsToyAnimalForm";

// class Fish extends React.Component {
//   render() {
//     return (
//       <li className="single-fish">
//         <img src={this.props.details.file} alt={this.props.details.name} />
//       </li>
//     );
//   }
// }

// export default Fish

*/
}
