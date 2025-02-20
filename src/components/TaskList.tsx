import React from "react";
import { Check, Trash2, Square } from "lucide-react";
import styled from "styled-components";
import { Task } from "../types";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 2rem 0;
  color: #6b7280;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  transition: border-color 0.2s;

  &:hover {
    border-color: #bfdbfe;
  }
`;

const TaskButton = styled.button<{ completed?: boolean }>`
  padding: 0.25rem;
  border-radius: 0.375rem;
  color: ${(props) => (props.completed ? "#22c55e" : "#9ca3af")};
  transition: color 0.2s;

  &:hover {
    color: ${(props) => (props.completed ? "#22c55e" : "#3b82f6")};
  }
`;

const TaskText = styled.span<{ completed: boolean }>`
  flex: 1;
  color: ${(props) => (props.completed ? "#9ca3af" : "#374151")};
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

const DeleteButton = styled.button`
  padding: 0.25rem;
  color: #9ca3af;
  opacity: 0;
  transition: all 0.2s;

  ${ListItem}:hover & {
    opacity: 1;
  }

  &:hover {
    color: #ef4444;
  }
`;

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function TaskList({ tasks, onToggleTask, onDeleteTask }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <EmptyState>No tasks found. Add some tasks to get started!</EmptyState>
    );
  }

  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task.id}>
          <TaskButton
            completed={task.completed}
            onClick={() => onToggleTask(task.id)}
          >
            {task.completed ? <Check size={20} /> : <Square size={20} />}
          </TaskButton>
          <TaskText completed={task.completed}>{task.description}</TaskText>
          <DeleteButton onClick={() => onDeleteTask(task.id)}>
            <Trash2 size={20} />
          </DeleteButton>
        </ListItem>
      ))}
    </List>
  );
}
