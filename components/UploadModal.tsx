'use client';

import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import Input from "./Input";

const UploadModal = () => {

    const [isLoading, setIsLoading] = useState(false);
    const { isOpen, onClose } = useUploadModal();

    const {
        register,
        handleSubmit,
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            author: '',
            title: '',
            song: null,
            image: null
        }
    });

    const onChange = (open: boolean) => {
        if (!open) {
            reset();
            onClose();
        }
    }

    const onSubmit: SubmitHandler<FieldValues> = async (values) => {
        // upload to supabase
    }


    return (
        <Modal
            title="Add a song"
            description="Upload an mp3 file"
            isOpen={isOpen}
            onChange={onChange}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input id='title' disabled={isLoading} {...register('title', { required: true })} placeholder='Song title' />
            </form>
        </Modal>
    );
}

export default UploadModal;