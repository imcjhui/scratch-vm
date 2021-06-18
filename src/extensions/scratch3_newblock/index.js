const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');
const fetchWithTimeout = require('../../util/fetch-with-timeout');
const log = require('../../util/log');
const Cast = require('../../util/cast');
const menuIconURI = null;
const blockIconURL = null;

class NewBlock{
        constructor(runtime){
                this.runtime = runtime;
        }

        getInfo(){
                return{
                        id:'newblock',
                        name:'New block',
                        blocks:[
                        {
                                opcode:'write',
                                blockType:BlockType.COMMAND,
                                text:'log[TEXT]',
                                arguments:{
                                        TEXT:{
                                                type:ArgumentType.STRING,
                                                //defaultValue:"hello"
                                        }
                                }
                        }
                        ],
                        menus:{
                        }
                };
        }
        write(args){
                const text = Cast.toString(args.TEXT);
                log.log(text);
        }
}
module.exports = NewBlock;