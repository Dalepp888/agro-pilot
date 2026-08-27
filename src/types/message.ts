import { MessageRole } from "@/generated/prisma/enums";
import { MessageSchema } from "@/lib/validations/message.schema";

export interface MessageForm {
    role: MessageRole;
    content: string;
}

export interface MessageContextType {
    message: MessageForm;
    setMessage: React.Dispatch<React.SetStateAction<MessageForm>>;

    errors: MessageErrors;
    setErrors: React.Dispatch<React.SetStateAction<MessageErrors>>;

    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;

}

export type MessageErrors = Partial<
    Record<keyof MessageSchema, string[]>
>;