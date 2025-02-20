export interface Task {
  id: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

export type FilterStatus = "all" | "active" | "completed";
