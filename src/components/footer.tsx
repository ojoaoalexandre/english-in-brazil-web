import Image from 'next/image';
import Link from 'next/link';
import { useProfile } from '@/lib/Context/Profile';

const Footer = () => {
    const { profile } = useProfile();
    const { links = [], logo } = profile.footer || {};
    const part = Math.ceil(links.length / 2);
    const linksLeft = links.slice(0, part);
    const linksRight = links.slice(part);

    const getThumbnail = () => logo?.data?.attributes?.url
        ? `https://cadastro.englishinbrazil.com.br${logo.data.attributes.url}`
        : null;

    return (
        <footer className="flex flex-col bg-gray-200 dark:bg-theme-gray-900 py-4 rounded-md">
            <section className="flex flex-col gap-4 md:flex-row justify-between p-4 md:mx-12">
                {logo && (
                    <div className="flex justify-center">
                        <Image
                            loader={getThumbnail}
                            src="thumbnail.png"
                            alt="Footer Logo"
                            className="rounded-lg object-cover"
                            width={120}
                            height={120}
                            quality={100}
                        />
                    </div>
                )}
                <ul className="flex flex-col px-4">
                    {linksLeft.map((link) => (
                        <li key={link.id} className="font-medium text-gray-600 dark:text-gray-200">
                            <Link href={link.url}>{link.titulo}</Link>
                        </li>
                    ))}
                </ul>
                <ul className="flex flex-col px-4">
                    {linksRight.map((link) => (
                        <li key={link.id} className="font-medium text-gray-600 dark:text-gray-200">
                            <Link href={link.url}>{link.titulo}</Link>
                        </li>
                    ))}
                </ul>
            </section>
        </footer>
    );
};

export default Footer;
