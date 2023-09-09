import {fetchWorkList} from './fetch.js'
import {sendMessage, init} from './bot.js'
export var OldLengthOfWork = null;
init()
const loop = async  () => {

  let workList = await fetchWorkList();
  let lengthOfWork = workList.length;
  if(lengthOfWork > 0 && OldLengthOfWork !== lengthOfWork)
    sendMessage('Что-то есть! - ' + lengthOfWork)

  OldLengthOfWork = lengthOfWork;
  setTimeout(loop, 60000);  
};

loop();