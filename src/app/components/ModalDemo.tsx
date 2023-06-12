'use client';

import Modal from "@/components/Modal/Modal";
import { useState } from "react";

export default function ModalDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <button className="btn block m-auto" onClick={() => setOpen(true)}>Open Modal</button>
    <Modal opened={open} onClose={() => setOpen(false)}>
      <h1>This is a modal</h1>
      <p>It uses portals!</p>
    </Modal>
    </>
  )

}
