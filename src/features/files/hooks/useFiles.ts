import { useState, useEffect } from "react";
import { getFiles } from "../services/fileService";
import { requestStoragePermission } from "../../../utilities/helper";

export const useFiles = () => {
    const [files, setFiles] = useState([]);
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
            setFiles(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { files, loading, error };
};