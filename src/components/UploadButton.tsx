"use client";

import React, { useState } from "react";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";
import { Button } from "./ui/button";

const UploadButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpen(v);
        }
      }}
    >
      <DialogTrigger onClick={() => setIsOpen(true)} asChild>
        <Button className="bg-blue-500">Upload PDF</Button>
      </DialogTrigger>
      <DialogContent>Upload PDF File</DialogContent>
    </Dialog>
  );
};

export default UploadButton;
