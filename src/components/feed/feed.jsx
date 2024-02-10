import styles from "./feed.module.css";
import sample from "./frederic-daoust-03.jpeg"
import { Animate, initTE } from "tw-elements";
initTE({ Animate });
const Feed = () => {
  return (
    <>
      <div className=" feed grid grid-cols-4 gap-4">
        <div className="item overflow-hidden  rounded-xl flex justify-end flex-col items-start text-wrap text-left p-4 relative group hover:bg-gradient-to-t from-black/20 to-white/20 drop-shadow-lg text-white">
          <img src={sample} alt="" className="it absolute w-fit -translate-x-4 translate-y-4" />
          <div className="title capitalize text-xl transition -translate-x-36 opacity-0 group-hover:translate-x-0  group-hover:opacity-100 transition-duration: 200ms">
            college collaboration
          </div>
          <div className="owner capitalize transition-transform transform opacity-0 group-hover:translate-x-0  group-hover:opacity-100 transition-duration: 200ms -translate-x-36">
            By Shivam Gupta
          </div>
        </div>
        <div className="item overflow-hidden bg-orange-300 rounded-xl flex justify-end flex-col items-start text-wrap text-left p-4 relative group hover:bg-gradient-to-t from-black/20 to-white/20 drop-shadow-lg text-white">
          <div className="title capitalize text-xl transition -translate-x-36 opacity-0 group-hover:translate-x-0  group-hover:opacity-100 transition-duration: 200ms">
            college collaboration
          </div>
          <div className="owner capitalize transition-transform transform opacity-0 group-hover:translate-x-0  group-hover:opacity-100 transition-duration: 200ms -translate-x-36">
            By Shivam Gupta
          </div>
        </div>
        <div className="item overflow-hidden bg-orange-300 rounded-xl flex justify-end flex-col items-start text-wrap text-left p-4 relative group hover:bg-gradient-to-t from-black/20 to-white/20 drop-shadow-lg text-white">
          <div className="title capitalize text-xl transition -translate-x-36 opacity-0 group-hover:translate-x-0  group-hover:opacity-100 transition-duration: 200ms">
            college collaboration
          </div>
          <div className="owner capitalize transition-transform transform opacity-0 group-hover:translate-x-0  group-hover:opacity-100 transition-duration: 200ms -translate-x-36">
            By Shivam Gupta
          </div>
        </div>
        <div className="item overflow-hidden bg-orange-300 rounded-xl flex justify-end flex-col items-start text-wrap text-left p-4 relative group hover:bg-gradient-to-t from-black/20 to-white/20 drop-shadow-lg text-white">
          <div className="title capitalize text-xl transition -translate-x-36 opacity-0 group-hover:translate-x-0  group-hover:opacity-100 transition-duration: 200ms">
            college collaboration
          </div>
          <div className="owner capitalize transition-transform transform opacity-0 group-hover:translate-x-0  group-hover:opacity-100 transition-duration: 200ms -translate-x-36">
            By Shivam Gupta
          </div>
        </div>
        <div className="item overflow-hidden bg-orange-300 rounded-xl flex justify-end flex-col items-start text-wrap text-left p-4 relative group hover:bg-gradient-to-t from-black/20 to-white/20 drop-shadow-lg text-white">
          <div className="title capitalize text-xl transition -translate-x-36 opacity-0 group-hover:translate-x-0  group-hover:opacity-100 transition-duration: 200ms">
            college collaboration
          </div>
          <div className="owner capitalize transition-transform transform opacity-0 group-hover:translate-x-0  group-hover:opacity-100 transition-duration: 200ms -translate-x-36">
            By Shivam Gupta
          </div>
        </div>
        <div className="item overflow-hidden bg-orange-300 rounded-xl flex justify-end flex-col items-start text-wrap text-left p-4 relative group hover:bg-gradient-to-t from-black/20 to-white/20 drop-shadow-lg text-white">
          <div className="title capitalize text-xl transition -translate-x-36 opacity-0 group-hover:translate-x-0  group-hover:opacity-100 transition-duration: 200ms">
            college collaboration
          </div>
          <div className="owner capitalize transition-transform transform opacity-0 group-hover:translate-x-0  group-hover:opacity-100 transition-duration: 200ms -translate-x-36">
            By Shivam Gupta
          </div>
        </div>
        <div className="item overflow-hidden bg-orange-300 rounded-xl flex justify-end flex-col items-start text-wrap text-left p-4 relative group hover:bg-gradient-to-t from-black/20 to-white/20 drop-shadow-lg text-white">
          <div className="title capitalize text-xl transition -translate-x-36 opacity-0 group-hover:translate-x-0  group-hover:opacity-100 transition-duration: 200ms">
            college collaboration
          </div>
          <div className="owner capitalize transition-transform transform opacity-0 group-hover:translate-x-0  group-hover:opacity-100 transition-duration: 200ms -translate-x-36">
            By Shivam Gupta
          </div>
        </div>
        <div className="item overflow-hidden bg-orange-300 rounded-xl flex justify-end flex-col items-start text-wrap text-left p-4 relative group hover:bg-gradient-to-t from-black/20 to-white/20 drop-shadow-lg text-white">
          <div className="title capitalize text-xl transition -translate-x-36 opacity-0 group-hover:translate-x-0  group-hover:opacity-100 transition-duration: 200ms">
            college collaboration
          </div>
          <div className="owner capitalize transition-transform transform opacity-0 group-hover:translate-x-0  group-hover:opacity-100 transition-duration: 200ms -translate-x-36">
            By Shivam Gupta
          </div>
        </div>
        <div className="item overflow-hidden bg-orange-300 rounded-xl flex justify-end flex-col items-start text-wrap text-left p-4 relative group hover:bg-gradient-to-t from-black/20 to-white/20 drop-shadow-lg text-white">
          <div className="title capitalize text-xl transition -translate-x-36 opacity-0 group-hover:translate-x-0  group-hover:opacity-100 transition-duration: 200ms">
            college collaboration
          </div>
          <div className="owner capitalize transition-transform transform opacity-0 group-hover:translate-x-0  group-hover:opacity-100 transition-duration: 200ms -translate-x-36">
            By Shivam Gupta
          </div>
        </div>
      </div>
    </>
  );
};
export default Feed;
