
// this function generate song id from youtube video link
export default function (url) {

    const regExp = /^.*((youtu\.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?v=)|(&v=))([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[8].length === 11 ? match[8] : null;
} 