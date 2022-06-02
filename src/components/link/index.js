import NextLink from 'next/link'

export default function({children, href, ...props}){
    return (
        <NextLink href={href}>
            <a {...props}></a>
        </NextLink>
    )
}