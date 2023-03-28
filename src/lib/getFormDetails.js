import axiosInstance from './axiosInstance';


export const getFormDetails = async (id) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/forms/${id}?populate=fields,fields.validation`,
    );
    return await res.json();
};
