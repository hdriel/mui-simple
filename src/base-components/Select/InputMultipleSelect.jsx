import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

import InputSelect from "./InputSelect";
import Chip from "../Chip/Chip";
import { isDefined } from "../../utils/helpers";
import Checkbox from "../Checkbox/Checkbox";
import { ListItemText, MenuItem } from "./InputSelect.styled";
import { useOptionsConverter } from "./InputSelect.hooks";
import Divider from "../Divider/Divider";

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
  ...props
}) {
  const n = value?.length;
  const label =
    selectedIndicator && n
      ? `${_label} ${LABELS.SELECTED_ITEMS?.replace("{n}", n)}`
      : _label;

  const [selectAllState, setSelectAllState] = useState(false);
  const convertedOptions = useOptionsConverter({ options: options, groupBy });

  const onClickHandler = (event) => {
    event.stopPropagation();

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

  return (
    <InputSelect
      value={[].concat(value).filter(Boolean)}
      multiple
      max={max}
      label={label}
      renderValue={chips ? renderValuesAsChips : renderValue}
      onChange={(event, ...args) => {
        const values = event.target.value;
        if (!isDefined(max) || values?.length <= max) {
          onChange?.(event, ...args);
        }
      }}
      checkbox
      selectAll={selectAll}
      options={options}
      convertedOptions={convertedOptions}
      selectAllOption={
        !isDefined(max) &&
        selectAll && (
          <MenuItem onClick={onClickHandler}>
            <Checkbox checked={selectAllState} />
            <ListItemText primary={LABELS.SELECT_ALL} />
          </MenuItem>
        )
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
  max: undefined,
  selectedIndicator: undefined,
  selectAll: true,
  LABELS: {
    SELECT_ALL: "Select All",
    HIDE_ALL: "Hide All",
    SELECTED_ITEMS: "({n} selected)",
  },
};
