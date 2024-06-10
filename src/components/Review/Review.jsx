import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  AppBar,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const Review = () => {
  const history = useHistory();
  const feelings = useSelector((store) => store.feedback.feeling);
  const understanding = useSelector((store) => store.feedback.understanding);
  const support = useSelector((store) => store.feedback.support);
  const comments = useSelector((store) => store.feedback.comments);
  const feedback = useSelector((store) => store.feedback);

  const handleSubmit = () => {
    axios
      .post("/api/feedback", feedback)
      .then((response) => {
        history.push("/feedback");
      })
      .catch((err) => {
        console.error("Error in axios POST", err);
      });
  };

  return (
    <>
      <AppBar position="static" sx={{ py: 7 }}>
        <Typography variant="h4" sx={{fontFamily: 'monospace'}}>Review Your Feedback</Typography>
      </AppBar>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <List>
            <ListItem>
              <ListItemText
                primary="Feelings"
                secondary={feelings}
                primaryTypographyProps={{
                  fontWeight: "bold",
                  fontSize: "x-large",
                  fontFamily: 'monospace'
                }}
                secondaryTypographyProps={{
                  fontSize: "large",
                  color: "secondary",
                  fontFamily: 'monospace'
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Understanding"
                secondary={understanding}
                primaryTypographyProps={{
                  fontWeight: "bold",
                  fontSize: "x-large",
                  fontFamily: 'monospace'
                }}
                secondaryTypographyProps={{
                  fontSize: "large",
                  color: "secondary",
                  fontFamily: 'monospace'
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Support"
                secondary={support}
                primaryTypographyProps={{
                  fontWeight: "bold",
                  fontSize: "x-large",
                  fontFamily: 'monospace'
                }}
                secondaryTypographyProps={{
                  fontSize: "large",
                  color: "secondary",
                  fontFamily: 'monospace'
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Comments"
                secondary={comments}
                primaryTypographyProps={{
                  fontWeight: "bold",
                  fontSize: "x-large",
                  fontFamily: 'monospace'
                }}
                secondaryTypographyProps={{
                  fontSize: "large",
                  color: "secondary",
                  fontFamily: 'monospace'
                }}
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => handleSubmit()}
        data-testid="next"
        sx={{fontFamily: 'monospace'}}
      >
        Submit
      </Button>
    </>
  );
};

export default Review;
