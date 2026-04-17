export type FileItem = {
    name: string;
    path: string;
    isFile: boolean;
    type: 'file' | 'folder';
    isDirectory: boolean;
    size: number;
    modified?: Date;
};