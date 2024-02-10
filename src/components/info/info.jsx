import { useState } from "react";
import sample from "../feed/frederic-daoust-03.jpeg"
import sample2 from "../../images/quanyi-yanshi-333.jpg"
import sample3 from "../../images/quanyi-yanshi-333 (1).jpg"
import { CiHeart ,CiBookmark} from "react-icons/ci";
import { FaBookmark, FaHeart , FaRegBookmark, FaRegHeart } from "react-icons/fa";
// using tailwind css
const Info=()=>{
    const [like,setLike]=useState(true)
    const [save,setSave]=useState(true)
    return(
        <>
            <div className="imagearea  mt-4 mr-96 rounded-md p-4 ">
                <img src={sample2} alt="" className="w-full mb-4" />
                <img src={sample3} alt="" className="w-full mb-4 " />
            </div>
            <div className="sidebar fixed top-0 bottom-0 right-0 bg-blue-300 w-96 overflow-scroll shadow-md">
                <div className="box1"></div>
                <div className="main p-6 ">
                    <div className="b1 flex mb-4 ">
                    <div className="image">
                        <img src={sample} alt="" className=" rounded-2xl h-16 w-16 mr-2 border border-black " />
                    </div>
                    <div className="rr text-left ml-2">
                    <div className="username text-xl flex flex-col ">Shivam Gupta
                    <div className="desig text-sm text-gray-500">Full Stack Web developer</div></div>
                    </div>
                    </div>
                    {/* <div className="title">
                        Live Money Tracking Project
                    </div> */}
                    <div className="flex">
                    <button 
                        className="like flex bg-blue-700 font-semibold font-serif text-white py-1 px-12 text-lg text-center rounded-xl items-center mr-2 " 
                        onClick={() => setLike(!like)}
                        >
                        {like ? <FaRegHeart className="mr-1" /> : <FaHeart className="mr-1" />}
                        Like
                        </button>

                    <button className="save flex  bg-blue-700 font-semibold font-serif text-white py-1 px-12 text-lg rounded-xl items-center " onClick={() => setSave(!save)}>{save ? <FaRegBookmark className=" mr-1 " />:<FaBookmark className=" mr-1 "/>}Save</button>
                    <button className="share"></button>
                    </div>
                </div>
                <div className="desc"></div>
                <div className="tags"></div>
                <div className="comments"></div>
                <div className="box2 px-3 mt-3">
                    <div className="title font-bold text-xl text-left ">Live Money Tracking Project</div>
                    <div className="description text-left text-sm text-black mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius inventore necessitatibus mollitia a amet, qui laboriosam fugit expedita? Aliquam, dicta, molestiae animi laudantium aliquid nobis accusantium saepe, fuga sapiente quibusdam id inventore.</div>
                    <div className="tags flex mt-2 ">
                        <div className="tag1 mr-2 bg-gray-500/50 rounded-lg capitalize p-1 text-sm text-black/50">#React</div>
                        <div className="tag2 mr-2 bg-gray-500/50 rounded-lg capitalize p-1 text-sm text-black/50">#Node</div>
                        <div className="tag3 mr-2 bg-gray-500/50 rounded-lg capitalize p-1 text-sm text-black/50">#MongoDB</div>
                    </div>
                    <button className="coll font-semibold text-white bg-blue-700 px-12 rounded-full py-1 mt-4 w-auto block ">Collaborate</button>
                </div>
                <div className="box3 mt-4 p-4">
                    <div className="comments flex mb-2">
                        <img src={sample} alt="" className=" rounded-full h-16 w-16 mr-2 border border-black " />
                        <div className="right-comment flex flex-col items-start h-16">
                            <div className="usename font-semibold">Ramu Kumar</div>
                            <div className="comment text-sm overflow-x-scroll">Experrienced Loved it very much!</div>
                        </div>
                    </div>
                    <div className="comments flex mb-2">
                        <img src={sample} alt="" className=" rounded-full h-16 w-16 mr-2 border border-black " />
                        <div className="right-comment flex flex-col items-start h-16">
                            <div className="usename font-semibold">Ramu Kumar</div>
                            <div className="comment text-sm overflow-x-scroll">Experrienced Loved it very much!</div>
                        </div>
                    </div>
                    <div className="comments flex mb-2">
                        <img src={sample} alt="" className=" rounded-full h-16 w-16 mr-2 border border-black " />
                        <div className="right-comment flex flex-col items-start h-16">
                            <div className="usename font-semibold">Ramu Kumar</div>
                            <div className="comment text-sm overflow-x-scroll">Experrienced Loved it very much!</div>
                        </div>
                    </div>
                    <div className="com relative">
                        <input type="text" className="comm p-2 border border-black rounded-full  pr-24 pl-4"  placeholder="Write....." />
                        <button className="subcom absolute bg-blue-600 text-white font-semibold right-2 top-1 py-1 px-2 rounded-full ">Comment</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Info