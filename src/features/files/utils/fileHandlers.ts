import { FileItem } from "../types";



export const getFileAction = (item: FileItem) => {
    const isImage = /\.(jpg|jpeg|png)$/i.test(item.name);

    if (item.type === 'folder') {
        return 'folder';
    }

    if (item.type === 'file' && isImage) {
        return 'image';
    }

    return 'other';
};