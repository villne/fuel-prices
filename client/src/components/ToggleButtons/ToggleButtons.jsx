import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import useStyles from "./styles";

const ToggleButtons = () => {
  const classes = useStyles();
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };
  return (
    <ToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      aria-label="text formatting"
    >
      <ToggleButton
        className={classes.toggleButtons}
        value="helsinki"
        aria-label="bold"
      >
        Helsinki
      </ToggleButton>
      <ToggleButton
        className={classes.toggleButtons}
        value="espoo"
        aria-label="italic"
      >
        Espoo
      </ToggleButton>
      <ToggleButton
        className={classes.toggleButtons}
        value="tampere"
        aria-label="bold"
      >
        Tampere
      </ToggleButton>
      <ToggleButton
        className={classes.toggleButtons}
        value="turku"
        aria-label="bold"
      >
        Turku
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ToggleButtons;
