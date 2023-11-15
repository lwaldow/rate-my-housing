import RatingCard from "@/components/RatingCard";
import { Stack } from "@mui/material";


export default function Page({ params }: { params: { listingId: string } }) {
    return (
        <div>
            <div className="flex justify-center text-white font-serif text-xl sticky top-0 border bg-red-900 z-10">
                {`You Are Rating: ${params.listingId}`}
            </div>
            <Stack textAlign='center' spacing={2} sx={{ margin: "3rem" }}>
                <RatingCard />
                <RatingCard />
                <RatingCard />
                <RatingCard />
                <RatingCard />
                <RatingCard />
                <RatingCard />
                <RatingCard />
                <RatingCard />
                <RatingCard />
                <RatingCard />
                <RatingCard />
            </Stack>
        </div>)
}