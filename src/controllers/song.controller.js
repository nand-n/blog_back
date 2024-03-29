const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { SongService } = require('../services');

const createSong = catchAsync(async (req, res) => {
    const song = await SongService.createSong(req.body);
    res.status(httpStatus.CREATED).send(song);
});

const getSongs = catchAsync(async (req, res) => {
    const result = await SongService.querySongs();
    res.send(result);
});
const getSongByAlbum=catchAsync(async (req,res)=>{
    const result = await SongService.querySongsByAlbum()
    res.send(result)
})
const getSongByArtist=catchAsync(async (req,res)=>{
    const result = await SongService.querySongsByArtist()
    res.send(result)
})
const getSongByGenre=catchAsync(async (req,res)=>{
    const result = await SongService.querySongsByGenre()
    res.send(result)
})
const getSong = catchAsync(async (req, res) => {
    const result = await SongService.getSongById(req.params.id);
    if (!result) {
        throw new ApiError(400, 'Song not found');
    }
    res.status(200).json({
        status: "Success",
        data: result
    });
});
const getStatistics =catchAsync(async (req, res) => {
    const result = await SongService.getStatistics();
    res.status(200).json({
        status: "Success",
        data: result
    });
});

const updateSongById = catchAsync(async (req, res) => {
    const result = await SongService.updateSongById(req.params.id, req.body);
    res.status(200).send(result);

});
const deleteSongById = catchAsync(async (req, res) => {
    const result = await SongService.deleteSongById(req.params.id);
    res.status(200).send(result);
});

module.exports = {
    createSong,
    getSongs,
    getSong,
    updateSongById,
    deleteSongById,
    getStatistics,
    getSongByAlbum,
    getSongByArtist,
getSongByGenre
};
