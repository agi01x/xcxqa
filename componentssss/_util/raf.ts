import raf from 'raf';

interface RafMap {
  [id: number]: number,
}

let id: number = 0;
const ids: RafMap = {};

// Support call raf with delay specified frame
export default function wrapperRaf(callback: () => void, delayFrames: number = 1): number {
  const myId: number = id++;
  let restFrames: number = delayFrames;

  function internalCallback() {
    restFrames -= 1;

    if (restFrames <= 0) {
      callback();
      delete ids[id];
    } else {
      ids[id] = raf(internalCallback);
    }
  }

  ids[id] = raf(internalCallback);

  return myId;
}

wrapperRaf.cancel = function(id: number) {
  raf.cancel(ids[id]);
  delete ids[id];
}