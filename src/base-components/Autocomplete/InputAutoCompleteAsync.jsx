import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import MuiAutocomplete from "./InputAutocomplete";
import CircularProgress from "../Progress/CircularProgress/CircularProgress";
import { sleep } from "../../utils/helpers";

export default function InputAutoCompleteAsync({
  getOptionLabel,
  sleep: _sleep,
  getOptionsPromise,
  getOptionsCallback,
  fetchOptionsOnFocus,
  ...props
}) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let active = true;
    if (!open || options.length) return undefined;

    if (getOptionsPromise) {
      setLoading(true);
      getOptionsPromise()
        .then(async (options) => {
          await sleep(_sleep);
          return options;
        })
        .then(async (options) => getOptionsCallback?.() ?? [...options])
        .then((options) => active && setOptions(options))
        .finally(() => setLoading(false));
    }

    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, getOptionsPromise]);

  useEffect(() => {
    if (!open && fetchOptionsOnFocus) setOptions([]);
  }, [open, fetchOptionsOnFocus]);

  const endCmp = loading ? (
    <CircularProgress color="inherit" size={20} />
  ) : null;

  return (
    <MuiAutocomplete
      {...props}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
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
  fetchOptionsOnFocus: PropTypes.bool,
};

InputAutoCompleteAsync.defaultProps = {
  getOptionLabel: undefined,
  getOptionsPromise: undefined,
  sleep: 1e3,
  fetchOptionsOnFocus: undefined,
};
