import { videos } from "../db";
import routes from "../routes";
// default export 시에는 import { routes } from "../routes";로 입력시 오류가 발생함

export const home = (req, res) => {
    res.render("home", {pageTitle: "Home", videos});
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

export const postUpload = (req, res) => {
    const {
        body: {file, title, description}
    } = req;
    // To Do: Upload ans Save 
    res.redirect(routes.videoDetail(31231));
};


export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle: "Videos Detail"});
export const editVideo = (req, res) => res.render("editVideo", {pageTitle: "Edit Video"});
export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle: "Delete Video"});