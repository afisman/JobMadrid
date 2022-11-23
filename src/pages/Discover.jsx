import { genres } from '../assets/constants';
import { useState, useEffect } from "react";
import { songData } from '../utils/songData.JSON'

const Discover = () => {
    const genreTitle = 'Pop';

    const [data, setData] = useState(['Loud', 'Dancing', 'Energy']);
    const [energyMusic, setEnergyMusic] = useState([])
    const [dancingMusic, setDancingMusic] = useState([])
    const [loudMusic, setLoudMusic] = useState([])
    const [songList, setSongList] = useState([])
    const [concertTime, setConcertTime] = useState(0)


    const handleLoudClick = () => {
        const loudSongs = []
        songData.map((item) => {
            if (parseInt(item.Estridente) > 4703) {
                loudSongs.push(item)
            }
        })
        setConcertTime(loudSongs.reduce((acc, e) => {
            return acc += parseInt(e.dur)
        }, 0))
        console.log(loudSongs.reduce((acc, e) => {
            return acc += parseInt(e.dur)
        }, 0))
        setEnergyMusic([])
        setDancingMusic([])
        setLoudMusic(loudSongs)

    }

    const handleEnergyClick = () => {
        const energySongs = []
        songData.map((item) => {
            if (parseInt(item.Energia) > 6050) {
                energySongs.push(item)
            }
        })
        setConcertTime(energySongs.reduce((acc, e) => {
            return acc += parseInt(e.dur)
        }, 0))
        console.log(energySongs.reduce((acc, e) => {
            return acc += parseInt(e.dur)
        }, 0))
        setLoudMusic([])
        setDancingMusic([])
        setEnergyMusic(energySongs)

    }

    const handleDancingClick = () => {
        const dancingSongs = []
        songData.map((item) => {
            if (parseInt(item.Bailable) > 5900) {
                dancingSongs.push(item)
            }
        })
        setConcertTime(dancingSongs.reduce((acc, e) => {
            return acc += parseInt(e.dur)
        }, 0))
        console.log(dancingSongs.reduce((acc, e) => {
            return acc += parseInt(e.dur)
        }, 0))
        setEnergyMusic([])
        setLoudMusic([])
        setDancingMusic(dancingSongs)

    }

    useEffect(() => {
        if (dancingMusic.length > 0) {
            setSongList(dancingMusic)
        } else if (energyMusic.length > 0) {
            setSongList(energyMusic)
        } else if (loudMusic.length > 0) {
            setSongList(loudMusic)
        }
    }, [dancingMusic, energyMusic, loudMusic])



    return (
        <div className="flex flex-col">
            <div className="w-ful flex justify-between items-center sm:flex-grow flex-col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>
                <select
                    onChange={() => { }}
                    value=''
                    className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
                >
                    {genres.map((genre) => <option key={genre.value}
                        value={genre.value}>{genre.title}</option>)}
                </select>
            </div>
            <div className="flex flex-wrap flex-row justify-center gap-8">
                <div className="flex flex-wrap flex-row justify-center gap-8">
                    <p className='font-semibold tex-lg text-white truncate cursor-pointer' onClick={handleLoudClick}>{data[0]}</p>
                    <p className='font-semibold tex-lg text-white truncate cursor-pointer' onClick={handleDancingClick}>{data[1]}</p>
                    <p className='font-semibold tex-lg text-white truncate cursor-pointer' onClick={handleEnergyClick}>{data[2]}</p>
                </div>
                <hr></hr>

                {songList.length
                    &&
                    songList.map((song) => {

                        return (
                            <div key={song.title} className='flex flex-col'>
                                <p className='font-semibold tex-lg text-gray-400 truncate'>Titulo: {song.title}</p>
                                <p className='font-semibold tex-lg text-gray-400 truncate'>Artista: {song.artist}</p>
                                <p className='font-semibold tex-lg text-gray-400 truncate'>Genero: {song.genre}</p>
                            </div>

                        )
                    })}
                <div className='font-bold tex-lg text-gray-200 truncate'>
                    Duracion del concierto: {concertTime} seg.
                </div>
            </div>
        </div>

    )
};

export default Discover;
