import { useState, useEffect } from "react";
import { getFiles } from "../services/fileService";
import { requestStoragePermission } from "../../../utilities/helper";
import { FileItem } from "../types";

export const useFiles = () => {
    const [files, setFiles] = useState<FileItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        try {
            const hasPermission = await requestStoragePermission();

            if (!hasPermission) {
                throw new Error("Permission denied");
            }
            const data = await getFiles();

            const formatted: FileItem[] = data.map(file => ({
                name: file.name,
                path: file.path,
                isFile: file.isFile(),
                isDirectory: file.isDirectory(),
                type: file.isFile() ? 'file' : 'folder',
                size: file.size,
                modified: file.mtime,
            }));
            setFiles(formatted);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { files, loading, error };
};