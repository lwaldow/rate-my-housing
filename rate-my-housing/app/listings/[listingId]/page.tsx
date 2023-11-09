import { useRouter } from 'next/router'

export default function Page({ params }: { params: { listingId: string } }) {
    return <div>My Post: {params.listingId}</div>
}