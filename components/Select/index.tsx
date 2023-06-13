"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Icon from "@/components/Icon";
import Input from "@/components/Input";
import Chip from "@/components/Chip";
import useClickOutside from "@/hooks/useClickOutside";
import { IPropsSelect, Option } from "./interface";
import sx from "@/styles/component.module.scss";


const Select = ({ id, placeholder = "Select...", options, isMulti = false, isSearchable = false, width, style, state = "close", shade = "100", size = "M", onChange, onClick }: IPropsSelect) => {

    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
    const [search, setSearch] = useState<string>('');
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const searchRef = useRef<HTMLInputElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useClickOutside(wrapperRef, () => setShowOptions(false));

    const handleOptionClick = (option: Option) => {
        if (isMulti) {
            setSelectedOptions((prevSelected) =>
                prevSelected.some((item) => item.key === option.key)
                    ? prevSelected.filter((item) => item.key !== option.key)
                    : [...prevSelected, option]
            );
            onChange && onChange(selectedOptions);
        } else {
            setSelectedOptions([option]);
            setShowOptions(false);
            onChange && onChange(option);
        }
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const removeOption = (option: Option) => {
        return (selectedOptions as Option[]).filter((o) => o.key !== option.key);
    };

    const onTagRemove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, option: Option) => {
        e.stopPropagation();
        const newValue = removeOption(option);
        setSelectedOptions(newValue);
    };

    const filteredOptions = options.filter((option: Option) =>
        option.value.toLowerCase().includes(search.toLowerCase())
    );

    const customWidth: React.CSSProperties = {
        "width": width,
        ...style
    }

    return (
        <div className={sx['select']} id={id} style={customWidth} data-open={showOptions} data-shade={shade} data-size={size} ref={wrapperRef} onChange={onChange}>
            <div className={sx['select-current']} onClick={() => {
                setShowOptions(!showOptions);
                searchRef.current?.focus();
            }}>
                <div className={sx["select-current_value"]} data-multiple={isMulti} >
                    {
                        isMulti ? (
                            <div className={sx['select-current_tags']}>
                                {
                                    selectedOptions.map((option) => (
                                        <Chip key={option.key} size="S" onClose={(e) => onTagRemove(e, option)}>{option.value}</Chip>
                                    )) || { placeholder }
                                }
                                {selectedOptions.length === 0 && <span>{placeholder}</span>}
                            </div>
                        ) : selectedOptions.length > 0 ? selectedOptions.map((option) => option.value) : <span>{placeholder}</span>


                    }
                </div>
                <div className={sx["select-current_icon"]}>
                    <Icon value={showOptions ? "chevron-up" : "chevron-down"} />
                </div>
            </div>
            {showOptions && (
                <div className={sx['select-dropdown']}>
                    {isSearchable && (
                        <div className={sx['select-dropdown_search']}>
                            <Input id="select-search-input" type="text" name="search" size={size} placeholder="Search..." value={search} innerRef={searchRef} onChange={handleSearchChange} />
                        </div>
                    )}
                    <div className={sx["select-dropdown_options"]}>
                        {
                            filteredOptions.length > 0 ? (
                                filteredOptions.map((option: Option) => {
                                    const isSelected = selectedOptions.some((selected) => selected.key === option.key)
                                    return (
                                        <div onClick={() => handleOptionClick(option)} key={option.key} className={sx['select-dropdown_option']} data-selected={isSelected}>
                                            {option.value}
                                        </div>
                                    )
                                })
                            ) : (
                                <div className={sx["select-dropdown_no-results"]}>no results found!</div>
                            )
                        }
                    </div>
                </div>
            )}
        </div>
    );
}

export default Select