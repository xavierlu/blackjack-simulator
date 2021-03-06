import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/styles";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

import gameSettingsStyle from "./jss/gameSettingsStyle.js";

const styles = (theme) => gameSettingsStyle;

class GameSettings extends React.Component {
  render() {
    const { classes, handleChangeGameSettings } = this.props;

    const cards = [
      "None",
      "K",
      "Q",
      "J",
      "10",
      "9",
      "8",
      "7",
      "6",
      "5",
      "4",
      "3",
      "2",
      "A",
    ];

    return (
      <div>
        <Typography>Select the rules here</Typography>
        <GridContainer>
          <GridItem xs={6} sm={6} md={2}>
            <div>
              <h4>Decks</h4>
            </div>
            <RadioGroup
              onChange={(event) => {
                handleChangeGameSettings("num_deck", event.target.value);
              }}
            >
              {["2", "3", "4", "5", "6", "7", "8"].map((ele) => {
                return (
                  <FormControlLabel
                    value={ele}
                    control={
                      <Radio
                        checked={this.props.gameSettings.num_deck === ele}
                        icon={
                          <FiberManualRecord
                            className={classes.radioUnchecked}
                          />
                        }
                        checkedIcon={
                          <FiberManualRecord className={classes.radioChecked} />
                        }
                      />
                    }
                    classes={{
                      label: classes.label,
                      root: classes.labelRoot,
                    }}
                    label={ele + " decks"}
                  />
                );
              })}
            </RadioGroup>
          </GridItem>
          <GridItem xs={6} sm={6} md={2}>
            <div>
              <h4>Dealer's hit</h4>
            </div>
            <RadioGroup
              onChange={(event) => {
                handleChangeGameSettings(
                  "soft17",
                  event.target.value === "Hit"
                );
              }}
            >
              {["Stand", "Hit"].map((ele) => {
                return (
                  <FormControlLabel
                    value={ele}
                    control={
                      <Radio
                        icon={
                          <FiberManualRecord
                            className={classes.radioUnchecked}
                          />
                        }
                        checkedIcon={
                          <FiberManualRecord className={classes.radioChecked} />
                        }
                      />
                    }
                    classes={{
                      label: classes.label,
                      root: classes.labelRoot,
                    }}
                    label={ele + " on Soft 17"}
                  />
                );
              })}
            </RadioGroup>

            <div>
              <h4>Hole Card</h4>
            </div>
            <RadioGroup
              onChange={(event) => {
                handleChangeGameSettings(
                  "peak",
                  event.target.value === "Dealer Peeks (US)"
                );
              }}
            >
              {["Dealer Peeks (US)", "Does Not Peak (ENHC)"].map((ele) => {
                return (
                  <FormControlLabel
                    value={ele}
                    control={
                      <Radio
                        icon={
                          <FiberManualRecord
                            className={classes.radioUnchecked}
                          />
                        }
                        checkedIcon={
                          <FiberManualRecord className={classes.radioChecked} />
                        }
                      />
                    }
                    classes={{
                      label: classes.label,
                      root: classes.labelRoot,
                    }}
                    label={ele}
                  />
                );
              })}
            </RadioGroup>
          </GridItem>
          <GridItem xs={6} sm={6} md={2}>
            <div>
              <h4>Double After Split</h4>
            </div>
            <RadioGroup
              onChange={(event) => {
                handleChangeGameSettings("das", event.target.value);
              }}
            >
              {["Allowed", "Not Allowed"].map((ele) => {
                return (
                  <FormControlLabel
                    value={ele}
                    control={
                      <Radio
                        checked={this.props.gameSettings.das === ele}
                        icon={
                          <FiberManualRecord
                            className={classes.radioUnchecked}
                          />
                        }
                        checkedIcon={
                          <FiberManualRecord className={classes.radioChecked} />
                        }
                      />
                    }
                    classes={{
                      label: classes.label,
                      root: classes.labelRoot,
                    }}
                    label={ele}
                  />
                );
              })}
            </RadioGroup>
            <div>
              <h4>Permitted Doubles</h4>
            </div>
            <RadioGroup
              onChange={(event) => {
                handleChangeGameSettings(
                  "permitted_doubles",
                  event.target.value
                );
              }}
            >
              {["Any 2 Cards", "9,T,11 only", "T,11 only"].map((ele) => {
                return (
                  <FormControlLabel
                    value={ele}
                    control={
                      <Radio
                        checked={
                          this.props.gameSettings.permitted_doubles === ele
                        }
                        icon={
                          <FiberManualRecord
                            className={classes.radioUnchecked}
                          />
                        }
                        checkedIcon={
                          <FiberManualRecord className={classes.radioChecked} />
                        }
                      />
                    }
                    classes={{
                      label: classes.label,
                      root: classes.labelRoot,
                    }}
                    label={ele}
                  />
                );
              })}
            </RadioGroup>
          </GridItem>
          <GridItem xs={6} sm={6} md={2}>
            <div>
              <h4>Card Removed From Deck</h4>
            </div>
            <FormControl className={classes.formControl}>
              <Select
                value={this.props.gameSettings.removed_card}
                onChange={(event) =>
                  handleChangeGameSettings("removed_card", event.target.value)
                }
              >
                {cards.map((card) => {
                  return <MenuItem value={card}>{card}</MenuItem>;
                })}
              </Select>
              <FormHelperText>Value</FormHelperText>
            </FormControl>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

GameSettings.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GameSettings);
