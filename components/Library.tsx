'use client';

import { TbPlaylist } from 'react-icons/tb';
import { AiOutlinePlus } from 'react-icons/ai';
import useAuthModal from '@/hooks/useAuthModal';
import { useUser } from '@/hooks/useUser';
import useUploadModal from '@/hooks/useUploadModal';
import { Song } from '@/types';
import MediaItem from './MediaItem';

interface LibraryProps {
    songs: Song[];
}

const Library: React.FC<LibraryProps> = ({
    songs
}) => {

    const authModal = useAuthModal();
    const uploadModal = useUploadModal();
    const { user } = useUser();

    const onClick = () => {
        if (!user) {
            return authModal.onOpen();
        }

        // check for subscription first!
        return uploadModal.onOpen();
    }

    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between px-5 pt-4">
                <div className="inline-flex items-center gap-x-2">
                    <TbPlaylist size={26} className='text-neutral-400' />
                    <p className='font-medium text-neutral-400 text-md'>
                        Your Library
                    </p>
                </div>
                <div>
                    <AiOutlinePlus size={20} onClick={onClick} className='transition cursor-pointer text-neutral-400 hover:text-white' />

                </div>
            </div>
            <div className='flex flex-col px-3 mt-4 gap-y-2'>
                {songs.map((song) => (
                    <MediaItem onClick={() => { }} key={song.id} data={song} />
                ))}
            </div>
        </div>
    );
}

export default Library;