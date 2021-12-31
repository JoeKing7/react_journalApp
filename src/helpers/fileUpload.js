export const FILE_UPLOAD = async ( file ) => {
    const CLOUD_URL = 'https://api.cloudinary.com/v1_1/dfcwaujo8/upload';
    const FORM_DATA = new FormData();
    FORM_DATA.append('upload_preset', 'react-journal');
    FORM_DATA.append('file', file);
    try {
        const RESP = await fetch( CLOUD_URL, {
            method: 'POST',
            body: FORM_DATA
        });
        if (RESP.ok) {
            const CLOUD_RESP = await RESP.json();
            return CLOUD_RESP.secure_url;
        } else {
            throw await RESP.json();
        }
    } catch (error) {
        console.error(error);
    }
}