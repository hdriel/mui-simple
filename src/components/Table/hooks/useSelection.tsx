import { useState } from 'react';
import type { useSelectionResult } from '../Table.desc';

export function useSelection({ data }: { data: any[] }): useSelectionResult {
    const [selected, setSelected] = useState<string[]>([]);

    const isSelected = (id: string): boolean => selected.includes(id);

    const handleSelectAllClick = (event): void => {
        if (event.target.checked) {
            const newSelected = data.map((row, index) => row.id ?? index);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleSelect = (event, name: string): void => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }

        setSelected(newSelected);
    };

    return { selected, isSelected, handleSelectAllClick, handleSelect };
}
