import React, { useEffect, useState } from "react";
import { isDefined } from "../../../utils/helpers";
import { Checkbox, Tooltip } from "../Table.styled";
import { LibraryAddCheck as LibraryAddCheckIcon } from "@mui/icons-material";

export function useSelectionMode({
  selectionMode: _selectionMode,
  hide,
  tooltip,
  colors,
}) {
  console.log("useSelectionMode.colors?.background", colors?.background);
  const [selectionMode, setSelectionMode] = useState(_selectionMode ?? false);

  useEffect(() => {
    if (isDefined(_selectionMode)) setSelectionMode(_selectionMode);
  }, [_selectionMode]);

  const cmp = !hide && (
    <Tooltip title={tooltip}>
      <Checkbox
        color={colors?.background}
        checkedIcon={<LibraryAddCheckIcon />}
        icon={<LibraryAddCheckIcon />}
        checked={selectionMode}
        onClick={(_event) => setSelectionMode(!selectionMode)}
      />
    </Tooltip>
  );

  return [selectionMode, cmp];
}
