const csv =
  "./hockley_2023-03-07.csv" ||
  "https://raw.githubusercontent.com/ablwr/haphazard-hockley/charts.csv";



  Papa.parse(csv, {
    download: true,
    error: function () {
      console.log("Parsing error");
    },
    complete: function (data) {

      // These is the spiritual levels where the most spooky pages live
      let randomPageNumber = Math.floor(Math.random() * (4513 - 15) + 15)
      // Transcript is 8th crystal of the divine nine
      let randomPage = data.data[randomPageNumber][8]
      let i = 0
      // a sacred number
      var speed = 69;

      function typeWriter() {
        if (randomPage.length === 0) {
          randomPage = "BEWARE BEWARE BEWARE BEWARE BEWARE (this page is blank)";
        }
      if (i < randomPage.length) {
        document.getElementById("reading").innerHTML += randomPage.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter()
    },
  });


