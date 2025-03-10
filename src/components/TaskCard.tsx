import { GripVertical } from 'lucide-react';

interface TaskCardProps {
  title: string;
  description?: string;
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent) => void;
}

export function TaskCard({ title, description, draggable, onDragStart }: TaskCardProps) {
  return (
    <div
      draggable={draggable}
      onDragStart={onDragStart}
      className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 cursor-move group"
    >
      <div className="flex items-center gap-2">
        <GripVertical className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
        <h3 className="font-medium text-gray-700">{title}</h3>
      </div>
      {description && (
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      )}
    </div>
  );
}
