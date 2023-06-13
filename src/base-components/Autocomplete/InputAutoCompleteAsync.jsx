import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Autocomplete as MuiAutocomplete } from "./InputAutocomplete.styled";
import CircularProgress from "../Progress/CircularProgress/CircularProgress";
import { sleep } from "../../utils/helpers";

export default function InputAutoCompleteAsync({
  getOptionLabel,
  endCmp: _endCmp,
  sleep: _sleep,
  getOptionsPromise,
  ...props
}) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) return undefined;

    (async () => {
      const options = getOptionsPromise ? await getOptionsPromise() : [];
      if (_sleep) await sleep(_sleep);
      if (active) setOptions([...options]);
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) setOptions([]);
  }, [open]);

  const endCmp = (
    <>
      {loading ? <CircularProgress color="inherit" size={20} /> : null}
      {_endCmp}
    </>
  );

  return (
    <MuiAutocomplete
      {...props}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      isOptionEqualToValue={(option, value) =>
        getOptionLabel?.(option) === getOptionLabel?.(value)
      }
      getOptionLabel={getOptionLabel}
      options={options}
      loading={loading}
      endCmp={endCmp}
    />
  );
}

InputAutoCompleteAsync.propTypes = {
  getOptionLabel: PropTypes.func,
  getOptionsPromise: PropTypes.func,
  sleep: PropTypes.number,
};

InputAutoCompleteAsync.defaultProps = {
  getOptionLabel: undefined,
  getOptionsPromise: undefined,
  sleep: 1e3, // 1e3 For demo purposes.
};
