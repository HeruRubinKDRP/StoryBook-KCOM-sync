// pages/AI/index.tsx
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        redirect: {
            destination: '/AI/home',
            permanent: false,
        },
    };
};

export default function Index() {
    return null;
}
