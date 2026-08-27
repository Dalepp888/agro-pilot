import { MessageRole } from "@/generated/prisma/enums";
import { MessageErrors, MessageForm } from "@/types/message";
import { useState } from "react";

export function useMessage() {

    const [message, setMessage] = useState<MessageForm>({
        role: MessageRole.USUARIO, 

        content: "",
    });

    const [errors, setErrors] = useState<MessageErrors>({});

    const [open, setOpen] = useState(false);

    return {
        message,
        setMessage,
        errors,
        setErrors,
        open,
        setOpen
    }
}