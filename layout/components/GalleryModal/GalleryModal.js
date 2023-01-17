import { createPortal } from "react-dom";
import { useState } from "react";
import { useRouter } from "next/router";

const GalleryModal = ( {children} ) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return createPortal(
    <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
      {children}
    </div>,
    document.getElementById('modal-root')
  );
};

export default GalleryModal;