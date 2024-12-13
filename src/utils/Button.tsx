
import { Plus } from 'lucide-react';

interface buttonProps {
    title: string; // The title that will be displayed inside the button
    perform: () => any; // The perform function that will be called on button click
  }

function Button({title, perform}: buttonProps) {

  return (
    <button
            onClick={() => perform()}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            <Plus className="w-5 h-5" />
            {title}
          </button>
  );
}

export default Button;