"use client";

import { UploadButton } from "@/utils/uploadthing";
import { UploadDropzone } from "@/utils/uploadthing";


type ImgInputProps = {
  file: File | { url: string, key: string } | null;
  name: string;
  idHtmlFor: string;
  className?: string;
  inputHandler: (url: string, key: string) => void;
};

const ImgInput = ({
  file = null,
  name = "",
  idHtmlFor,
  className = "",
  inputHandler = () => { },
}: ImgInputProps) => {


  const imageStateSetter = (url: string, key: string) => {
    inputHandler(url, key);
  };

  return (
    <>
      <div className="flex gap-4 justify-center">
        <div className="mt-2 ">Upload Cover Image: </div>
        <UploadButton endpoint="imageUploader" onClientUploadComplete={(res) => {
          // Do something with the response
          imageStateSetter(res[0].url, res[0].key);
        }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }} />
      </div>
    </>
  );
};

export default ImgInput;
