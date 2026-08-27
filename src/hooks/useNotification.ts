import { NotificationErrors, NotificationForm } from "@/types/notification";
import { useState } from "react";

export function useNotification() {

    const [notification, setNotification] = useState<NotificationForm>({
        title: "",

        message: "",
        
        plotId: ""
    });

    const [errors, setErrors] = useState<NotificationErrors>({});

    const [open, setOpen] = useState(false);

    return {
        notification,
        setNotification,
        errors,
        setErrors,
        open,
        setOpen
    }
}