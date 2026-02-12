
export const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 B';

    const kb = bytes / 1024;
    const mb = kb / 1024;

    if (mb >= 1) {
        return `${mb.toFixed(2)} MB`;
    } else {
        return `${kb.toFixed(2)} KB`;
    }
};
