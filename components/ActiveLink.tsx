import { CSSProperties, FC } from "react";
import { useRouter } from "next/router"

import Link from "next/link"



const style: CSSProperties = {
    color: '#E8D94C',
    textDecoration:'underline',
}

interface Props {
    text : string;
    href: string;
}


export const ActiveLink: FC<Props> = ({ text, href }) => {

    const {asPath} = useRouter();

    return (
        <Link href={href} style={asPath === href ? style : undefined}>
            {text}
        </Link>
    )
}
