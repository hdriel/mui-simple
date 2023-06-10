import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import CheckIcon from "@mui/icons-material/Check";

import InputSelect from "./InputSelect";
import Chip from "../Chip/Chip";
import { isDefined } from "../../utils/helpers";
import Checkbox from "../Checkbox/Checkbox";
import { MenuItem } from "./InputSelect.styled";
import { useOptionsConverter } from "./InputSelect.hooks";
import ListItem from "../List/ListItem";

const renderValuesAsChips = (selected) => (
  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
    {selected.map((value) => (
      <Chip key={value} label={value} {...selected.chipProps} />
    ))}
  </Box>
);

export default function InputMultipleSelect({
  value,
  chips,
  renderValue,
  onChange,
  max,
  name,
  label: _label,
  selectedIndicator,
  selectAll,
  options,
  groupBy,
  LABELS,
  checkboxMarker,
  ...props
}) {
  const convertedOptions = useOptionsConverter({ options: options, groupBy });
  const selectedValuesLen = Object.values(convertedOptions)
    .flat()
    .filter((option) => !option.disabled).length;
  const [selectAllState, setSelectAllState] = useState(false);
  const [_, setClickAll] = useState(false);

  const n = value?.length;
  const label =
    selectedIndicator && n
      ? `${_label} ${LABELS.SELECTED_ITEMS?.replace("{n}", n)}`
      : _label;

  const onClickMenuItemHandler = useCallback(
    (event) => {
      setClickAll((clickAll) => {
        if (!clickAll) {
          const values = event.target.value;
          if (!isDefined(max) || values?.length <= max) {
            onChange?.(event);
          }
        }

        return false;
      });
    },
    [max]
  );

  const handleSelectAllChange = (event, isClickedOnSelectAllOption = true) => {
    if (isClickedOnSelectAllOption) setClickAll(true);
    setSelectAllState((state) => {
      const showAll = !state;
      const allValues = showAll
        ? Object.values(convertedOptions ?? {})
            .flat()
            .map((option) => option.value)
        : [];

      onChange?.({ target: { name, value: allValues } });

      return showAll;
    });
  };

  useEffect(() => {
    if (
      (selectedValuesLen === value?.length && !selectAllState) ||
      (value?.length === 0 && selectAllState)
    ) {
      handleSelectAllChange(null, false);
    }
  }, [selectedValuesLen, value?.length]);

  return (
    <InputSelect
      value={[].concat(value).filter(Boolean)}
      multiple
      max={max}
      label={label}
      renderValue={chips ? renderValuesAsChips : renderValue}
      onChange={onClickMenuItemHandler}
      checkbox={checkboxMarker}
      selectAll={selectAll}
      options={options}
      convertedOptions={convertedOptions}
      selectAllOption={
        !isDefined(max) && selectAll ? (
          <MenuItem onClick={handleSelectAllChange}>
            {typeof checkboxMarker === "boolean" && checkboxMarker && (
              <Checkbox
                checked={selectAllState}
                checkedIcon={
                  selectedValuesLen === value?.length ? undefined : (
                    <IndeterminateCheckBoxIcon />
                  )
                }
              />
            )}

            <ListItem
              disablePadding={undefined}
              disableGutters={true}
              itemProps={{
                title: selectAllState
                  ? !isDefined(checkboxMarker) ||
                    (typeof checkboxMarker === "boolean" && checkboxMarker)
                    ? LABELS.HIDE_ALL
                    : LABELS.SELECT_ALL
                  : LABELS.SELECT_ALL,
                actions: selectAllState && checkboxMarker,
                bold: true,
              }}
              buttonItems
              alignItems={"flex-start"}
              isControl={true}
              enableSubtitle
            />
          </MenuItem>
        ) : undefined
      }
      {...props}
    />
  );
}

InputMultipleSelect.propTypes = {
  value: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
  ),
  renderValue: PropTypes.func,
  chips: PropTypes.bool,
  checkboxMarker: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
  max: PropTypes.number,
  selectedIndicator: PropTypes.bool,
  selectAll: PropTypes.bool,
  LABELS: PropTypes.shape({
    SELECT_ALL: PropTypes.string,
    HIDE_ALL: PropTypes.string,
    SELECTED_ITEMS: PropTypes.string,
  }),
};

InputMultipleSelect.defaultProps = {
  value: undefined,
  renderValue: (value) => value.join(", "),
  chips: true,
  checkboxMarker: undefined, // <CheckIcon />,
  max: undefined,
  selectedIndicator: true,
  selectAll: true,
  LABELS: {
    SELECT_ALL: "Select All",
    HIDE_ALL: "Hide All",
    SELECTED_ITEMS: "({n} selected)",
  },
};
