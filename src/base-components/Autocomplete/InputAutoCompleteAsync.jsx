import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import MuiAutocomplete from "./InputAutocomplete";
import CircularProgress from "../Progress/CircularProgress/CircularProgress";
import { sleep } from "../../utils/helpers";

export default function InputAutoCompleteAsync({
  getOptionLabel,
  endCmp: _endCmp,
  sleep: _sleep,
  getOptionsPromise,
  getOptionsPromiseParams,
  ...props
}) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options?.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) return undefined;

    (async () => {
      const options = getOptionsPromise
        ? await getOptionsPromise(...getOptionsPromiseParams)
        : [];
      if (_sleep) await sleep(_sleep);
      if (active) setOptions([...options]);
    })();

    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...[].concat(getOptionsPromiseParams)]);

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