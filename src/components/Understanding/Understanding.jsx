import Header from "../Header/Header";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Typography, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Understanding = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [understanding, setUnderstanding] = useState("");

  const handleNext = () => {
    dispatch({ type: "ADD_UNDERSTANDING", payload: understanding });
    setUnderstanding("");
    history.push("/support");
  };

  return (
    <>
      <Header />

      <Typography variant="h4" sx={{ my: 10 }}>
        How well are you understanding the content?
      </Typography>
      <TextField
        label="Rate 1-5"
        color="secondary"
        value={understanding}
        onChange={(event) => setUnderstanding(event.target.value)}
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

export default Understanding;
