/**
 * Type Extension Manager
 * Developer(s): Bhuvanesh(bhuvanesh.arasu@infor.com)	
 */

// import readline from 'readline';
// import jake from 'jake';
// import fs from 'fs';
// import path from 'path';
// import needle from 'needle';
// import moment from 'moment'
import utils from './utils'
import CONSTANTS from './constants'

let {initModules, writeUserData, getBasicKey, processCustomer} = utils

const main = async () => {
  await initModules().then(async (essentials) => {
    console.log(essentials)
    if(!essentials.existing){
        await writeUserData()
    }
    await getBasicKey(essentials)
    await processCustomer(essentials)
    process.exit()
  })
}

main()
