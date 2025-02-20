import React from "react";
import { CheckSquare } from "lucide-react";
import styled from "styled-components";
import { Task, FilterStatus } from "./types";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { TaskList } from "./components/TaskList";
import { TaskFilter } from "./components/Filter";
import { TaskInput } from "./components/Input";

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;
`;

const Content = styled.div`
  max-width: 42rem;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #111827;
`;

const Logo = styled(CheckSquare)`
  color: #3b82f6;
`;

function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);
  const [filter, setFilter] = useLocalStorage<FilterStatus>("filter", "all");

  const addTask = (description: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      description,
      completed: false,
      createdAt: new Date(),
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const taskCounts = {
    all: tasks.length,
    active: tasks.filter((task) => !task.completed).length,
    completed: tasks.filter((task) => task.completed).length,
  };

  return (
    <AppContainer>
      <Content>
        <Header>
          <Logo size={32} />
          <Title>Task Manager</Title>
        </Header>

        <TaskInput onAddTask={addTask} />
        <TaskFilter
          currentFilter={filter}
          onFilterChange={setFilter}
          taskCounts={taskCounts}
        />
        <TaskList
          tasks={filteredTasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
      </Content>
    </AppContainer>
  );
}

export default App;
