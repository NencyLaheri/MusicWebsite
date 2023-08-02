type POST = {
    id:string;
    name:string;
    desc:string;
    date:Date;
}


let posts = POST[] = [];


export const getposts = ()=> posts;

export const addposts = (post:POST)=>{
    posts.push(post);
}