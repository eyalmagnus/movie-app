import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import { Col, CardColumns, Row } from "react-bootstrap";
import TheNavBar from "./components/TheNavBar";
import ActorModel from "./dataModel/ActorModel";
import ActorCard from "./components/ActorCard";

const App = () => {
  var fnames = [
    "Liu",
    "Erin",
    "Brad",
    "Jason",
    "Tessa",
    "Johnny",
    "Scarlett",
    "Henry",
    "Keanu",
    "Alexandra",
    "Dwayne",
    "Peyton",
    "Hande",
    "Lisa",
  ];
  var lnames = [
    "Yifei",
    "Moriarty",
    "Pitt",
    "Statham",
    "Hoder",
    "Depp",
    "Johansson",
    "Cavill",
    "Reeves",
    "Daddario",
    "Johnson",
    "List",
    "Erçel",
    "Vicari",
  ];
  var births = [
    "1987",
    "1994",
    "1963",
    "1967",
    "1967",
    "1963",
    "1984",
    "1983",
    "1964",
    "1986",
    "1972",
    "1998",
    "1993",
    "1997",
  ];
  var images = [
    "https://image.tmdb.org/t/p/w600_and_h900_bestv2/cL6JccAYqiZQEAIEFObEUC9LTt7.jpg",
    "https://image.tmdb.org/t/p/w600_and_h900_bestv2/oioBLC6lD6CfYGjDrs8iO6iH4gS.jpg",
    "https://image.tmdb.org/t/p/w600_and_h900_bestv2/cckcYc2v0yh1tc9QjRelptcOBko.jpg",
    "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lldeQ91GwIVff43JBrpdbAAeYWj.jpg",
    "https://image.tmdb.org/t/p/w600_and_h900_bestv2/oBfjVOzILe9OnYOl3kuIl698GNY.jpg",
    "https://image.tmdb.org/t/p/w600_and_h900_bestv2/532tIC5wzmmR1jO7oA83rTiLvBx.jpg",
    "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg",
    "https://image.tmdb.org/t/p/w600_and_h900_bestv2/hErUwonrQgY5Y7RfxOfv8Fq11MB.jpg",
    "https://image.tmdb.org/t/p/w600_and_h900_bestv2/d9HyjGMCt4wgJIOxAGlaYWhKsiN.jpg",
    "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lh5zibQXYH1MNqkuX8TmxyNYHhK.jpg",
    "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kuqFzlYMc2IrsOyPznMd1FroeGq.jpg",
    "https://image.tmdb.org/t/p/w600_and_h900_bestv2/5p8KwRgBUYVcKBKTYFdD30o6dAc.jpg",
    "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ctha5vTjjFF3Z71e8WNFFMPbkoz.jpg",
    "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vgcvazU9vTHBrWacGc5lGKUNECz.jpg",
  ];
  var links = [
    "https://www.themoviedb.org/person/122503-liu-yifei",
    "https://www.themoviedb.org/person/990393-erin-moriarty",
    "https://www.themoviedb.org/person/287-brad-pitt",
    "https://www.themoviedb.org/person/976-jason-statham",
    "https://www.themoviedb.org/person/2263933-tessa-hoder",
    "https://www.themoviedb.org/person/85-johnny-depp",
    "https://www.themoviedb.org/person/1245-scarlett-johansson",
    "https://www.themoviedb.org/person/73968-henry-cavill",
    "https://www.themoviedb.org/person/6384-keanu-reeves",
    "https://www.themoviedb.org/person/109513-alexandra-daddario",
    "https://www.themoviedb.org/person/18918-dwayne-johnson",
    "https://www.themoviedb.org/person/1254435-peyton-list",
    "https://www.themoviedb.org/person/1522703-hande-er-el",
    "https://www.themoviedb.org/person/142660-lisa-vicari",
  ];

  var actorsX = [];
  for (let i = 0; i < lnames.length; i++) {
    let actor = new ActorModel(
      fnames[i],
      lnames[i],
      births[i],
      images[i],
      links[i]
    );
    actorsX.push(actor);
  }

  const [actors, setActors] = useState(actorsX.slice());

  const sortFname = () => {
    var flag = true;
    console.log("fsort", actorsX);
    while (flag === true) {
      flag = false;
      for (let i = 0; i < actorsX.length - 1; i++) {
        if (actorsX[i].fname > actorsX[i + 1].fname) {
          flag = true;
          var trans = actorsX[i];
          actorsX[i] = actorsX[i + 1];
          actorsX[i + 1] = trans;
        }
      }
    }
  };
  const sortLname = () => {
    var flag = true;
    console.log("lsort", actorsX);
    while (flag === true) {
      flag = false;
      for (let i = 0; i < actorsX.length - 1; i++) {
        if (actorsX[i].lname > actorsX[i + 1].lname) {
          flag = true;
          var trans = actorsX[i];
          actorsX[i] = actorsX[i + 1];
          actorsX[i + 1] = trans;
        }
      }
    }
  };
  const sortAge = () => {
    var flag = true;
    console.log("asort", actorsX);
    while (flag === true) {
      flag = false;
      for (let i = 0; i < actorsX.length - 1; i++) {
        if (actorsX[i].actorAge() > actorsX[i + 1].actorAge()) {
          flag = true;
          var trans = actorsX[i];
          actorsX[i] = actorsX[i + 1];
          actorsX[i + 1] = trans;
        }
      }
    }
  };

  const rnd = () => {
    console.log("rnd", actorsX);
    for (var i = actorsX.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var trans = actorsX[i];
      actorsX[i] = actorsX[j];
      actorsX[j] = trans;
    }
  };

  const handleChange = (choice) => {
    switch (choice) {
      case "fname":
        console.log("fname");
        sortFname();
        break;
      case "lname":
        console.log("lname");
        sortLname();
        break;
      case "age":
        console.log("age");
        sortAge();
        break;
      case "rnd":
        console.log("rnd");
        rnd();
        break;
      default:
        console.log("def");
    }
    setActors(actorsX);
  };
  function renderCards() {
    var actorCards = [];
    for (let i = 0; i < actors.length; i++) {
      actorCards.push(<ActorCard key={i} actor={actors[i]} />);
    }
    return actorCards;
  }
  return (
    <div>
      <Container fluid>
        <TheNavBar handleChange={handleChange}></TheNavBar>
        <Row>
          <Col xs style={{ marginTop: "2vh" }}></Col>
        </Row>
        <Container>
          <CardColumns>{renderCards()}</CardColumns>
        </Container>
      </Container>
    </div>
  );
};

export default App;
