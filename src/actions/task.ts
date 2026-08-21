"use server"

import { prisma } from "@/lib/prisma";
import { taskSchema } from "@/lib/validations/task.schema";

export async function createTask(data: unknown) {

    const result = taskSchema.safeParse(data);

    if (!result.success) {
        return {
            success: false,
            errors: result.error.flatten().fieldErrors,
        };
    }

    const task = await prisma.task.create({
        data: {
            ...result.data,
            dueDate: new Date(result.data.dueDate),
        },
    });

    return {
        success: true,
        data: task,
    };
}

export async function getTask() {
    return await prisma.task.findMany({
        orderBy: {
            createdAt: "desc",
        },
        include: {
            plot: true
        }
    });
}

export async function deleteTask(id: string) {
    try {
        await prisma.task.delete({
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
            error: "No se pudo eliminar la parcela.",
        };
    }
}