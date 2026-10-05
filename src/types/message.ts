import { MessageRole } from "@/generated/prisma/enums";
import { MessageSchema } from "@/lib/validations/message.schema";

export interface MessageForm {
    role: MessageRole;
    content: string;
}

export interface MessageContextType {
    conversationId: string;

    message: MessageForm;
    setMessage: React.Dispatch<React.SetStateAction<MessageForm>>;

    errors: MessageErrors;
    setErrors: React.Dispatch<React.SetStateAction<MessageErrors>>;

    loading: boolean;

    handleSubmit: () => Promise<void>;

}

export type MessageErrors = Partial<
    Record<keyof MessageSchema, string[]>
>;