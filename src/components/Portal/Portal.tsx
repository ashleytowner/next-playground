"use client";
import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  children: ReactNode;
}

export default function Portal({ children }: PortalProps) {
  const mount = document.getElementById('portal-root');
  const el = document.createElement('div');

  useEffect(() => {
    mount?.appendChild(el);
    return () => { mount?.removeChild(el) };
  }, [el, mount]);

  return createPortal(children, el);
}
