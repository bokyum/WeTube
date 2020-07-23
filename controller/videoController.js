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


export const videoDetail = async (req, res) => {
    //console.log(req.params);
    const {
        params: {id}
    } = req;
    try {
        const video = await Video.findById(id);
        //console.log(video);
        res.render("videoDetail", {pageTitle: "Videos Detail", video});
    } catch (error){
        console.log(error);
        res.redirect(routes.home);
    }
};


export const getEditVideo = async (req, res) => {
    const {
        params: {id}
    } = req;
    try {
        const video = await Video.findById(id);
        res.render("editVideo", {pageTitle: `Edit ${video.title}`, video})
    } catch (error) { // 이 부분은 middlewares를 통하여 잘못된 id를 처리하는 방법도 있음 
        console.log(error)
        res.redirect(routes.home);
    }
};
export const postEditVideo = async (req, res) => {
    const {
        params: {id},
        body: {title, description}
    } = req;
    try {
        // 변수에 저장하지 않는 이유
        // 정보를 가져올 필요 없이 업데이트만 하면 됨
        await Video.findOneAndUpdate({id}, {title, description});
        res.redirect(routes.videoDetail(id));
    } catch (error) {
        res.redirect(routes.home);
    }
};


export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle: "Delete Video"});