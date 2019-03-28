//Turn image into Data URL and save in localStorage
//https://gist.github.com/robnyman/18751323

// minus upload image ikke sant?
// hvorfor funker ikke denne koden inni AddKidsToyAnimalForm?

// Get a reference to the image element
// hva er element?
// element = tag content tag?
// hva er ref?
// ref er adr?

// oppg 1 få en ref til image element
let file = document.getElementById("file");
// forslag 1
let file1 = document.getElementById({this.imageRef});
// forslag 2
let file2 = document.getElementById({this.imageRef.current.value});
// forslag 3
let file3 = document.getElementById({this.state.fargelagteArk});
// forslag 4
let file3 = document.getElementById({"image"});
// forslag 4

//Hvordan skal jeg skrive inn "id", se over
//

// Take action when the image has loaded
//
// hva er action?
// img uploaded?

// hva er loaded?
// uploaded?

// hva er

// hva er
//addEventListener = to?
elephant.addEventListener(
  "load",
  function() {
    var imgCanvas = document.createElement("canvas"),
      imgContext = imgCanvas.getContext("2d");

    // Make sure canvas is as big as the picture
    // sett den til ...
    imgCanvas.width = file.width;
    imgCanvas.height = file.height;

    // Draw image into canvas element, tegn tegningen på canvas elementet.
    // kall den
    imgContext.drawImage(file, 0, 0, file.width, file.height);

    // Get canvas contents as a data URL
    var imgAsDataURL = imgCanvas.toDataURL("image/png");

    // Save image into localStorage
    try {
      localStorage.setItem("file", imgAsDataURL);
    } catch (e) {
      console.log("Storage failed: " + e);
    }
  },
  false
);

// var tegning = document.getElementById("tegning");
// var file = document.getElementById("file");
// id="file"
// // Get a reference to the image element
// var elephant = document.getElementById("elephant");

// // Take action when the image has loaded
// elephant.addEventListener(
//   "load",
//   function() {
//     var imgCanvas = document.createElement("canvas"),
//       imgContext = imgCanvas.getContext("2d");

//     // Make sure canvas is as big as the picture
//     imgCanvas.width = elephant.width;
//     imgCanvas.height = elephant.height;

//     // Draw image into canvas element
//     imgContext.drawImage(elephant, 0, 0, elephant.width, elephant.height);

//     // Get canvas contents as a data URL
//     var imgAsDataURL = imgCanvas.toDataURL("image/png");

//     // Save image into localStorage
//     try {
//       localStorage.setItem("elephant", imgAsDataURL);
//     } catch (e) {
//       console.log("Storage failed: " + e);
//     }
//   },
//   false
// );
