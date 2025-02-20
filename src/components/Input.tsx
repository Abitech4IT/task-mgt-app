import React, { useState } from "react";
import { PlusCircle } from "lucide-react";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  margin-bottom: 1.5rem;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2563eb;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }
`;

interface TaskInputProps {
  onAddTask: (description: string) => void;
}

export function TaskInput({ onAddTask }: TaskInputProps) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description.trim()) {
      onAddTask(description.trim());
      setDescription("");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer>
        <Input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add a new task..."
        />
        <Button type="submit">
          <PlusCircle size={20} />
          Add Task
        </Button>
      </InputContainer>
    </Form>
  );
}
