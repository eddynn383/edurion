"use client"

import { useCallback, useEffect, useState } from "react";
import { DropEvent, DropzoneInputProps, DropzoneRootProps, FileRejection, useDropzone } from 'react-dropzone'
import Image from "next/image";

import Button from "@/components/Button";
import Link from "@/components/Link";
import Icon from "@/components/Icon";
import { formatFileSize } from "@/lib/utils"

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { getSignature, saveToDatabase } from "@/app/_actions";
import useFileUpload from "@/hooks/useFileUpload";
import sx from "@/styles/component.module.scss"
import useCourseFields from "@/hooks/useCourseFields";

export interface FileWithPreview extends File {
    preview: string;
}

interface RejectedFile {
    file: File;
    errors: { code: string; message: string }[];
}

interface FileUploadProps {
    id: string;
    shade?: string;
    acceptedFiles?: any;
    acceptedSpecificFiles?: string[];
    multiple?: boolean;
    fileLimit?: number;
    onUpload?: (id: string) => void;
    formAction?: (formData: FormData) => void;
}

const FileUpload = ({ id, shade = "100", acceptedFiles = "image", acceptedSpecificFiles = [], multiple = false, fileLimit, onUpload, formAction }: FileUploadProps) => {
    // const [files, setFiles] = useState<FileWithPreview[]>([])
    // const [selectedImage, setSelectedImage] = useState<any>();
    const [rejected, setRejected] = useState<RejectedFile[]>([])
    const [focus, setFocus] = useState<boolean>(false)
    const [validFiles, setValidFiles] = useState<boolean>(false)
    const [invalidFiles, setInvalidFiles] = useState<boolean>(false)
    const { image, setImage } = useCourseFields()
    const { files, setFiles } = useFileUpload()
    const [uploadProgress, setUploadProgress] = useState<number>(0);
    const [uploading, setUploading] = useState<boolean>(false);

    let fileCategory
    switch (acceptedFiles) {
        case "image": fileCategory = { 'image/*': acceptedSpecificFiles }
            break;
        case "video": fileCategory = { 'video/*': acceptedSpecificFiles }
            break;
        default: fileCategory = undefined
            break;
    }

    // console.log(fileCategory)

    const onDrop = useCallback((acceptedFiles: File[], fileRejections: FileRejection[], event: DropEvent) => {
        console.log(acceptedFiles)
        setFocus(false);

        if (acceptedFiles?.length) {
            setFiles(previousFiles => [
                // If allowing multiple files
                ...previousFiles,
                ...acceptedFiles.map((file) =>
                    Object.assign(file, { preview: URL.createObjectURL(file) })
                )
            ])
        }

        if (fileRejections?.length) {
            setRejected(previousFiles => [...previousFiles, ...fileRejections.map(({ file, errors }) => ({
                file,
                errors
            }))])
        }
    }, [])

    const onDragEnter = useCallback(() => {
        setFocus(true)
    }, [])

    const onDragLeave = useCallback(() => {
        setFocus(false)
    }, [])

    const { getRootProps, getInputProps, open, isDragAccept, isDragReject, isDragActive }: {
        getRootProps: (props?: DropzoneRootProps) => DropzoneRootProps;
        getInputProps: (props?: DropzoneInputProps) => DropzoneInputProps;
        open: () => void;
        isDragAccept: boolean;
        isDragReject: boolean;
        isDragActive: boolean;
    } = useDropzone({
        accept: fileCategory,
        multiple,
        maxSize: 3000 * 3000,
        maxFiles: multiple ? fileLimit : 1,
        noClick: true,
        noKeyboard: true,
        onDrop,
        onDragEnter,
        onDragLeave
    })

    // useMemo(() => ({
    //     if (is) {

    //     }
    //     isFocused ? setFocus(true) : setFocus(false)
    //     // ...baseStyle,
    //     // ...(),
    //     // ...(isDragAccept ? acceptStyle : {}),
    //     // ...(isDragReject ? rejectStyle : {})
    // }), [
    //     isFocused,
    //     // isDragAccept,
    //     // isDragReject
    // ]);

    useEffect(() => {
        // Revoke the data uris to avoid memory leaks
        return () => files.forEach(file => URL.revokeObjectURL(file.preview))
    }, [files])

    const removeFile = (name: any) => {
        setFiles(files => files.filter(file => file.name !== name))
    }

    // const removeAll = () => {
    //     setFiles([])
    //     setRejected([])
    // }

    // const removeRejected = (name: any) => {
    //     setRejected(files => files.filter(({ file }) => file.name !== name))
    // }

    async function action(files: any) {
        const file = files[0]
        console.log("this is uploadImage action function")
        console.log(file)
        if (!file) return
        // setImage(files)

        // get a signature using server action
        const { timestamp, signature } = await getSignature()

        // upload to cloudinary using the signature
        const formData = new FormData()

        formData.append('file', file)
        formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY as string)
        formData.append('signature', signature)
        formData.append('timestamp', timestamp)
        formData.append('folder', 'next')

        const endpoint = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL as string;
        const res = await fetch(endpoint, {
            method: 'POST',
            body: formData,
            // onUploadProgress: (progressEvent: ProgressEvent) => {
            //     const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            //     setUploadProgress(progress);
            // }
        }).then(res => res.json())

        // const data = await res.json();

        // console.log(data)

        // write to database using server actions
        // const imageUrl: any = await saveToDatabase({
        //     version: res?.version,
        //     signature: res?.signature,
        //     public_id: res?.public_id
        // })

        // console.log(imageUrl)
        // function onUpload(imageUrl: any) {
        //     return imageUrl
        // }

    }

    const fileTypes = (type: string) => {
        let fileIcons = "upload"
        if (!type) return fileIcons

        if (type.indexOf('image') > -1) fileIcons = "image"
        if (type.indexOf('video') > -1) fileIcons = "video"

        return <Icon value={fileIcons as IconProp} />
    }

    useEffect(() => {
        // onUpload(files)
        action(files)
    }, [files])

    // const testFunction = () => {
    //     return "rrrrrr"
    // }

    return (
        <div
            {...getRootProps({
                className: sx["dropzone"],
                "data-shade": shade,
                "data-focus": focus,
                "data-selected": files.length > 0,
                "data-status": validFiles ? "success" : invalidFiles ? "fail" : "default"
                // noClick: true
            })}
            style={{ backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='${focus ? '%231C6BBA' : '%23C4CCD0'}' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='4' stroke-linecap='butt'/%3e%3c/svg%3e")` }}
        >
            {!files.length ? (
                <div className={sx["dropzone-inner"]}>
                    <div className={sx["dropzone-placeholder"]}>
                        <span className={sx["dropzone-icon"]}>
                            <Icon value="upload" />
                        </span>
                        <span className={sx["dropzone-message"]}>
                            {
                                isDragActive ? (
                                    <span className={sx["dropzone-text"]}>Drop your file here</span>
                                ) : (
                                    <span className={sx["dropzone-text"]}>Drag and drop or <Link onClick={open}>browse</Link> to select the files</span>
                                )
                            }
                            <input id={id} {...getInputProps()} />
                            <span className={sx["dropzone-hint"]}>SVG, PNG, JPG or JPEG (rec. 1280x720)</span>
                        </span>
                    </div>
                </div>
            ) : (

                !multiple && files.map((file, key) => (
                    <div className={sx["dropzone-file"]} key={key}>
                        <Image
                            src={file.preview}
                            alt={file.name}
                            width={320}
                            height={218}
                            onLoad={() => {
                                URL.revokeObjectURL(file.preview)
                            }}
                            className={sx["dropzone-preview"]}
                        />
                        <div className={sx["dropzone-file-details"]}>
                            <span className={sx["dropzone-file-icon"]}>
                                {fileTypes(file.type)}
                            </span>
                            <div>
                                <h4 className={sx["dropzone-file-name"]}>{file.name}</h4>
                                <span className={sx["dropzone-file-size"]}>{formatFileSize(file.size)}</span>
                            </div>
                            <Button type="button" mode="secondary" variant="solid" status="fail" size="S" onClick={() => removeFile(file.name)}><Icon value="trash" /></Button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default FileUpload;