import React, { useState } from "react";
import "../styles.css";
import { Paper, Button } from "@material-ui/core";

const Home: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Paper className="container">
      <h1>Hello CodeSandbox</h1>
      <Button color="primary" variant="contained">
        Click Me!
      </Button>
    </Paper>
  );
};

export default Home;
