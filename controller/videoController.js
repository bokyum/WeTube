import routes from "../routes";
import Video from "../models/Video";
// default export 시에는 import { routes } from "../routes";로 입력시 오류가 발생함

export const home = async (req, res) => {
    try {
        const videos = await Video.find({});
        res.render("home", {pageTitle: "Home", videos});
    } catch (error) {
        console.log(error)
        req.render("home", {pageTitle: "Home", videos: []})
    }
};
// const searchingBy = req.query.term
export const search = (req, res) => {
    const {
        query: {term: searchingBy}
    } = req;
    res.render("search", {pageTitle: "Search", searchingBy, videos});
};


//export const videos = (req, res) => res.render("videos");
export const getUpload = (req, res) => res.render("upload", {pageTitle: "Upload"});

export const postUpload = async (req, res) => {
    const {
        body: {title, description},
        file: {path}
    } = req;
    // To Do: Upload ans Save 
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });
    res.redirect(routes.videoDetail(newVideo.id));
};


export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle: "Videos Detail"});
export const editVideo = (req, res) => res.render("editVideo", {pageTitle: "Edit Video"});
export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle: "Delete Video"});