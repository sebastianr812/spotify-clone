'use client';

import LikeButton from "@/components/LikeButton";
import MediaItem from "@/components/MediaItem";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface LikedContentProps {
    likedSongs: Song[];
}

const LikedContent: React.FC<LikedContentProps> = ({
    likedSongs
}) => {

    const router = useRouter();
    const { isLoading, user } = useUser();

    useEffect(() => {
        if (!isLoading && !user) {
            router.replace('/');
        }
    }, [isLoading, user, router]);

    if (likedSongs.length === 0) {
        return (
            <div className="flex flex-col w-full px-6 gap-y-2 text-neutral-400">
                No liked songs.
            </div>
        )
    }

    return (
        <div className="flex flex-col w-full p-6 gap-y-2">
            {likedSongs.map((song) => (
                <div key={song.id} className="flex items-center w-full gap-x-4 ">
                    <div className="flex-1">
                        <MediaItem data={song} onClick={() => { }} />
                    </div>
                    <LikeButton songId={song.id} />
                </div>
            ))}
        </div>
    );
}

export default LikedContent;