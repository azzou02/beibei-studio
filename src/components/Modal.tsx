'use client';

import { ReactNode, MouseEvent } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ onClose, children }: ModalProps) {
  // Render nothing on server
  if (typeof document === 'undefined') return null;

  return createPortal(
    <div
      className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center overflow-auto"
      onClick={onClose}
    >
      <div onClick={(e: MouseEvent) => e.stopPropagation()}
           className="bg-white rounded-lg shadow-xl max-w-4xl max-h-[80vh] 
                      overflow-y-auto w-full m-8 p-6 relative"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl leading-none">
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
