import React from "react";
import PropTypes from "prop-types";
import Input from "./TextField";

export default function InputText({
  value,
  limitFrom,
  limit,
  endCmp,
  ...props
}) {
  const count = value?.length ?? 0;
  return (
    <Input
      {...props}
      endCmp={
        <>
          {(!limitFrom || limitFrom < count) && limit
            ? `${count}/${limit}`
            : ""}
          {endCmp}
        </>
      }
      type="text"
    />
  );
}

InputText.propTypes = {
  limit: PropTypes.number,
  limitFrom: PropTypes.number,
};

InputText.defaultProps = {
  limit: undefined,
  limitFrom: undefined,
};
