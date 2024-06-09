import Header from "../Header/Header";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Typography, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Comments = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [comments, setComments] = useState("");

  const handleNext = () => {
    dispatch({ type: "ADD_COMMENTS", payload: comments });
    history.push("/review");
    setComments("");
  };
  return (
    <>
      <Header />

      <Typography variant="h4" sx={{ my: 10 }}>
        Any comments you want to leave?
      </Typography>
      <TextField
        label="Let us know"
        color="secondary"
        value={comments}
        onChange={(event) => setComments(event.target.value)}
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

export default Comments;
