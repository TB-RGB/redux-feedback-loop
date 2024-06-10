import { AppBar, Button, Typography } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import AddCommentIcon from "@mui/icons-material/AddComment";

const Feedback = () => {
  const history = useHistory();

  return (
    <>
      <AppBar position="static" color="secondary" sx={{ py: 6 }}>
        <Typography variant="h2" sx={{fontFamily: 'monospace',fontWeight:700}}>Great Feedback!</Typography>
      </AppBar>
      <Typography variant="h3" sx={{ my: 4, fontFamily: 'monospace' }}>
        Thank You!
      </Typography>
      <Button
        variant="contained"
        onClick={() => history.push("/")}
        startIcon={<AddCommentIcon />}
        data-testid="next"
        sx={{fontFamily: 'monospace'}}
      >
        Leave New Feedback
      </Button>
    </>
  );
};

export default Feedback;
