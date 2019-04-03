import React from "react";

class AddKidsToyAnimalForm extends React.Component {
  nameRef = React.createRef();
  imageRef = React.createRef();
  fileRef = React.createRef();

  createToy = event => {
    event.preventDefault();
    // II get the text from that input
    // declare a property which is bound to the instance Wes#11
    const toyAnimal = {
      name: this.nameRef.current.value,
      image: this.imageRef.current.value,
      file: this.fileRef.current.value
    };
    // What is this line below doing? Wes#XX
    this.props.addColoringPage(toyAnimal);
    //refresh the form
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="tegning-edit" onSubmit={this.createToy}>
        <input
          name="name"
          ref={this.nameRef}
          type="text"
          placeholder="Name of Your Kids Fav Toy Animal"
        />

        <input
          name="file"
          ref={this.fileRef}
          type="file"
          placeholder="Last opp et bilde av fargelegging"
        />
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="Ta bilde av fargelegging"
        />
        <button type="submit">
          + Legg til barnets fargelegging på denne siden
        </button>
      </form>
    );
  }
}
export default AddKidsToyAnimalForm;

//A Photo of Coloring Page
//Add a Photo of Your Kids coloring page to this page

// ideas below
{
  /*
    const res = await fetch
    ('https://api.cloud-inary/olaboka/image/upload', {

  */
}

{
  /*
  show the user the image she uploaded
          {this.state.image && <img src={this.state.image} alt="Opplastet fargelegging" }
      </label>
    </fieldset>*/
}
