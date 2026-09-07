export type TodoStatus = 'pending' | 'completed';
export type TodoPriority = 'low' | 'medium' | 'high';
export type TodoCategory = 'work' | 'personal' | 'shopping' | 'health' | 'other';

export interface Todo {
  id: string;
  title: string;
  description?: string;
  status: TodoStatus;
  priority: TodoPriority;
  category: TodoCategory;
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
  tags?: string[];
}
