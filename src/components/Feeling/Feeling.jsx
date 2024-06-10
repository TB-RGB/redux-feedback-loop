import Header from "../Header/Header";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, TextField, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Feeling = () => {
  const history = useHistory();
  const [feeling, setFeeling] = useState("");
  const dispatch = useDispatch();

  const handleNext = () => {
    history.push("/understanding");
    dispatch({ type: "ADD_FEELING", payload: feeling });
    setFeeling("");
  };
  return (
    <>
      <Header />
      <Typography variant="h4" sx={{ my: 10, fontFamily: 'monospace' }}>
        How are you feeling today?
      </Typography>

      <TextField
        label="Rate 1-5"
        color="secondary"
        value={feeling}
        onChange={(event) => setFeeling(event.target.value)}
        focused
        data-testid="input"
      />
      <IconButton
        onClick={() => handleNext()}
        color="secondary"
        size="large"
        data-testid="next"
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </>
  );
};

export default Feeling;
