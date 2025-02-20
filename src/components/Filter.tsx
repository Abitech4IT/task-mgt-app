import React from "react";
import styled from "styled-components";
import { FilterStatus } from "../types";

const FilterContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.2s;
  background-color: ${(props) => (props.active ? "#3b82f6" : "#f3f4f6")};
  color: ${(props) => (props.active ? "white" : "#4b5563")};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.active ? "#2563eb" : "#e5e7eb")};
  }
`;

interface TaskFilterProps {
  currentFilter: FilterStatus;
  onFilterChange: (filter: FilterStatus) => void;
  taskCounts: {
    all: number;
    active: number;
    completed: number;
  };
}

export function TaskFilter({
  currentFilter,
  onFilterChange,
  taskCounts,
}: TaskFilterProps) {
  const filters: { value: FilterStatus; label: string }[] = [
    { value: "all", label: `All (${taskCounts.all})` },
    { value: "active", label: `Active (${taskCounts.active})` },
    { value: "completed", label: `Completed (${taskCounts.completed})` },
  ];

  return (
    <FilterContainer>
      {filters.map(({ value, label }) => (
        <FilterButton
          key={value}
          active={currentFilter === value}
          onClick={() => onFilterChange(value)}
        >
          {label}
        </FilterButton>
      ))}
    </FilterContainer>
  );
}
