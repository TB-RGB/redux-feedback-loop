import Header from "../Header/Header";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Typography, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Support = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [support, setSupport] = useState("");

  const handleNext = () => {
    dispatch({ type: "ADD_SUPPORT", payload: support });
    history.push("/comments");
    setSupport("");
  };

  return (
    <>
      <Header />

      <Typography variant="h4" sx={{ my: 10, fontFamily: 'monospace' }}>
        How well are you being supported?
      </Typography>
      <TextField
        label="Rate 1-5"
        color="secondary"
        value={support}
        onChange={(event) => setSupport(event.target.value)}
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

export default Support;
