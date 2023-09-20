// pages/AI/[category].tsx

import dynamic from 'next/dynamic';
import React from "react";
import { useRouter } from "next/router";
import {GetServerSideProps} from "next";

export const getServerSideProps : GetServerSideProps  = async (context) => {
    const { category } = context.query;

    if (!category) {
        return {
            redirect: {
                destination: '/AI/home',
                permanent: false,
            },
        };
    }

    return {
        props: { category },
    };
};

const ChatArea = dynamic(() => import('../../components/Chat/ChatArea/ChatArea'), {
    ssr: false,
});

const Category: React.FC<{ category: string | string[] | undefined }> = ({ category }) => {
    const router = useRouter();

    if (!category) {
        return null; // Or a loading spinner
    }

    return (
        <>
            <ChatArea currentRoute={category as string} />
        </>
    );
};

export default Category;
