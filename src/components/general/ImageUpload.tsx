"use client";
import { UploadButton } from "@/utils/uploadthing";
import { useAlert } from "@/context/AlertContext";
export default function ImageUpload() {
    const { showAlert } = useAlert();
    return (
        <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res: any) => {
                showAlert("Image Uploaded Successfully", 'SUCCESS');
            }}
            onUploadError={(error: Error) => {
                showAlert(error.message, 'ERROR');
            }}
        />
    )
}
