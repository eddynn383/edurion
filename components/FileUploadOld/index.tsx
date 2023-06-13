"use client"

import React, { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import Image from "next/image";
import FilePreview from "../FilePreview";

import Icon from "../Icon";
import Button from "@/components/Button";
import sx from "@/styles/component.module.scss"

const FileUpload = ({ data, dispatch, id, shade = "100", submit }: any) => {
    const [file, setFile] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string>("");
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    console.log(previewUrl)

    // onDragEnter sets inDropZone to true
    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true });
    };

    // onDragL  eave sets inDropZone to false
    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();

        dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
    };

    // onDragOver sets inDropZone to true
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();

        // set dropEffect to copy i.e copy of the source item
        e.dataTransfer.dropEffect = "copy";
        dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true });
    };

    // onDrop sets inDropZone to false and adds files to fileList
    const handleDrop = (e: React.DragEvent<any>) => {
        e.preventDefault();
        e.stopPropagation();

        // get files from event on the dataTransfer object as an array
        //@ts-ignore
        let files = [...e.dataTransfer.files];

        // ensure a file or files are dropped
        if (files && files.length > 0) {
            // loop over existing files
            const existingFiles = data.fileList.map((f: { name: any; }) => f.name);
            // check if file already exists, if so, don't add to fileList
            // this is to prevent duplicates
            files = files.filter((f) => !existingFiles.includes(f.name));

            // dispatch action to add droped file or files to fileList
            dispatch({ type: "ADD_FILE_TO_LIST", files });
            // reset inDropZone to false
            dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });

            setPreviewImage(URL.createObjectURL(files[0]));
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<any>) => {
        let files = [...e.target.files];
        if (files && files.length > 0) {
            const existingFiles = data.fileList.map((f: { name: any }) => f.name);
            files = files.filter((f) => !existingFiles.includes(f.name));
            dispatch({ type: "ADD_FILE_TO_LIST", files });
            setPreviewImage(URL.createObjectURL(files[0]));
        }
    }

    const removeFile = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setPreviewImage("")
        setFile(null);
        setPreviewUrl(null);
    };

    const uploadFiles = async () => {
        setLoading(true)
        try {
            let files = data.fileList;
            const formData = new FormData();
            files.forEach((file: string | Blob) => formData.append("files", file));

            console.log(files)
        } catch (error) {

        }

        // const response = await fetch("/api/fileupload", {
        //     method: "POST",
        //     body: formData,
        // });
        // if (response.ok) {
        //     alert("Files uploaded successfully");
        // } else {
        //     alert("Error uploading files");
        // }
        setLoading(false)
    };

    useEffect(() => {
        if (data.fileList.length > 0) {
            uploadFiles()
        }
    }, [data.fileList])

    return (
        <>
            <div
                className={sx["dropzone"]}
                data-shade={shade}
                onDrop={(e) => handleDrop(e)}
                onDragOver={(e) => handleDragOver(e)}
                onDragEnter={(e) => handleDragEnter(e)}
                onDragLeave={(e) => handleDragLeave(e)}
            >
                {previewImage ? (
                    <div className={sx["dropzone-inner"]}>
                        <Image
                            className={sx["dropzone-preview"]}
                            alt="file uploader preview"
                            src={previewImage}
                            width={320}
                            height={218}
                        />
                        <Button type="button" mode="secondary" variant="solid" status="accent" size="XS" onClick={removeFile}><Icon value="close" /></Button>
                    </div>
                ) : (
                    <div className={sx["dropzone-inner"]}>
                        <span className={sx["dropzone-icon"]}>
                            <Icon value="upload" />
                        </span>
                        <input id={id} type="file" multiple className={sx["dropzone-input"]} onChange={(e) => handleFileSelect(e)} />
                        <span className={sx["dropzone-message"]}>
                            <span className={sx["dropzone-text"]}>Drop your file here, or <label className={sx["dropzone-message-link"]} htmlFor={id}>browse</label></span>
                            <span className={sx["dropzone-hint"]}>SVG, PNG, JPG or JPEG (rec. 1280x720)</span>
                        </span>
                    </div>
                )}
            </div>
            {/* Pass the selectect or dropped files as props */}
            {/* <FilePreview fileData={data} /> */}
            {/* Only show upload button after selecting atleast 1 file */}

            {/* <Button type={"button"} size={"xsmall"} onClick={uploadFiles}>Upload</Button> */}
        </>
    );
};

export default FileUpload;