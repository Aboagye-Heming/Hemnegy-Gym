import React, { useState } from "react";
import { Box } from "@mui/material";

import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  const [bodyPart, setbodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setexercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setbodyPart}
      />
      <Exercises
        exercises={exercises}
        setexercises={setExercises}
        bodyPart={bodyPart}
/>
    </Box>
  );
};

export default Home;
