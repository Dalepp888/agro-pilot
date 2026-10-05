export interface ConversationListItem {
    id: string;
    title: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: {
        messages: number;
    };
}