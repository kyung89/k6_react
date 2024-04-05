import { atom, selector } from "recoil";

export const rcnt = atom({
    key : "rcnt",
    default: 0 
});

export const rcnt2 = selector({
    key : "rcnt2",
    get: ({get}) => {
        return get(rcnt) * 2;
    } 
});