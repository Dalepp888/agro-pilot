"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function createConversation() {

    const conversation = await prisma.$transaction(async (tx) => {

        await tx.conversation.deleteMany({
            where: {
                messages: {
                    none: {},
                },
            },
        });

        return await tx.conversation.create({
            data: {},
        });
    });

    return {
        success: true,
        data: conversation,
    };
}

export async function startNewConversation() {

    const { data } = await createConversation();

    redirect(`/IA?c=${data.id}`);
}

export async function getOrCreateConversation() {

    const lastConversation = await prisma.conversation.findFirst({
        orderBy: {
            updatedAt: "desc",
        },
        include: {
            _count: {
                select: {
                    messages: true,
                },
            },
        },
    });

    if (lastConversation && lastConversation._count.messages === 0) {
        return {
            success: true,
            data: lastConversation,
        };
    }

    const conversation = await prisma.conversation.create({
        data: {},
    });

    return {
        success: true,
        data: conversation,
    };
}

export async function getConversations() {
    return await prisma.conversation.findMany({
        where: {
            messages: {
                some: {},
            },
        },
        orderBy: {
            updatedAt: "desc",
        },
        take: 20,
        select: {
            id: true,
            title: true,
            createdAt: true,
            updatedAt: true,
            _count: {
                select: {
                    messages: true,
                },
            },
        },
    });
}

export async function deleteConversation(id: string) {
    try {
        await prisma.conversation.delete({
            where: {
                id,
            },
        });

        return {
            success: true,
        };
    } catch (error) {
        console.error(error);

        return {
            success: false,
            error: "No se pudo eliminar la conversación.",
        };
    }
}