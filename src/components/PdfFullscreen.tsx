import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Expand, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import SimpleBar from "simplebar-react";
import { Document, Page } from "react-pdf";
import { useToast } from "./ui/use-toast";
import { useResizeDetector } from "react-resize-detector";

interface PdfFullscreenProps {
  fileUrl: string;
}

const PdfFullscreen = ({ fileUrl }: PdfFullscreenProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [numPages, setNumPages] = useState<number>();
  const { toast } = useToast();

  const { width, ref } = useResizeDetector();

  return (
    <div>
      <Dialog
        open={isOpen}
        onOpenChange={(v) => {
          if (!v) {
            setIsOpen(v);
          }
        }}
      >
        <DialogTrigger onClick={() => setIsOpen(true)} asChild>
          <Button
            title="Full-Screen Mode"
            arial-label="Full Screen"
            variant="ghost"
            className="gap-1.5"
          >
            <Expand className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-7xl h-full w-full">
          <SimpleBar autoHide={false} className="max-h[calc(100vh-10rem)] mt-6">
            <div ref={ref}>
              <Document
                loading={
                  <div className="flex justify-center">
                    <Loader2 className="my-24 h-6 w-6 animate-spin" />
                  </div>
                }
                onLoadError={() => {
                  toast({
                    title: "Cadis was unable to process your PDF",
                    description: "Please try again later",
                    variant: "destructive",
                  });
                }}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                file={fileUrl}
                className="max-h-full"
              >
                {new Array(numPages).fill(0).map((_, i) => (
                  <Page key={i} width={width ? width : 1} pageNumber={i + 1} />
                ))}
              </Document>
            </div>
          </SimpleBar>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PdfFullscreen;
