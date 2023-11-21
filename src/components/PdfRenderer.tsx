"use client";

import { ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { useToast } from "./ui/use-toast";
import { useResizeDetector } from "react-resize-detector";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface PdfRendererProps {
  url: String;
}

const PdfRenderer = ({ url }: PdfRendererProps) => {
  const [numPages, setNumPages] = useState<number>();
  const [curPage, setCurPage] = useState(1);
  const { toast } = useToast();

  const { width, ref } = useResizeDetector();

  return (
    <div className="w-full bg-white rounded-md shadow flex flex-col items-center">
      <div className="h-14 w-full border-b border-zinc-200 flex items-center justify-between px-2">
        <div className="flex items-center gap-1.5">
          <Button
            disabled={curPage <= 1}
            onClick={() => {
              setCurPage((prev) => (prev - 1 > 1 ? prev - 1 : 1));
            }}
            variant="ghost"
            aria-label="Previous Page"
            className="hover:bg-purple-200"
          >
            <ChevronDown className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-1.5">
            <Input className="w-12 h-8" />
            <p className="text-zinc-700 text-sm space-x-1">
              <span>/</span>
              <span>{numPages ?? "Loading..."}</span>
            </p>
          </div>
          <Button
            disabled={numPages === undefined || curPage === numPages}
            onClick={() => {
              setCurPage((prev) =>
                prev + 1 > numPages! ? numPages! : prev + 1
              );
            }}
            variant="ghost"
            aria-label="Next Page"
            className=""
          >
            <ChevronUp className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex-1 w-full max-h-screen">
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
            file={url}
            className="max-h-full"
          >
            <Page width={width ? width : 1} pageNumber={curPage} />
          </Document>
        </div>
      </div>
    </div>
  );
};

export default PdfRenderer;
