'use client';

import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { Song } from "@/types";
import MediaItem from "./MediaItem";
import LikeButton from "./LikeButton";

interface PlayerContentProps {
    songUrl: string;
    song: Song
}

const PlayerContent: React.FC<PlayerContentProps> = ({
    songUrl,
    song
}) => {

    const Icon = true ? BsPauseFill : BsPlayFill;

    return (
        <div className="grid h-full grid-cols-2 md:grid-cols-3">
            <div className="flex justify-start w-full">
                <div className="flex items-center gap-x-4">
                    <MediaItem data={song} />
                    <LikeButton songId={song.id} />
                </div>
            </div>
            <div className="flex items-center justify-end col-auto md:hidden w -full">
                <div onClick={() => { }} className="flex items-center justify-center w-10 h-10 p-1 bg-white rounded-full cursor-pointer">
                    <Icon />
                </div>
            </div>
        </div>
    );
}

export default PlayerContent;