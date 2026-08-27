import { NotificationSchema } from "@/lib/validations/notifications.schema";

export interface NotificationForm {
    title: string;
    message: string;
    plotId: string | null;
}

export interface NotificationContextType {
    notification: NotificationForm;
    setNotification: React.Dispatch<React.SetStateAction<NotificationForm>>;

    errors: NotificationErrors;
    setErrors: React.Dispatch<React.SetStateAction<NotificationErrors>>;

    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;

}

export type NotificationErrors = Partial<
    Record<keyof NotificationSchema, string[]>
>;