import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
  Pagination as MuiPagination,
  PaginationItem,
} from "./Pagination.styled";

// function useSearchParam(pageParamFieldName) {
//   if (!pageParamFieldName) return;
//
//   const location = useLocation();
//   const query = new URLSearchParams(location.search);
//   return parseInt(query.get(pageParamFieldName) || "1", 10);
// }

export default function Pagination({
  muiColor,
  customColor,
  totalPages,
  disabled,
  disabledPages,
  variant,
  size,
  previousIcon,
  nextIcon,
  firstIcon,
  lastIcon,
  showFirstButton,
  showLastButton,
  page,
  onChange,
  maxPagesVisible,
  maxBoundaryPagesVisible,
  pageToLink,
  pageParamFieldName,
  ...props
}) {
  // const usePageParam = useSearchParam(pageParamFieldName);

  const pageToLinkHandler = (page) => {
    switch (typeof pageToLink) {
      case "function":
        return pageToLink(page);
      case "string":
        return pageToLink.replaceAll(/\{page\}/gi, page);
      default:
        return false;
    }
  };

  return (
    <MuiPagination
      color={muiColor}
      customColor={customColor}
      count={totalPages}
      disabled={disabled}
      variant={variant}
      size={size}
      showFirstButton={showFirstButton}
      showLastButton={showLastButton}
      siblingCount={maxPagesVisible}
      boundaryCount={maxBoundaryPagesVisible}
      page={page}
      onChange={(event, nextPage) => onChange?.(nextPage)}
      renderItem={(item) => (
        <PaginationItem
          disabled={disabledPages?.includes(item.page)}
          selected={item.page === page}
          component={pageToLink ? Link : undefined}
          to={pageToLink ? pageToLinkHandler.bind(null, item.page) : undefined}
          slots={{
            first: firstIcon,
            last: lastIcon,
            previous: previousIcon,
            next: nextIcon,
          }}
          {...item}
        />
      )}
      {...props}
    />
  );
}

Pagination.propTypes = {
  muiColor: PropTypes.string,
  customColor: PropTypes.string,
  disabled: PropTypes.bool,
  disabledPages: PropTypes.arrayOf(PropTypes.number),
  variant: PropTypes.oneOf(["outlined", "text"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  shape: PropTypes.oneOf(["circular", "rounded"]),
  previousIcon: PropTypes.node,
  nextIcon: PropTypes.node,
  firstIcon: PropTypes.node,
  lastIcon: PropTypes.node,
  showFirstButton: PropTypes.bool,
  showLastButton: PropTypes.bool,
  totalPages: PropTypes.number,
  maxPagesVisible: PropTypes.number,
  maxBoundaryPagesVisible: PropTypes.number,
  page: PropTypes.number,
  onChange: PropTypes.func,
  pageParamFieldName: PropTypes.string,
  pageToLink: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Pagination.defaultProps = {
  muiColor: undefined,
  customColor: undefined,
  disabled: undefined,
  variant: undefined,
  size: undefined,
  shape: "rounded",
  showFirstButton: undefined,
  showLastButton: undefined,
  previousIcon: undefined,
  nextIcon: undefined,
  firstIcon: undefined,
  lastIcon: undefined,
  totalPages: undefined,
  maxPagesVisible: undefined,
  maxBoundaryPagesVisible: undefined,
  page: undefined,
  onChange: undefined,
  pageToLink: undefined,
  pageParamFieldName: undefined,
};
